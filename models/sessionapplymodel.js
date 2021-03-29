// Sessionsmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let SessionApply = new Schema({
    _id: { type: String },
    sessionId: { type: String },
    consultantId: { type: String },
    sessionNotesToEndUser: { type: String },
    sessionExecutionType: { type: String },
    fixedPriceProposal: { type: Number },
    transactionId: { type: String },
    transactionIdArray: { type: Array },
    status: { type: String, default: 'accepted' },
    sessionsExecutionCollection: { type: Object },
    sessionsOldDataCollection: { type: Object },
    sessionStartDateTime: { type: Number },
    sessionEndDateTime: { type: Number },
    mileStoneProposal: { type: Array },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    createdBy: { type: String },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    bannerUrl: { type: String },
}, {
    collection: 'session_apply'
}, {
    strict: false
});

module.exports = _app_db.model('SessionApply', SessionApply);