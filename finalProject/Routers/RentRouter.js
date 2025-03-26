const express = require("express")
const router = express.Router()
const { deleteRent,createRent,addAccessory,getRentsByUser,getAllRents,updateDate,updateRent,updateReturnRent} = require("../Controllers/RentController")

router.post("/createRent",createRent)
router.delete("/deleteRent",deleteRent)
router.get("/getRentsByUser/:userPassword",getRentsByUser)
router.get("/getAllRents",getAllRents)
//בbody נשלח תאריך אחר
router.put("/updateDate/:_id",updateDate)
//בbody נשלח תאריך אחר
router.put("/addAccessory/:_id",addAccessory)
router.put("/updateRent/:date",updateRent)
router.put("/updateReturnRent/:date",updateReturnRent)



module.exports = router