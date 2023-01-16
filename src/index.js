require('dotenv').config(); // Load environment variables.

const server = require('express')();

const Database = require('./database/database');
Database.connect(); // no async? No problem, you won't just get result this code is pretty bad anyways...

server.use('/register', (req, res) => require('./endpoints/register')(res, req.query.username, req.query.password, req.query.verify_password));
server.use('/login', (req, res) => require('./endpoints/login')(res, req.query.username, req.query.password));

server.listen(process.env.PORT, () => {
    console.log(`Started HTTP server at http://127.0.0.1:${process.env.PORT}/`);
});