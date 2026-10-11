const mongoose = require("mongoose");
const debug  =  require("debug")("development:mongoose")

mongoose.connect(`${process.env.MONGO_URI}/iship`)
.then(()=>{
    debug("DB CONNECTED!");
    
})
.catch((e) => {
    debug("DB NOT CONNECTED!" , e.message);
})

module.exports = mongoose.connection;