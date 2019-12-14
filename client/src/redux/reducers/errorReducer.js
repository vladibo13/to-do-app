import Actions from '../actions/action.config';

const initialState = {
	msg: '',
	status: null,
	id: null
};

export default function errorReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_ERRORS: {
			return {
				msg: action.payload.msg,
				status: action.payload.status,
				error: action.payload.error
			};
		}
		case Actions.CLEAR_ERRORS: {
			return {
				msg: '',
				status: null,
				error: null
			};
		}

		default:
			return state;
	}
}
