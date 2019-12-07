const express = require('express');
const router = express.Router();
const Item = require('../models/model');

router.get('/', async (req, res, next) => {
	try {
		const items = await Item.find().sort({ date: -1 });
		res.json(items);
	} catch (e) {
		console.log(e);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newItem = new Item({ name: req.body.name });
		const item = await newItem.save();
		res.json(item);
	} catch (e) {
		console.log(e);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const itemToDelete = await Item.findById(req.params.id);
		const item = await itemToDelete.remove();
		res.json({ success: true });
	} catch (e) {
		res.status(404).json({ success: false });
	}
});

module.exports = router;
