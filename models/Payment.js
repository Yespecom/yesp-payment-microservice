const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true, unique: true },
  orderId: { type: String, required: true },
  storeId: { type: String, required: true },
  tenantId: { type: String, required: true },
  method: { type: String, enum: ["razorpay", "stripe", "cod"], default: "cod" },
  status: { type: String, enum: ["paid", "failed", "pending"], default: "pending" },
  amount: Number,
  transactionRef: String,
  paidAt: Date,
  createdAt: { type: Date, default: Date.now },
})

module.exports = paymentSchema
