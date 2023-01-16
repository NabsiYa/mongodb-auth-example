const User = require('../database/schema/user');
const Crypto = require('crypto');

async function login(res, username, password)
{
    var response = {
        code: 200,
        message: "Stub.",
    };

    const user = await User.find({ username: username, password: Crypto.createHash('sha256').update(password).digest().toString('hex') });
    if (user.length != 0)
    {
        // OK, progress to send welcome message.
        response.message = `Welcome back, ${username}.`;
    } else {
        // FAIL, tell the user that the account or password does not exist.
        response.message = "Username or password is invalid.";
    }

    res.status(response.code).json(response);
}

module.exports = login;