const mongoose = require('mongoose');
const ServerConfig = require('./serverConfig');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected successfully!");
        
    }catch(error){
        console.log(error);
        process.exit(1);
    }

}


module.exports = connectDB;