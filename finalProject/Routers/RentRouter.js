const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const { deleteRent,createRent,addAccessory,getAllRents,updateRent,removeAccessory} = require("../Controllers/RentController")

=======
<<<<<<< HEAD
const { createRent,deleteRent,getRentsByUser,getAllRents,updateDate,addAccessory} = require("../Controllers/RentController")
=======
const { deleteRent,createRent,addAccessory,getRentsByUser,getAllRents,updateDate,updateRent,updateReturnRent} = require("../Controllers/RentController")
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748
>>>>>>> 5dd2218eaafacb2863d81a15644536c0e58d4f60

router.post("/createRent",createRent)
router.delete("/deleteRent/:rentId",deleteRent)
router.get("/getAllRents",getAllRents)
<<<<<<< HEAD
// וdateמקבל idמוצר בבודי
router.put("/addAccessory/:userId/:id",addAccessory)
router.put("/removeAccessory/:_id",removeAccessory)
//body- date
router.put("/updateRent/:id",updateRent)
=======
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
>>>>>>> 5dd2218eaafacb2863d81a15644536c0e58d4f60


>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748

module.exports = router