// Import Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// comment Schema
const commentSchema = new Schema({
    textContent: String,
},{
    timestamps: true
});

// post Schema
const postSchema = new Schema({
    textContent: String,
    comments: [commentSchema],
},{
        timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
