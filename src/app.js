const express = require("express")

const app = express()

app.use("/", (req,res) => {
    res.send("Home page")
})

app.use("/test",(req,res) => {
    res.send("Hello from the server")
})

app.listen(3000, () => {
    console.log("Running on port:3000")
})