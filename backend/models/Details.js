const mongoose = require('mongoose');

const { Schema } = mongoose;

const DetailsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
const Details = mongoose.model('useraddress', DetailsSchema);
module.exports = Details;