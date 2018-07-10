import { api, keys } from './api';
import h from './helpers';

export const GET_DATA = 'GET_DATA';

export function getData(){
	return ( dispatch, getState ) => new Promise((resolve, reject) => {
		fetch(api.getData, {
			method: 'GET',
			headers: {
	      'clientKey': keys.clientKey,
	    },
	    body: 'something'
		}).then(h.handleError)
			.then(res => {
				resolve();
				dispatch({
					type: GET_DATA,
					payload: res,
				});
			})
			.catch(err => reject(err));
	});
}