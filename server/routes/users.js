const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userValidation = require('../validations/userValidation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authValidation = require('../validations/authValidation');

// router.use('/register', userValidation);

router.post('/register', async (req, res, next) => {
	const { name, email, password } = req.body;
	//check if user exist in db
	const isUserExist = await User.findOne({ email });
	if (isUserExist) return res.status(400).json({ msg: 'user with this email already exist' });

	bcrypt.hash(password, 10, async (err, hash) => {
		if (err) {
			return res.status(500).json({
				error: err
			});
		} else {
			try {
				const newUser = new User({ name, email, password: hash });
				const user = await newUser.save();
				res.json({ msg: 'User Created', user });
			} catch (e) {
				return res.json({ error: e });
			}
		}
	});
});

router.post('/login', async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(401).json({ msg: 'Auth failed' });
		bcrypt.compare(password, user.password, (e, result) => {
			if (e) return res.status(401).json({ msg: 'Auth failed' });
			if (result) {
				console.log(user.email);
				const token = jwt.sign({ user }, process.env.SECRET);
				res.status(200).json({ msg: 'Auth successful', token });
			} else {
				res.status(401).json({ msg: 'Auth failed' });
			}
		});
	} catch (e) {
		return res.json({ error: e });
	}
});

router.get('/user', authValidation, async (req, res, next) => {
	console.log(req.user.user._id);
	const id = req.user.user._id;
	try {
		const user = await User.findById(id).select('-password');
		res.json(user);
	} catch (e) {
		res.status(401).json(e);
	}
});

module.exports = router;
