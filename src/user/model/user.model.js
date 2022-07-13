const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }

}, {
    timestamps: { createdAt: true, updatedAt: true }
});

module.exports = User = mongoose.model('User', userSchema);