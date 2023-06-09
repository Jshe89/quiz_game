'use client';
import React, { createContext, useContext, useState } from 'react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostProvider } from '@nhost/nextjs';
import { Layout } from 'antd';

import Navigation from './components/Navigation';
import nhost from './nhost';
import { LocalStorage } from './helpers';

import styles from './layout.module.scss';
import './globals.css';

const { Header, Footer, Content } = Layout;

const UserCtx = createContext({
	usersInfo: null,
	setUsersInfo: value => {},
});

export const useUserCtx = () => {
	return useContext(UserCtx);
};

const RootLayout = ({ children, pageProps }) => {
	const currentUser = LocalStorage.get('currentUser');
	const usersRating = LocalStorage.get('usersRating');

	const [usersInfo, setUsersInfo] = useState({ email: currentUser, rating: usersRating } || null);

	return (
		<html lang="en">
			<body>
				<NhostProvider nhost={nhost} initial={pageProps?.nhostSession}>
					<NhostApolloProvider nhost={nhost}>
						<UserCtx.Provider value={{ usersInfo, setUsersInfo }}>
							<Layout>
								<Header className={styles.header}>
									Awesome Quiz game
									<Navigation />
								</Header>
								<Content className={styles.main}>{children}</Content>
								<Footer className={styles.footer}>© 2023 Quiz game. All rights reserved.</Footer>
							</Layout>
						</UserCtx.Provider>
					</NhostApolloProvider>
				</NhostProvider>
			</body>
		</html>
	);
};

export default RootLayout;
