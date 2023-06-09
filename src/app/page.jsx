'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Form, Button } from 'antd';

import { useUserCtx } from './layout';
import { addDataToLocalStorage } from './helpers';

const Welcome = () => {
	const { usersInfo, setUsersInfo } = useUserCtx();
	const router = useRouter();
	const [form] = Form.useForm();

	const onFinish = values => {
		addDataToLocalStorage(values.email);
		setUsersInfo({ ...usersInfo, email: values.email });
		router.push('/game');
	};

	return (
		<div>
			<Form form={form} onFinish={onFinish}>
				Welcome to quiz game
				<p>Please enter your e-mail address</p>
				<Form.Item
					name="email"
					rules={[
						{
							type: 'email',
							message: 'Invalid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					]}
				>
					<Input
						style={{ width: 200 }}
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="email address"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Welcome;
