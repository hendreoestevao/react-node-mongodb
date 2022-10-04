const mongoose = require('mongoose');

const annotationsDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
})

module.exports = mongoose.model('Annotations',annotationsDataSchema);