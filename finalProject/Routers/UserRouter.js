const express = require("express")
const router = express.Router()
const {createUser,deleteUser,getUserById,updatePersonalDetails} = require("../Controllers/UserController")

router.post("/createUser",createUser)
router.delete("/deleteUser/:_id",deleteUser)
router.get("/getUserById/:_id",getUserById)
//בbody מקבל מייל טלפון וכתובת
router.put("/updatePersonalDetails/:_id",updatePersonalDetails)


module.exports = router