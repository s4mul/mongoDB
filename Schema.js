const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    title: 'string',
    text: 'string'
})

const blackboard = mongoose.model('blackboard', userSchema);
module.exports = { blackboard }