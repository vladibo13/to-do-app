import Actions from './action.config';

export const returnErrors = (msg, status, id = null) => {
	return {
		type: Actions.GET_ERRORS,
		payload: { msg, status, id }
	};
};

export const clearErrors = (msg, status, id = null) => {
	return {
		type: Actions.CLEAR_ERRORS
	};
};
