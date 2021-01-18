//Initialise Express.
import express from 'express';

//Requesting products from backend.
import products from './data/products.js';

//Requesting dotenv
import dotenv from 'dotenv';
//Requesting colors for Terminal color coding.
import colors from 'colors';
//Requesting ConnectDB from DB.JS.
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

//Test
app.get('/', (req, res) => {
	app.res('API is running...');
});
//Rauting Testing
app.get('/', (req, res) => {
	app.res('API is running...');
});

//Rauting All products render on client Browser.
app.get('/api/products', (req, res) => {
	app.res(products);
});

//Rauting -Iterate products.js Objects Erray & render each one on client Browser.
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	app.res(product);
});

//Application confirmation rendering.
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
			.bold.underline
	)
);
