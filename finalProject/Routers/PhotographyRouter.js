const express = require("express");
const router = express.Router();
const { createPhotography, getAllPhotography, addImage, addResponse, getPhotographyByName, updatePersonalDetails } = require("../Controllers/PhotographyController");

router.post("/createPhotography", createPhotography);
router.get("/getAllPhotography", getAllPhotography);
router.get("/getPhotographyByName/:photographyName", getPhotographyByName);
router.put("/addResponse/:photographyName", addResponse); // צריך לקבל ב-body את ההמלצה
router.put("/addImage/:photographyName", addImage); // צריך לקבל ב-body תמונה
router.put("/updatePersonalDetails/:_id", updatePersonalDetails); // מקבל מיל טלפון וכתובת ב-body

module.exports = router;
