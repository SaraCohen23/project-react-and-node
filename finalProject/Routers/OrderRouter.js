const express = require("express")
const router = express.Router()
const { createOrder,deleteOrder,getOrdersByPhotography,updatePhotography,getOrdersByUser,updateDate} = require("../Controllers/OrderController")

router.post("/createOrder",createOrder)
router.delete("/deleteOrder",deleteOrder)
router.get("/getOrdersByPhotography/:photographyPassword",getOrdersByPhotography)
router.get("/getOrdersByUser/:userPassword",getOrdersByUser)
router.put("/updatePhotography/:photographyName",updatePhotography)
router.put("/updateDate/:date",updateDate)


module.exports = router