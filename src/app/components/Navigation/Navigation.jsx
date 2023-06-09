import React from 'react';
import Link from 'next/link';
import { UsergroupAddOutlined, HomeOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Link href="/">
				<HomeOutlined /> Home
			</Link>
			<Link href="/rating">
				<UsergroupAddOutlined /> Rating
			</Link>
		</div>
	);
};

export default Navigation;
