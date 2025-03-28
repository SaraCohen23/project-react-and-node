const express = require("express")
const router = express.Router()
const { createPhotography,getAllPhotography,addImage,addResponse,updatePersonalDetails,getPhotographyByName} = require("../Controllers/PhotographyController")

router.post("/createPhotography",createPhotography)
router.get("/getAllPhotography",getAllPhotography)
router.get("/getPhotographyByName/:photographyName",getPhotographyByName)
//צריך לקבל בbody את ההמלצה
router.put("/addResponse/:photographyName",addResponse)
//צריך לקבל בbody תמונה
router.put("/addImage/:photographyName",addImage)
//בbody מקבל מייל טלפון וכתובת
router.put("/updatePersonalDetails/:_id",updatePersonalDetails)

module.exports = router