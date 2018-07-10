import React from 'react';
import aparat from 'svg/aparat.svg';

console.log(aparat);

export default () => (
	<div>
		<h1>Welcome to react app!</h1>
		<svg className="icon icon-aparat" viewBox={aparat.viewBox}>
			<use xlinkHref={aparat.url}></use>
		</svg>
	</div>
);