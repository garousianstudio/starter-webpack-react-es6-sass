import React from 'react';
import classNames from 'classnames';
import styles from './styles';

export default ({ id, url, viewBox, className }) => {
	/**
	 * remove '-usage' keyword if present from id
	 * svg-sprite-loader adds '-usage' keyword to generated id in extracted mode
	 * for more info check https://github.com/kisenka/svg-sprite-loader/issues/123
	 */
	const usageIndex = id.indexOf('-usage');
	const iconClass = usageIndex < 0 ? id : id.substr(0, usageIndex);

	return (
		<svg className={classNames(styles.icon, styles[iconClass], className)} viewBox={viewBox}>
			<use xlinkHref={`#${id}`}/>
		</svg>
	);
};