import { GET_DATA } from '@/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
	switch (action.type){
		case GET_DATA:
			return action.payload;
			break;
	}

	return state;
}