const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	registered_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('user', UserSchema);
