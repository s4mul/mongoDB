const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    title: 'string',
    text: 'string',
    teg: [String],
    type: 'boolean'
})

const blackboard = mongoose.model('blackboard', userSchema);
module.exports = { blackboard }