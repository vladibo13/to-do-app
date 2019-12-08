import Actions from '../actions/action.config';
import uuid from 'uuid';

const initialState = {
	items: [],
	loading: false
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_ITEMS: {
			console.log('get item reducer...');
			return {
				...state,
				items: action.payload,
				loading: false
			};
		}
		case Actions.DELETE_ITEM: {
			console.log('delete item reducer...');
			return {
				...state,
				items: state.items.filter((todo) => todo._id !== action.payload)
			};
		}
		case Actions.ADD_ITEM: {
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		}
		case Actions.ITEMS_LOADING: {
			return {
				...state,
				loading: true
			};
		}
		default:
			return state;
	}
}
