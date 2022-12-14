
const mongoose = require('mongoose')

const Admin = mongoose.model(
    'Admin',
    new mongoose.Schema ({

        full_name: {
            type: String,
            require: [true, "please added a username"]
        },

        email: {
            type: String,
            require: [true, "please added a email"]
        },

        password: {
            type: String,
            require: [true, "please added password"]
        },
    })
);

module.exports = Admin;