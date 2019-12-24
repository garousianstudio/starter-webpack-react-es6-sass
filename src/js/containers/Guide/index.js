import React from 'react';
import Icon from 'js/components/Icon';
import styles from './styles';
import instagram from 'svg/instagram';
import Instagram from 'svg/instagram?inline';


export default () => (
	<div className={styles.wrap}>
		<div className={styles.title}>Using sprite svg with <code>Icon</code> component:</div>
		<Icon {...instagram} className={styles.icon} />

		<br /><br />

		<div className={styles.title}>Using inline svg. Pay attention to import using <code>inline</code> query:</div>
		<div className={styles.title}><code>import Instagram from 'svg/instagram?inline';</code></div>
		<Instagram className={styles.instagram} />
	</div>
);