import Actions from './action.config';
import axios from 'axios';

export const getItems = () => {
	return async (dispatch) => {
		try {
			const items = await axios.get('http://localhost:5000/api/items');
			dispatch(getItemsAction(items.data));
		} catch (e) {
			console.log(e);
		}
	};
};

export const getItemsAction = (data) => ({
	type: Actions.GET_ITEMS,
	payload: data
});

export const addItem = (newItem) => {
	return async (dispatch) => {
		try {
			const item = await axios.post('http://localhost:5000/api/items', newItem);
			dispatch(addItemAction(item.data));
		} catch (e) {
			console.log(e);
		}
	};
};

export const addItemAction = (newItem) => ({
	type: Actions.ADD_ITEM,
	payload: newItem
});

export const deleteItem = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`http://localhost:5000/api/items/${id}`);
			dispatch(deleteItemAction(id));
		} catch (e) {
			console.log(e);
		}
	};
};

export const deleteItemAction = (id) => ({
	type: Actions.DELETE_ITEM,
	payload: id
});

export const setItemsLoading = () => ({
	type: Actions.ITEMS_LOADING
});
