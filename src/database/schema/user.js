const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: String,
    password: String
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel; // export our mongoose "Schema"