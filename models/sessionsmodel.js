// Sessionsmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Sessions = new Schema({
    _id: { type: String },
    serviceCategory: { type: String },
    sessionType: { type: String },
    sessionSubject: { type: String },
    sessionDescription: { type: String },
    transactionIdCollection: { type: Object },
    sessionsExecutionCollection: { type: Object },
    sessionLessonsCollection: { type: Array },
    sessionStartDateTime: { type: Number },
    sessionEndDateTime: { type: Number },
    services: { type: Array },
    location: { type: String },
    status: { type: String, default: 'pending' },
    additionalDocuments: { type: Array },
    sessionPrice: { type: Number },
    maxParticipants: { type: Number },
    facultyUserId: { type: String },
    attendeePW: { type: String },
    moderatorPW: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    createdBy: { type: String },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    bannerUrl: { type: String },
}, {
    collection: 'sessions'
}, {
    strict: false
});

module.exports = _app_db.model('Sessions', Sessions);