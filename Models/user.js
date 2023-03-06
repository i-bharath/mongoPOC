const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);