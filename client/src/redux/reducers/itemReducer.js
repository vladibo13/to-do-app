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
		case Actions.GET_ITEMS:
			return {
				...state
			};
		default:
			return state;
	}
}
