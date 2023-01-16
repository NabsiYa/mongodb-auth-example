const User = require('../database/schema/user');
const Crypto = require('crypto');

async function register(res, username, password, verify_password)
{
    var response = {
        code: 200,
        message: "Stub.",
    };

    const user = await User.find({ username: username });
    if (user.length == 0)
    {
        // OK, progress to create the account.
        if (password != verify_password)
        {
            response.message = "Password mismatch, please make sure the given input is correct.";
        } else {
            // create the user to the database.
            const user = await User.create({
                username: username,
                password: Crypto.createHash('sha256').update(password).digest().toString('hex'), // use hashed password instead of plain text.
            });

            if (user.length == 0)
            {
                response.code = 500;
                response.message = "Internal error, error occured while creating your account, please contact the site Administrator.";
            } else {
                response.message = "Account created, you can proceed to logging now using the credentials.";
            }
        }

    } else {
        // FAIL, tell the user that the account already exists.
        response.message = "Account already exists using this username, try another one.";
    }

    res.status(response.code).json(response);
}

module.exports = register;