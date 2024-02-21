require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./Routes/signup')
const authRoutes = require('./Routes/signin')
const addCoaltype = require('./Routes/addCoaltype')
const getcoaltype = require('./Routes/getCoaltypes')
const updateCoalStocks= require('./Routes/updateCoalstocks')
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
//routes

app.use("/api/login", authRoutes);//Login for users
app.use("/api/signup",userRoutes );
app.use('/api/addcoaltype',addCoaltype);
app.use('/api/getcoaltype',getcoaltype);
app.use('/api/updatecoaltype',updateCoalStocks)
//hosting the server
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));