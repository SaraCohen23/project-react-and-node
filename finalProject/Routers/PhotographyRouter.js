<<<<<<< HEAD
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
=======
const express = require("express");
const router = express.Router();
const { createPhotography, getAllPhotography, addImage, addResponse, getPhotographyByName, updatePersonalDetails,getAvailableDates } = require("../Controllers/PhotographyController");

router.post("/createPhotography", createPhotography);
router.get("/getAllPhotography", getAllPhotography);
router.get("/getPhotographyByName/:photographyName", getPhotographyByName);//body-חודש ושנה partams-צלמת
router.get("/getAvailableDates/:photographyId", getAvailableDates);
router.put("/addResponse/:photographyName", addResponse); // צריך לקבל ב-body את ההמלצה
router.put("/addImage/:photographyName", addImage); // צריך לקבל ב-body תמונה
router.put("/updatePersonalDetails/:_id", updatePersonalDetails); // מקבל מיל טלפון וכתובת ב-body
router.put("/matchPhotography/:_id", matchPhotography); // מקבל מחיר מינימלי ומקסימלי   ב-body

module.exports = router;
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748
