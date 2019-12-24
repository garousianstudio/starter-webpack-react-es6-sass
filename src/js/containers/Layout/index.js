import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from 'js/containers/List';
import NotFound from 'js/components/404';
import Guide from 'js/containers/Guide';
import Home from 'js/containers/Home';

export default () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/guide" component={Guide} />
		<Route path="/list" component={List} />
		<Route component={NotFound} />
	</Switch>
);