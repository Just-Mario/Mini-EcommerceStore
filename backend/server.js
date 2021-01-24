//Initialise Express.
import express from 'express';
//Requesting dotenv
import dotenv from 'dotenv';
//Requesting colors for Terminal color coding.
import colors from 'colors';
//Requesting ConnectDB from DB.JS.
import connectDB from './config/db.js';

//request ProductRoutes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoutes);

//Test
app.get('/', (req, res) => {
	res.send('API is running...');
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
