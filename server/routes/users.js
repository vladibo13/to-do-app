const express = require('express');
const router = express.Router();
const userValidation = require('../validations/userValidation');
const User = require('../models/User');
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
	const user = await User.findOne({ email });
	if (!user) return res.status(401).json({ msg: 'Auth failed' });
	try {
		bcrypt.compare(password, user.password, (e, result) => {
			if (e) return res.status(401).json({ msg: 'Auth failed' });
			if (result) {
				const token = jwt.sign({ id: user._id }, process.env.SECRET);
				return res.status(200).json({ msg: 'Auth successful', token });
			} else {
				return res.status(401).json({ msg: 'Auth failed' });
			}
		});
	} catch (e) {
		return res.json({ error: e });
	}
});

router.get('/user', authValidation, async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (e) {
		res.json(401).json(e);
	}
});

module.exports = router;
