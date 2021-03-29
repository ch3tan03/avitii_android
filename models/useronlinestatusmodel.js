// Useronlinestatusmodel.js

const _app_db = require('mongoose');
const Schema = _app_db.Schema;

// Define collection and schema for Business

let Useronlinestatus = new Schema({
    _id: { type: String },
    online: { type: Boolean },
    socketId: { type: String },
    createdOn: { type: Number }
}, {
    collection: 'useronlinestatus'
}, {
    strict: false
});

module.exports = _app_db.model('Useronlinestatus', Useronlinestatus);