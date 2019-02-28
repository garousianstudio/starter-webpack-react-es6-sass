import { combineReducers } from 'redux';
import postList from './containers/card-list/reducer';
import isLoading from './containers/app/reducer';

export default combineReducers({
	postList,
	isLoading,
});
