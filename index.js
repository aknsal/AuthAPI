const express = require('express');
const app = express();
// const cors = require('cors');
// const jwt = require('_helpers/jwt');
// const errorHandler = require('_helpers/error-handler');
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");

// Initiate Mongo Server
InitiateMongoServer();


app.use(express.json());
// app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());

// api routes
// app.use('/users', require('./users/users.controller'));

// global error handler
// app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("Working");
})

app.use("/user", user);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});