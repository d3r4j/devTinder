const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")


app.use(express.json())

app.post("/signup", async (req, res) => {
    // console.log(req.body)
    // const userObj = {
    //     firstName: "alex",
    //     lastName: "thompson",
    //     emailId: "alex@gmail.com",
    //     password: "alexj123 ",
    //     age: "26",
    // }

    try {
        // creating a new instance of a user model 
        const user = new User(req.body)
        await user.save();
        res.send("User addded successfully in database")
    }
    catch (err) {
        res.status(400).send("error saving the user" + err.message)
    }

})






connectDB()
    .then(() => {
        console.log("database connection successful ")
        app.listen(7777, () => {
            console.log("server is listening to port 7777")
        })

    })
    .catch(err => {

    })

