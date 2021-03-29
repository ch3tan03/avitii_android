const express = require("express");
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const _ = require("lodash");
const uuid = require('uuid4');
//const sql = require('mssql');
const bodyParser = require("body-parser");
const _app_db = require("mongoose");
const path = require("path");
const config = require("./config");
const JsonWebToken = require("jsonwebtoken");
//const Bcrypt = require("bcryptjs");
//const crypto = require('crypto');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const Utility_fns = require("./models/utilityfns");

const _hide_logs = false;
Utility_fns._hide_server_logs(_hide_logs);

// All endpoints to be used in this application
// Global declaration of the _app_db server and bucket to be used
//#region connect to server DB

//node version 3 connection string
//let _db_connection = 'mongodb+srv://dbuser:qwer1234@cluster0-pgctr.mongodb.net/konsultdb?retryWrites=true&w=majority';

//node version 2 connection string
let _db_connection = config.mongo_db_connection;
let _db_config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    poolSize: 10
};
_app_db.Promise = global.Promise;
let _mydb;
_app_db.connect(_db_connection, _db_config).then(
    (db) => {
        _mydb = db;
        console.log('Database is connected', db.models);
    },
    err => { Utility_fns._show_logs_output('Can not connect to the database: ', err) }
);
// enable files upload
app.use(fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 4 * 1024 * 1024 * 1024 //4MB max file(s) size
    }
}));

//#region set headers
let whitelist = ['http://localhost:4200', 'http://localhost:4444/', 'https://translate.google.com', 'https://live.piralo.com', 'https://educolive.herokuapp.com', 'http://konsult101.herokuapp.com', 'https://educolive.com', 'https://educolive.com', 'https://we.educolive.com', 'http://localhost', 'https://sboxcheckout.citruspay.com'];
app.use(function(req, res, next) {
    if (whitelist.indexOf(req.header('Origin')) !== -1 || whitelist.indexOf(req.header.host) !== -1) {
        //Utility_fns._show_logs_output('66', whitelist.indexOf(req.header('Origin')), whitelist, req.header('Origin'));
        //corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
        //res.header("Access-Control-Allow-Origin", req.header('Origin'));
    } else {
        //Utility_fns._show_logs_output('68', whitelist.indexOf(req.header('Origin')), whitelist, req.header);
        //res.header("Access-Control-Allow-Origin", "*");
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
/*

let corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        Utility_fns._show_logs_output('66', whitelist.indexOf(req.header('Origin')), whitelist, req.header('Origin'));
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        Utility_fns._show_logs_output('68', whitelist.indexOf(req.header('Origin')), whitelist, req.header('Origin'));
        corsOptions = { origin: false } // disable CORS for this request
    }
    corsOptions.methods = ["GET", "HEAD", "POST", "OPTIONS"];
    corsOptions.allowedHeaders = ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"];
    callback(null, corsOptions) // callback expects two parameters: error and options
};
*/
//#endregion set headers
//app.use(cors(corsOptionsDelegate));
//app.options('*', cors(corsOptionsDelegate));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("jwt-secret", "polyglotdeveloper");
app.use(express.static('user_media_uploads'));
app.use(express.static(__dirname + '/dist'));
//app.use(express.static(path.join(__dirname, "public")));
/*
app.use((request, response, next) => {
    //  var token = request.body.token || request.query.token || request.headers['x-access-token'];
    //  if (token) {
    //  // verifies secret and checks exp
    //  JsonWebToken.verify(token, app.get("jwt-secret"), function(err, decoded) {
    //          if (err) { //failed verification.
    //              return response.json({"error": true});
    //          }
    //          request.decoded = decoded;
    //          next(); //no error, proceed
    //      });
    //  } else {
    //      // forbidden without token
    //      return response.status(403).send({
    //          "error": true
    //      });
    //  }
var authHeader = request.headers["Authorization"];
Utility_fns._show_logs_output('32 :: Header :: ' + JSON.stringify(request.headers.referer));
if (authHeader) {
    var bearerToken = authHeader.split(" ");
    if (bearerToken.length == 2 && bearerToken[0].toLowerCase() == "bearer") {
        JsonWebToken.verify(bearerToken[1], app.get("jwt-secret"), function(error, decodedToken) {
            if (error) {
                return response.status(401).send("Invalid authorization token");
            }
            request.decodedToken = decodedToken;
            next();
        });
    } else {
        next();
    }
} else {
    next();
}
}); 
*/
const RecordModel = require("./models/recordmodel");
const PaymentServiceModel = require("./models/paymentservicemodel");
const AVcModel = require("./models/avcmodel");
const appEvents = require("./models/appevents")(io, RecordModel, AVcModel);
const appAVModule = require("./models/appavmodule")(io, RecordModel);
const routes = require("./routes/routes.js")(app, JsonWebToken, RecordModel, appAVModule, PaymentServiceModel);
//#endendregion connect to server DB


var requestBody = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": 9911223344,
    "amount": 100,
    "productinfo": "",
    "txnid": "123456", //generate unqiue transaction Id at client/server side
    "surl": "http://localhost:444/payment/success",
    "furl": "http://localhost:444/payment/failure"
};
PaymentServiceModel.makePayment(requestBody, function(error, response) {
    if (error) {
        console.log('161', error);
        // Some error console.log(response);
    } else {
        // You will get a link in response to redirect to payUMoney
        console.log('164', response);
        //callback(null, { 'payulink': response });
    }
});

if (!process.env.PORT) {
    process.env.PORT = config.server_default_port;
}
process.on('uncaughtException', function(err) {
    console.log('342 :: uncaughtException :: ', err);
})
http.listen(process.env.PORT, () => {
    Utility_fns._show_logs_output('312 :: Listening on port : ' + process.env.PORT);
});