const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true},
    email: { type: String, required: true, validate: {
        message: 'Please provide a valid email id',
        validator: (value) => true
    }},
    age: { type: Number, required: false},
    hobbies: [{type: String}],
    address: [{
        street: { type: String },
        city: { type: String },
        pincode: { type: Number }
    }]
})

module.exports = mongoose.model('User', userSchema);