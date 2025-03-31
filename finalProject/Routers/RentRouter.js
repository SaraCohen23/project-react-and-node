const express = require("express")
const router = express.Router()
const { deleteRent,createRent,addAccessory,getAllRents,updateRent,removeAccessory} = require("../Controllers/RentController")


router.post("/createRent",createRent)
router.delete("/deleteRent/:rentId",deleteRent)
router.get("/getAllRents",getAllRents)
// וdateמקבל idמוצר בבודי
router.put("/addAccessory/:userId/:id",addAccessory)
router.put("/removeAccessory/:_id",removeAccessory)
//body- date
router.put("/updateRent/:id",updateRent)



module.exports = router