import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/sales', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Sales Service is running on port ${PORT}`);
});