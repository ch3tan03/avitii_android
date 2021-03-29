// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let TransactionDetails = new Schema({
    _id: { type: String },
    transactionId: { type: String },
    amount: { type: Number },
    transactionActionType: { type: String },
    transactionDetailsObj: { type: Object },
    createdBy: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    deletedBy: { type: String },
    updatedBy: { type: Array },
}, {
    collection: 'transaction_details'
}, {
    strict: false
});

module.exports = _app_db.model('TransactionDetails', TransactionDetails);