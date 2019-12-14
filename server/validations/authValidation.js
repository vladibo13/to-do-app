const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');
	console.log(token);
	if (!token) return res.status(401).json({ msg: 'No Token Auth Denied' });
	try {
		const verifyToken = jwt.verify(token, process.env.SECRET);
		// console.log(verifyToken);
		req.user = verifyToken;

		next();
	} catch (e) {
		res.status(400).json({ msg: 'token is not valid' });
	}
}

module.exports = auth;
