'use client';
import React from 'react';
import { Rate } from 'antd';
import cx from 'classnames';

import { useUserCtx } from '../layout';

import styles from './styles.module.scss';

const Rating = () => {
	const { usersInfo } = useUserCtx();

	const ratingArray = Object.entries(usersInfo.rating);

	return (
		<>
			<h2>Users Rating</h2>
			<div className={styles.wrapper}>
				{ratingArray.map(user => (
					<div className={styles.rating} key={user[0]}>
						<span className={cx(styles.email, { [styles.bold]: user[0] === usersInfo.email })}>
							{user[0]}
						</span>
						{user[1] && (
							<>
								<Rate
									value={user[1].score}
									count={user[1].correctAnswers.length + user[1].wrongAnswers.length}
									disabled
								/>
								<span className={styles.score}>
									{user[1].score} / {user[1].correctAnswers.length + user[1].wrongAnswers.length}
								</span>
							</>
						)}
						{!user[1] && <Rate value={0} count={7} disabled />}
					</div>
				))}
			</div>
		</>
	);
};

export default Rating;
