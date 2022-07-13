const express = require('express');
const app = express();
const port = 5000;
// database
const mongoose = require('mongoose');

// user
const userRoutes = require('./user/route/user.route');
// register
const registerroutes = require('./registration/route/registration.route');

app.use(express.json());

//database
mongoose.connect('mongodb://localhost/swipe-and-cook-db');
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log('connected');
});


// user route
app.use('/api/v1/user', userRoutes);

// registration route
app.use('/api/v1/register', registerroutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});