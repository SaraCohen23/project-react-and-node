const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const {createUser,deleteUser,getUserById,updatePersonalDetails} = require("../Controllers/UserController")
=======
const {getUserById,createUser,updateUserDetails,deleteUser} = require("../Controllers/UserController")
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748

router.post("/createUser",createUser)
router.delete("/deleteUser/:_id",deleteUser)
router.get("/getUserById/:_id",getUserById)
<<<<<<< HEAD
//בbody מקבל מייל טלפון וכתובת
router.put("/updatePersonalDetails/:_id",updatePersonalDetails)
=======
//מקבל פרטים בbody
router.put("/updateUserDetails/:_id",updateUserDetails)
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748


module.exports = router