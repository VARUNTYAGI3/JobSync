require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const express = require("express");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
connectDB();

app.use(express.json());

app.use("/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});