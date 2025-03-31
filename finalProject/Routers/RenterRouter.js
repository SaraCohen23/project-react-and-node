const express = require("express")
const router = express.Router()
const { createPhotography,getAllPhotography,addImage,addResponse,getPhotographyByName} = require("../Controllers/PhotographyController")

router.post("/createPhotography",createPhotography)
router.get("/getAllPhotography",getAllPhotography)
router.get("/getPhotographyByName/:photographyName",getPhotographyByName)
//צריך לקבל בbody את ההמלצה
router.put("/addResponse/:photographyName",addResponse)
//צריך לקבל בbody תמונה
router.put("/addImage/:photographyName",addImage)
//מקבל מיל טלפון וכתובת בbody
router.put("/updatePersonalDetaild/:_id")

module.exports = router