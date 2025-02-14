import express from 'express';
import { json } from 'body-parser';
import routes from './routes/index';
import { authenticate } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(authenticate);

// Routes
routes(app);

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});