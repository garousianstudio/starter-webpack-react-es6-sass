import { GET_POSTS } from './constants';

export default (state = [], action) => {	
	switch(action.type){
		case GET_POSTS:			
			return action.payload;
			break;
	}

	return state;
}