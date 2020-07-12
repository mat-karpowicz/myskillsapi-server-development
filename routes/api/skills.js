const express = require("express");
const router = express.Router();
const SkillModel = require("../../Models/Skill");

//GET ALL SKILLS IF NO QUERY
router.get("/", prepareQuery, async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ msg: "Error occured", error });
  }
});

//GET SKILL BY ID
router.get("/:id", async (req, res) => {
  try {
    const skill = await SkillModel.find({ _id: req.params.id });
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ msg: "Error occured", error });
  }
});

//GET SKILLS BY QUERY (NAME, TYPE, TAG) AS A MIDDLEWARE
async function prepareQuery(req, res, next) {
  let searchQuery = {};

  if (Object.keys(req.query).length === 0) {
    return next();
  }
  if (req.query.name) {
    searchQuery.name = { $regex: ".*" + req.query.name + ".*", $options: "i" };
  }
  if (req.query.type) {
    searchQuery.type = { $regex: ".*" + req.query.type + ".*", $options: "i" };
  }
  if (req.query.tag) {
    searchQuery.tags = { $regex: ".*" + req.query.tag + ".*", $options: "i" };
  }

  try {
    const skillsQuery = await SkillModel.find(searchQuery);
    res.status(200).json(skillsQuery);
  } catch (error) {
    res.status(500).json({ msg: "Error occured", error });
  }
}

module.exports = router;
