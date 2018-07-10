import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Intro from './intro';
import NoMatch from './noMatch';
import { getData } from '@/actions';
import h from '@/helpers';

class App extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Router basename={process.env.BASENAME}>
				<Switch>
					<Route exact path="/" component={Intro}/>
					<Route component={NoMatch} />
				</Switch>
			</Router>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getData }, dispatch);
}
function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);