require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const skillRoutes = require("./routes/api/skills");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/skills", skillRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`Connected to the DB...`)
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started...`);
});
