require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShowcaseHub backend running");
});

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
