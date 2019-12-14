import Actions from '../actions/action.config';

const initialState = {
	token: localStorage.getItem('token'),
	isAuth: false,
	isLoading: false,
	user: null
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.USER_LOADING: {
			return {
				...state,
				isLoading: true
			};
		}
		case Actions.USER_LOADED: {
			return {
				...state,
				isAuth: true,
				isLoading: false,
				user: action.payload
			};
		}

		case Actions.LOGIN_SUCCESS:
		case Actions.REGISTER_SUCCESS: {
			return {
				...state,
				...action.payload,
				isAuth: true,
				isLoading: false
			};
		}
		case Actions.AUTH_ERROR:
		case Actions.LOGIN_FAIL:
		case Actions.LOGOUT_SUCCESS:
		case Actions.REGISTER_FAIL: {
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				isAuth: false,
				isLoading: false
			};
		}
		default:
			return state;
	}
}
