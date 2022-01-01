const mongoose = require('mongoose');
const uri = process.env.URI

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");

}).catch((e)=>{
    console.log(e);
})