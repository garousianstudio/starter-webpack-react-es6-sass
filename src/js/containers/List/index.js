import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from './actions';
import Card from 'js/components/Card';
import styles from './styles';


class CardList extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
		};
	}

	componentDidMount() {
		this.props.fetchPosts()
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		return (
      <div className={styles.wrap}>
        {this.state.isLoading ? (
          <div>Loading content...</div>
        ) : (
          <div className="row">
            {this.props.list.map(post => (
              <div className="col-xs-8" key={post.id}>
                <Card {...post} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
	}
}

const mapStateToProps = state => ({ list: state.list });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);