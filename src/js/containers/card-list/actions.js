import { GET_POSTS } from './constants';
import { toggleLoading } from '../app/actions';
import request from 'js/utils/request';

export const getPosts = () => {
	const url = 'https://my-json-server.typicode.com/donomron/fake-rest/posts';	

	return dispatch => new Promise((resolve, reject) => {
		dispatch(toggleLoading(true));

		request(url)
			.then(res => {
				resolve();				
				dispatch({ type: GET_POSTS, payload: res.slice(0, 6) }); 
			})
			.catch(err => reject(err))
			.finally(() => dispatch(toggleLoading(false)));	
	});
}