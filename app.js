require('dotenv').config()
const { urlencoded } = require("express");
const express = require("express");
const app = express();
require("./src/db/connection");
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render('index',{text:'world'});
});







const userRouter = require('./routes/users');
app.use("/users",userRouter);
app.listen(port);
console.log("listening on port "+port);