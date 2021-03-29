// Usermodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let User = new Schema({
    _id: { type: String },
    role: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    emailAddress: { type: String },
    password: { type: String },
    acceptnewUpdates: { type: String },
    acceptTerms: { type: Boolean },
    birthDate: { type: Number },
    nationality: { type: String },
    residence: { type: String },
    birthPlace: { type: String },
    promoCode: { type: String },
    mobileNo: { type: String },
    gender: { type: String },
    country: { type: String },
    education: { type: Array },
    achievements: { type: Array },
    additionalCertification: { type: Array },
    creditCards: { type: Array },
    skillSets: { type: Array },
    academicDocuments: { type: Array },
    employmentVerifications: { type: Array },
    externalAppLinks: { type: Array },
    hereAboutUs: { type: String },
    app_doc_type: { type: String },
    token: { type: String },
    isVerified: { type: Boolean, default: false },
    myProfileMedia: { type: Array },
    myProfileDetails: { type: String },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    selfProfileUrl: { type: String },
    online: { type: Boolean },
    socketId: { type: String },
    createdOn: { type: Number }
}, {
    collection: 'user'
}, {
    strict: false
});

module.exports = _app_db.model('User', User);