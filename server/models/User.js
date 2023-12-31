const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },

    lastName:{
        type: String,
        required: true,
    },

    ID:{
        type: Number,
        required: true,
    },

    reason:{
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel