import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Intro from './intro';
import NoMatch from './noMatch';

class App extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Provider store={this.props.store}>
				<Router basename={process.env.BASENAME}>
					<Switch>
						<Route exact path="/" component={Intro}/>
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;