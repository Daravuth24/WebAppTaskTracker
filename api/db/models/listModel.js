const mongoose = require('mongoose');

const Listschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const List = mongoose.model('List', Listschema);

module.exports = { List }