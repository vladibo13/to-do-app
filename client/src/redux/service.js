import axios from 'axios';

export const getItemsService = async () => {
	try {
		const { data } = await axios.get('http://localhost:5000/api/items');
		return data;
	} catch (ex) {
		return [];
	}
};
