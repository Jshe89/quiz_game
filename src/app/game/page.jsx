'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import { Button, Form, Radio, Space } from 'antd';

import Loading from '../components/Loading';
import Error from '../components/Error';
import { GET_QUESTIONS, addDataToLocalStorage } from '../helpers';
import { useUserCtx } from '../layout';
import nhost from '../nhost';

import styles from './styles.module.scss';

const Game = () => {
	const { setUsersInfo, usersInfo } = useUserCtx();
	const router = useRouter();
	const { loading, error, data } = useQuery(GET_QUESTIONS);

	const [currentStep, setCurrentStep] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [solutions, setSolutions] = useState([]);
	const [result, setResult] = useState(null);
	const [isRequestError, setIsRequestError] = useState(false);

	const questions = data ? data.questions : null;

	const next = () => {
		setCurrentStep(currentStep + 1);
	};

	const onRadioChange = value => {
		const newSolutions =
			!solutions.length || !solutions.some(solution => solution.question_id === value.question_id)
				? [...solutions, value]
				: solutions.map(solution => {
						if (solution.question_id === value.question_id) {
							return value;
						}
						return solution;
				  });
		setSolutions(newSolutions);
	};

	const submitAnswers = async () => {
		try {
			setIsLoading(true);

			const {
				res: { data },
			} = await nhost.functions.call('evaluate', {
				solutions,
			});
			setResult(data);
			setUsersInfo({
				...usersInfo,
				rating: {
					...usersInfo.rating,
					[usersInfo.email]: data,
				},
			});

			addDataToLocalStorage(usersInfo.email, data);
			router.push('/rating');
		} catch (err) {
			setIsRequestError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{loading && <Loading />}
			{(error || isRequestError) && <Error />}
			{questions && !result && (
				<div className={styles.formWrapper}>
					<h3>
						{currentStep + 1}. {questions[currentStep].question}
					</h3>
					<Form className={styles.form} onFinish={submitAnswers}>
						<Form.Item>
							<Radio.Group
								name={`radio-${questions[currentStep].id}`}
								onChange={e =>
									onRadioChange({ answer_id: e.target.value, question_id: questions[currentStep].id })
								}
							>
								<Space direction="vertical">
									{questions[currentStep].answers.map(({ id, answer }) => (
										<Radio key={id} value={id}>
											{answer}
										</Radio>
									))}
								</Space>
							</Radio.Group>
						</Form.Item>
						<Form.Item>
							{currentStep < questions.length - 1 && (
								<Button type="primary" onClick={next}>
									Next
								</Button>
							)}
							{currentStep === questions.length - 1 && (
								<Button
									type="primary"
									htmlType="submit"
									loading={isLoading}
									disabled={questions.length !== solutions.length}
								>
									Done
								</Button>
							)}
						</Form.Item>
					</Form>
				</div>
			)}
		</>
	);
};

export default Game;
