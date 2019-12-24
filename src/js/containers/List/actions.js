import { FETCH_POSTS } from './constants';
import request from 'js/utils/request';

export const fetchPosts = () => {
	const url = 'https://my-json-server.typicode.com/donomron/fake-rest/posts';

	return dispatch => new Promise((resolve, reject) => {
		request(url)
			.then(res => {
				resolve();
				dispatch({ type: FETCH_POSTS, payload: res.slice(0, 6) });
			})
			.catch(err => reject(err));
	});
}