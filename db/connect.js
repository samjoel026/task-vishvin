const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/employee_management')
        console.log(' MongoDB is connected');
    }
    catch (err) {

        next(err);
    }

}

module.exports = connectDB;
