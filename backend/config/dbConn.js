const mongoose = require ('mongoose');

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.DB_URL);
        console.log('Database Conneted Successfully')
        
    } catch (error) {
        console.log(`Database Connection Failed`)
        
    }
}

module.exports = connectDB;