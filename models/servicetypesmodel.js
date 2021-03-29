// ServicesTypesmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let ServicesTypes = new Schema({
    _id: { type: String },
    name: { type: String },
    rateType: { type: String },
    parentServicesTypesId: { type: String },
    description: { type: String },
    feeFromUserFixedAmount: { type: Number },
    serviceFeeFromUserFixedAmount: { type: Number },
    feeToConsultFixedAmount: { type: Number },
    commisionToProtalFixedAmount: { type: Number },
    serviceFeeFromUserPercentage: { type: Number },
    feeToConsultPercentage: { type: Number },
    commisionToProtalPercentage: { type: Number },
    skillTags: { type: Array },
    createdOn: { type: Number },
    updatedOn: { type: Number },
    isDeleted: { type: Boolean },
    deletedBy: { type: String },
    updatedBy: { type: Array },
    createdOn: { type: Number }
}, {
    collection: 'servicestypes'
}, {
    strict: false
});

module.exports = _app_db.model('ServicesTypes', ServicesTypes);