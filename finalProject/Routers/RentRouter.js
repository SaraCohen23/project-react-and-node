const express = require("express")
const router = express.Router()
const { createRent,deleteRent,getRentsByUser,getAllRents,updateDate,addAccessory} = require("../Controllers/RentController")

router.post("/createRent",createRent)
router.delete("/deleteRent",deleteRent)
router.get("/getRentsByUser/:userPassword",getRentsByUser)
router.get("/getAllRents",getAllRents)
// בbody נשלח תאריך אחר
router.put("/updateDate/:_id",updateDate)
router.put("/addAccessory/:_id",addAccessory)

module.exports = router