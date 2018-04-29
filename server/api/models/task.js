const mongoose = require('mongoose');
//mongoose.set('debug', true);
// TODO: date validation , comment length validation
// console.log('date ===>', Date.now());

const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        default: ''
    },
    finished: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);