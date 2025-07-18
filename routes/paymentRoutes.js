const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const { createPayment, getPayments } = require("../controllers/paymentController")

router.post("/", auth, createPayment)
router.get("/", auth, getPayments)

module.exports = router
