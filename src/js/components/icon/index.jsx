import React from 'react';
import styles from './styles';

export default props => {
	/**
	 * remove '-usage' keyword if present from id 
	 * svg-sprite-loader adds '-usage' keyword to generated id in extracted mode
	 * for more info check https://github.com/kisenka/svg-sprite-loader/issues/123	 
	 */
	const usageIndex = props.id.indexOf('-usage');
	const className = usageIndex < 0 ? props.id : props.id.substr(0, usageIndex);
	
	return (
		<svg className={styles[className]} viewBox={props.viewBox}>
			<use xlinkHref={props.url}/>
		</svg>
	);
}