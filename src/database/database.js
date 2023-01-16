const mongoose = require('mongoose');

const User = require('./schema/user');

async function connect()
{
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URL); // if no want certain collection do not add users ok?
}

module.exports = {
    connect: connect
}