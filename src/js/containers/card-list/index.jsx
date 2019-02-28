import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from './actions';
import Card from 'js/components/card';
import styles from './styles';

class CardList extends Component{
	constructor(props) {
		super(props);

		this.props.getPosts();
	}

	render() {
		const { 
			isLoading,
			postList,
		} = this.props;		

		return (
			<div className={styles.wrap}>
				{
					isLoading ? (
						<div>Loading content...</div>
					) : (
						<div className="row">
							{postList.map(post => (
								<div className="col-xs-8" key={post.id}>
									<Card {...post}/>
								</div>
							))}											
						</div>
					)
				}
			</div>
		)			
	}
}

function mapStateToProps(state){
	const { postList, isLoading } = state;
	return {
		postList,
		isLoading,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);