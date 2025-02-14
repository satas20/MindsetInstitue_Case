import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect("mongodb://localhost:27017/user-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
