const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const { createAccessory,deleteAccessory,getAccessoryByGalery,updateRent,updateReturnRent} = require("../Controllers/AccessoryController")

router.post("/createAccessory",createAccessory)
router.delete("/deleteAccessory",deleteAccessory)
router.get("/getAccessoryByGalery/:galery",getAccessoryByGalery)
router.put("/updateRent/:date",updateRent)
router.put("/updateReturnRent/:date",updateReturnRent)


=======
const { createAccessory,deleteAccessory,getAccessoryByGallery,updateAccessory,addRent,addRenter} = require("../Controllers/AccessoryController")

router.post("/createAccessory",createAccessory)
router.delete("/deleteAccessory",deleteAccessory)
router.get("/getAccessoryByGallery/:galery",getAccessoryByGallery)
router.put("/updateAccessory/:id",updateAccessory)
//לשלוח בbody rent
router.put("/addRent",addRent)
//לשלוח בbody renter
router.put("/addRenter",addRenter)
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748
module.exports = router