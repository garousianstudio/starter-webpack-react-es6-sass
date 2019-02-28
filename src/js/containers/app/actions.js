import { LOADING} from './constants';

export const toggleLoading = isLoading => (
	{
		type: LOADING,
		payload: isLoading
	}
);