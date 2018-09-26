import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getData }, dispatch);
}
function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);