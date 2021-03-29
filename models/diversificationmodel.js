// diversificationmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Diversification = new Schema({
    _id: {type: String},
    created_by: {type:String},
    created_on: {type: Number},
    updated_on: {type: Number},
    app_doc_type:{type: String},
    is_deleted :{type:Boolean},
    deleted_by :{type:String},
    updated_by :[{}],
    category: {type:String},
    percentage:{type: Number},
    business_percentage:{type: Number},
    invester_percentage:{type: Number},
    },{
        collection: 'diversification'
    },{ 
        strict: false 
    });

module.exports = _app_db.model('Diversification', Diversification);