const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  github: { type: String },
  live: { type: String },
});

const skillSchema = mongoose.Schema({
  display_name: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  usage: { type: String, required: true },
  projects: [projectsSchema],
  tags: [String],
});

module.exports = mongoose.model("Skill", skillSchema);
