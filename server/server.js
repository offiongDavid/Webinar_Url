const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const connectDB = require("./config/db");
const registrationRoutes = require("./routes/registrationRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", registrationRoutes);
app.use("/api/admin", adminRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});