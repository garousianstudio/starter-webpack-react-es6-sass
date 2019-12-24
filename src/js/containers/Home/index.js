import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import Title from './title';

export default () => (
	<div className={styles.wrap}>
		<Title>Welcome to Garousian Studio React/Redux Starter Kit! :)</Title>
		<p className={styles.p}>Go to <Link to="/guide">guide page</Link> for more components and help.</p>
		<p className={styles.p}>Go to <Link to="/list">list page</Link> to visit a list of cards as a sample of fetching data.</p>
	</div>
);