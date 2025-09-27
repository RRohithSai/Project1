const express = require("express");
const connectDB = require("./db/db");
const todoRouter = require("./routes/todoRouter");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mount routes
app.use("/api/todos", todoRouter);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
