'use client';
import React from 'react';
import { Layout, Space } from 'antd';
import { Inter } from 'next/font/google';

import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
	title: 'Game',
};

const GameLayout = ({ children }) => {
	return <div className={styles.main}>{children}</div>;
};

export default GameLayout;
