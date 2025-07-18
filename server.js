require("dotenv").config() // This line is kept as per your original code, though .env files are not directly used in Next.js.
const express = require("express")
const app = express()
const paymentRoutes = require("./routes/paymentRoutes")
const { connectMainDB } = require("./config/db") // Import connectMainDB

app.use(express.json())
app.use("/api/payments", paymentRoutes)

app.get("/", (req, res) => res.send("✅ YESP Payment Microservice Running"))

// Connect to main DB on startup
connectMainDB()
  .then(() => {
    app.listen(5008, () => {
      // Running on port 5008 as requested
      console.log(`🚀 Payment Microservice running on port 5008`)
    })
  })
  .catch((err) => {
    console.error("Failed to connect to main database:", err)
    process.exit(1)
  })
