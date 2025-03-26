const express = require("express")
const router = express.Router()
const { createAccessory,deleteAccessory,getAccessoryByGallery,updateAccessory,addRent,addRenter} = require("../Controllers/AccessoryController")

router.post("/createAccessory",createAccessory)
router.delete("/deleteAccessory",deleteAccessory)
router.get("/getAccessoryByGallery/:galery",getAccessoryByGallery)
router.put("/updateAccessory/:id",updateAccessory)
//לשלוח בbody rent
router.put("/addRent",addRent)
//לשלוח בbody renter
router.put("/addRenter",addRenter)
module.exports = router