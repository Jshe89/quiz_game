'use client';
import styles from './styles.module.scss';

const GameLayout = ({ children }) => {
	return <div className={styles.main}>{children}</div>;
};

export default GameLayout;
