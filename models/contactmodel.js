// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Contact = new Schema({
    _id: { type: String },

    firstName: { type: String },

    usersColl: { type: Object },
    isGroup: { type: Boolean, default: false },
    status: { type: String },
    createdBy: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    online: { type: Boolean },
    socketId: { type: String },
    createdOn: { type: Number }
}, {
    collection: 'contact'
}, {
    strict: false
});

module.exports = _app_db.model('Contact', Contact);