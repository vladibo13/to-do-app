import Actions from './action.config';
import axios from 'axios';
import { returnErrors, clearErrors } from './errorAction';

export const loadUser = () => {
	return async (dispatch, getState) => {
		//User Loading
		dispatch(loadingUserAction());

		try {
			const result = await axios.get('http://localhost:5000/api/auth/user', tokenConfig(getState));
			dispatch(loadedUserAction(result));
		} catch (e) {
			dispatch(returnErrors(e.response.data, e.response.status));
			dispatch(authErorAction());
		}
	};
};
export const loadedUserAction = (result) => ({
	type: Actions.USER_LOADED,
	payload: result.data
});
export const loadingUserAction = () => ({
	type: Actions.USER_LOADING
});

export const authErorAction = () => ({
	type: Actions.AUTH_ERROR
});

//setup config headers
export const tokenConfig = (getState) => {
	const token = getState().auth.token;
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};
	if (token) {
		config.headers['x-auth-token'] = token;
	}
	return config;
};
