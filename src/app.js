const express = require("express");
const app = express();


app.get("/user", (req, res) => {
    res.send({ firstName: "Dhiraj", lastName: "Channe" })
})

app.post("/user", (req, res) => {

    res.send("data successfully saved to database!")
})
app.use("/test", (req, res) => {
    res.send("server testing activated")
})

app.listen(3000, () => {
    console.log("server running on port 3000")
});
