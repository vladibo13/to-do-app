import Actions from './action.config';

export const getItems = () => ({
	type: Actions.GET_ITEMS
});

export const deleteItem = (id) => ({
	type: Actions.DELETE_ITEM,
	payload: id
});

export const addItem = (newItem) => ({
	type: Actions.ADD_ITEM,
	payload: newItem
});
