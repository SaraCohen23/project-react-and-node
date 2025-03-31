const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const { createRent,deleteRent,getRentsByUser,getAllRents,updateDate,addAccessory} = require("../Controllers/RentController")
=======
const { deleteRent,createRent,addAccessory,getRentsByUser,getAllRents,updateDate,updateRent,updateReturnRent} = require("../Controllers/RentController")
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748

router.post("/createRent",createRent)
router.delete("/deleteRent",deleteRent)
router.get("/getRentsByUser/:userPassword",getRentsByUser)
router.get("/getAllRents",getAllRents)
<<<<<<< HEAD
// בbody נשלח תאריך אחר
router.put("/updateDate/:_id",updateDate)
router.put("/addAccessory/:_id",addAccessory)
=======
//בbody נשלח תאריך אחר
router.put("/updateDate/:_id",updateDate)
//בbody נשלח תאריך אחר
router.put("/addAccessory/:_id",addAccessory)
router.put("/updateRent/:date",updateRent)
router.put("/updateReturnRent/:date",updateReturnRent)


>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748

module.exports = router