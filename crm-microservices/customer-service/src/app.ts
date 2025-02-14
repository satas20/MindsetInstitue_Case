import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import { connectToDatabase } from "./models/index";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Routes
app.use("/customers", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Customer Service is running on port ${PORT}`);
});
