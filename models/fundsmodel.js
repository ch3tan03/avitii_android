// fundsmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Funds = new Schema({
    _id: { type: String },
    created_by: { type: String },
    transactionId: { type: String },
    description: { type: String, default: '' },
    amount: { type: Number },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    app_doc_type: { type: String },
    is_deleted: { type: Boolean },
    deletedBy: { type: String },
    updatedBy: [{}]
}, {
    collection: 'funds'
}, {
    strict: false
});

module.exports = _app_db.model('Funds', Funds);