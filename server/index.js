require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemsRoutes = require('./routes/items');

app.use(bodyParser.json());
mongoose.connect(
	process.env.DB_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	},
	(e, conn) => {
		if (e) console.log(e);
		console.log('connected to DB');
	}
);

app.use('/api/items', itemsRoutes);
app.get('/', (req, res, next) => {
	res.json({
		msg: 'hello world'
	});
});

app.listen(process.env.PORT, () => {
	console.log(`app listening on port ${process.env.PORT}`);
});