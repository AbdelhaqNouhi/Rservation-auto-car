
const mongoose = require('mongoose')

const Travel = mongoose.model(
    'Travel',
    new mongoose.Schema ({

        from: {
            type: String,
            required: [true, 'Please select from ?']
        },

        to: {
            type: String,
            required: [true, 'Please select where to go ?']
        },

        departure_time: {
            type: String,
            required: [true, 'Please select time ?']
        },

        departure_date: {
            type: String,
            default: () => Date.now(),
        },

        arrival_time: {
            type: String,
            required: [true, 'Please select time arrival ?']
        },

        arrival_date: {
            type: String,
            default: () => Date.now(),
        },

        seats_total: {
            type: Number,
            required: [true, 'Please select seat total ?'], 
            default: 50
        },

        price : {
            type: String,
            required: [true, 'Please added price ?'], 
        },

        // reserved_seat: {
        //     type: Number,
        //     required: [true, 'Please select reserved_seat  ?']
        // },

        // Break_point: {
        //     type: [String],
        //     default: ["agadir", "casa"]
        // },

        // CreatedBy: {
        //     type: mongoose.Types.ObjectId,
        //         ref: "Admin",
        //         required: true
        // },

        isDeleted: {
            type: Boolean,
            default: false
        },
    }) 
)

module.exports = Travel;