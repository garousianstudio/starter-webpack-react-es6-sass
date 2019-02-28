import { LOADING } from './constants';

export default (state = false, action) => {
	switch(action.type){
		case LOADING:
			return action.payload
			break;
	}
	
	return state;
}