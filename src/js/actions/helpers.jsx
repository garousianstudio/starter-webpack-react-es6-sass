const helper = {};

helper.handleError = response => {
	if(!response.ok){
		throw Error(response.status);
	}

	return response;
};

export default helper;