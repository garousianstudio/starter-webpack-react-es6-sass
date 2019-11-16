import React from 'react';

export default ({ history }) => {
	const url = history.createHref(history.location);

	return (
		<div>Error 404: No match found for <code>${url}</code></div>
	);
}