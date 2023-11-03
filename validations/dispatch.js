const mongoose = require('mongoose')

const dispatchSkema = new mongoose.Schema({
    dispatch_id: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.trim().length > 0;
            },
            message: 'Dispatch ID must be a non-empty string'
        }
    },
    dispatch_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bvn: {
        type: String,
        required: true
    },
    dispatch_plate_number: {
        type: String,
        required: true
    }
});

//const Dispash = mongoose.model('Dispatch', dispatchSkema);

module.exports = dispatchSkema; 