// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Transaction = new Schema({
    _id: { type: String },
    transactionId: { type: String },
    transactionActionType: { type: String },
    transactionObj: { type: Object },
    fundsObj: { type: Object },
    createdBy: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    createdOn: { type: Number }
}, {
    collection: 'transaction'
}, {
    strict: false
});

module.exports = _app_db.model('Transaction', Transaction);