const express = require("express")
const router = express.Router()
const {getUserById,createUser,updateUserDetails,deleteUser} = require("../Controllers/UserController")

router.post("/createUser",createUser)
router.delete("/deleteUser/:_id",deleteUser)
router.get("/getUserById/:_id",getUserById)
//מקבל פרטים בbody
router.put("/updateUserDetails/:_id",updateUserDetails)


module.exports = router