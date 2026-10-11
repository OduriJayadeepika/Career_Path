const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")


app.use(cookieParser())
const bodyParser = require("body-parser")
require("dotenv").config();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));



const loginRouter = require("./routes/LoginRouter")
const signupRouter = require("./routes/signupRouter");
const ResumeRouter = require("./routes/ResumeMaker");
const Loggedin = require("./routes/Loggedin");
const db = require("./config/mongoConnection")


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/",  ResumeRouter)
app.use("/login", loginRouter)
app.use("/signup", signupRouter)
app.use("/loggedin", Loggedin)

app.listen(4000)