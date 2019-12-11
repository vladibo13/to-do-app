const Joi = require('@hapi/joi');

const itemSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().required(),
	date: Joi.date()
});

function itemValidation(req, res, next) {
	const { error } = itemSchema.validate(req.body);
	if (error) return res.json({ error });
	next();
}

module.exports = itemValidation;
