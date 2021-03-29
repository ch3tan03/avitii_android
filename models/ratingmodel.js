// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Rating = new Schema({
    _id: { type: String },
    userId: { type: String },
    sessionId: { type: String },
    createdBy: { type: String },
    rating: { type: Number },
    comment: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    createdOn: { type: Number }
}, {
    collection: 'rating'
}, {
    strict: false
});

module.exports = _app_db.model('Rating', Rating);