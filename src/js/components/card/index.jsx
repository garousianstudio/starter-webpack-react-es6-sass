import React from 'react';
import Btn from '../btn';
import styles from './styles';
import Icon from '../icon';
import user from 'svg/user';

export default props => (
	<div className={styles.wrap}>
		<Icon {...user}/>
		<h2 className={styles.title}>{props.title}</h2>
		<p className={styles.desc}>{props.desc}</p>
		<footer>
			<Btn title="Read More"/>
		</footer>
	</div>
);