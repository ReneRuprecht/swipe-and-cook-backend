const express = require('express');
const app = express();
const port = 5000;

// database
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/swipe-and-cook-db');
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log('connected');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});