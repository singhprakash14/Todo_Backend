const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.route');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const Port = process.env.PORT || 5000;
const colors = require("colors");
const { connectToMongoDB } = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);



app.get("/", (req, res) => {
  res.send("Bharat Mata ki Jai");
});


app.listen(Port, async () => {
  // Connect to MongoDB
  await connectToMongoDB();
  console.log(`Server is listening on port ${Port}`.bgBlue.white);
});
