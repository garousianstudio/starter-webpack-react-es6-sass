import { FETCH_POSTS } from './constants';

export default (state = [], action) => {
	switch(action.type){
		case FETCH_POSTS:
			return action.payload;
			break;
	}

	return state;
}