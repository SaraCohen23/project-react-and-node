const express = require("express")
const router = express.Router()
const { createAccessory,deleteAccessory,getAccessoryByGalery,updateRent,updateReturnRent} = require("../Controllers/AccessoryController")

router.post("/createAccessory",createAccessory)
router.delete("/deleteAccessory",deleteAccessory)
router.get("/getAccessoryByGalery/:galery",getAccessoryByGalery)
router.put("/updateRent/:date",updateRent)
router.put("/updateReturnRent/:date",updateReturnRent)


module.exports = router