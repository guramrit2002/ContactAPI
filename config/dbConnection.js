const mongoose = require('mongoose');
const dotenv = require('dotenv')

const connectDb = async () => {
    try {
        dotenv.config()
        const connect = await mongoose.connect(process.env.CONNECTION_STRING_DB,);
        console.log('Database is connected !!', connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDb;
