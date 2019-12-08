import Actions from '../actions/action.config';
import uuid from 'uuid';

const initialState = {
	items: [
		{ id: uuid(), name: 'first' },
		{ id: uuid(), name: 'second' },
		{ id: uuid(), name: 'third' },
		{ id: uuid(), name: 'fourth' },
		{ id: uuid(), name: 'fifth' },
		{ id: uuid(), name: 'six' }
	]
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_ITEMS: {
			console.log('get item reducer...');
			return {
				...state
			};
		}
		case Actions.DELETE_ITEM: {
			console.log('delete item reducer...');
			return {
				...state,
				items: state.items.filter((todo) => todo.id !== action.payload)
			};
		}
		case Actions.ADD_ITEM: {
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		}
		default:
			return state;
	}
}
