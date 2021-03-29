// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Chat = new Schema({
    _id: { type: String },
    userId: { type: String },
    roomId: { type: String },
    isGroup: { type: Boolean, default: false },
    chatType: { type: String },
    message: { type: String },
    selfProfileUrl: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    createdOn: { type: Number }
}, {
    collection: 'chat'
}, {
    strict: false
});

module.exports = _app_db.model('Chat', Chat);