var db = require("../server").bucket;
const config = require("../config");
const UUID = require("uuid");
const Bcrypt = require("bcryptjs");
const moment = require("moment");
var Utility_fns = require("../models/utilityfns");
const _ = require("lodash");
const NodeCache = require("node-cache");
const path = require("path");
const fs = require('fs-extra');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });


let UserModel = require('../models/usermodel');
let UserOnline = require('../models/useronlinestatusmodel');
let SessionModel = require('../models/sessionsmodel');
let SessionApplyModel = require('../models/sessionapplymodel');
let ServicesTypesModel = require('../models/servicetypesmodel');
let ChatModel = require('../models/chatmodel');
let DiversificationModel = require('../models/diversificationmodel');
let FundsModel = require('../models/fundsmodel');
let ContactModel = require('../models/contactmodel');
let TransactionModel = require('../models/transactionmodel');
let TransactionDetailsModel = require('../models/transactiondetailsmodel');
let RatingModel = require('../models/ratingmodel');
let NotificationModel = require('../models/notificationmodel');

let _maxTimeOutInMs = 500;
let _maxSearchLimit = 50;

function RecordModel() {};

function _set_cache_key_with_data(_key, _obj) {
    let value = myCache.del(_key); //delete old data if any available 
    let success = myCache.set(_key, _obj, 900); //15 Mins auto expiry
    Utility_fns._show_logs_output("18 :: myCache Save :: " + _key + ' :: ' + value + ' :: ' + success);
}

function _get_cache_data_from_key(_key) {
    let value = myCache.get(_key); //read data if any available 
    Utility_fns._show_logs_output("23 :: myCache Read :: " + _key);
    return value;
}
/*
 * Delete a document from Couchbase Server by document id
 */
Utility_fns._show_logs_output(db);
RecordModel.userDeletedById = function(documentId, _deletedBy, _callback) {
    UserModel.findById(documentId, function(error, user) {
        if (!user) {
            _callback(error, null);
        } else {
            user.isDeleted = true;
            user.deletedBy = _deletedBy;
            user.updatedOn = _.now();
            user.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};

/*
 * Save a document.  If a document id is not provided an insert will happen, otherwise update.  Thus an upsert.
 */
RecordModel.userSaveWithoutAnyValidation = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var documentId = data.id ? data.id : UUID.v4();

    let user = new UserModel(data);
    user.save().then(user_data => {
        _callback(null, { message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
}

RecordModel.userUpdateDataById = function(data, _callback) {
        // If the document id doesn't exist create a unique id for inserting
        let fieldsToUpdate = [
            'firstName',
            'lastName',
            'acceptnewUpdates',
            'birthDate',
            'nationality',
            'residence',
            'birthPlace',
            'promoCode',
            'emailAddress',
            'gender',
            'country',
            'achievements',
            'education',
            'educationCertification',
            'creditCards',
            'skillSets',
            'academicDocuments',
            'employmentVerifications',
            'externalAppLinks',
            'myProfileMedia',
            'myProfileDetails',
            'selfProfileUrl'
        ];

        let documentId = data._id;
        let _updatedUser = new UserModel(data);

        UserModel.findById(documentId, function(error, user) {
            if (!user) {
                _callback(error, null);
            } else {
                //Utility_fns._show_logs_output('95',data);
                let _updatedObject = _.pick(data, fieldsToUpdate);
                for (let _index in _updatedObject) {
                    user[_index] = _updatedObject[_index];
                }
                //Utility_fns._show_logs_output('97',_.pick(data, fieldsToUpdate));
                //Utility_fns._show_logs_output('98',user);
                user.updatedOn = _.now();
                user.save().then(result => {
                    _callback(null, result);
                }).catch(error => {
                    _callback(error, null);
                });
            }
        });
    }
    /*
     * Get a particular document from Couchbase Server using a parameterized N1QL query
     */
RecordModel.userGetByDocumentId = function(userId, _callback) {
    UserModel.findById(userId, function(error, user) {
        if (!user) {
            _callback(error, null);
        } else {
            _callback(null, user);
        }
    });
};

/*
 * Get all documents from Couchbase Server using N1QL
 */
//#region search user all
RecordModel.userGetAll = function(_userType, _callback) {
    let _filterQuery = {
        isDeleted: { $ne: true }
    };
    if (_userType) {
        _filterQuery.role = _userType;
    }
    UserModel.find(_filterQuery, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all user

//#region search Admin user from userName 
RecordModel.userGetByAdminUserName = function(_username, _userType, _callback) {
    UserModel.findOne({ userName: new RegExp('^' + _username + '$', "i"), isDeleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search Admin user from userName 

//#region search user from userName 
RecordModel.userGetByUserName = function(_username, _callback) {
    UserModel.find({ userName: _username, isDeleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search user from userName
//#region search Admin user from userName
RecordModel.userGetByAdminUserName_and_Password = function(_username, _password, _userType, _callback) {
    UserModel.findOne({ userName: new RegExp('^' + _username + '$', "i") }, function(error, account) {
        //Utility_fns._show_logs_output('128', account)
        if (Utility_fns._returnT_4undefined(account)) {
            account = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            if (Utility_fns._returnT_4undefined(account)) {
                return _callback({ "success": false, "message": "Invalid userName", data: {} });
            } else {
                //Utility_fns._show_logs_output('138', account);
                Bcrypt.compare(_password, account.password, function(error, result) {
                    if (error || !result) {
                        return _callback({ "success": false, "message": "Invalid password", data: {} });
                    }
                    if (Utility_fns._returnT_4undefined(account)) {
                        return _callback({ "success": false, "message": "Invalid password", data: {} });
                    } else {
                        _callback(null, { "success": true, "message": "success", data: account });
                    }
                });
            }
        }
    });
};
//#endregion search Admin user from userName
//#region search user from userName 
RecordModel.userGetByUserName_and_Password = function(_username, _password, _userType, _callback) {
    UserModel.findOne({ userName: new RegExp('^' + _username + '$', "i"), isDeleted: { $ne: true } }, function(error, account) {
        if (Utility_fns._returnT_4undefined(account)) {
            account = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            if (Utility_fns._returnT_4undefined(account)) {
                return _callback({ "success": false, "message": "Invalid userName", data: {} });
            } else {
                Bcrypt.compare(_password, account.password, function(error, result) {
                    if (error || !result) {
                        return _callback({ "success": false, "message": "Invalid password", data: {} });
                    }
                    if (Utility_fns._returnT_4undefined(account)) {
                        return _callback({ "success": false, "message": "Invalid password", data: {} });
                    } else {
                        _callback(null, { "success": true, "message": "success", data: account });
                    }
                });
            }
        }
    });
};
//#endregion search user from userName
//#region register new Admin user
RecordModel.userRegisterNewAdminUser = function(_data, _callback) {
    var _jsonObject = _data;
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.password = Bcrypt.hashSync(_data.password, 10);
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let user = new UserModel(_data);
    //Utility_fns._show_logs_output('194', user);
    user.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion register new Admin user
//#region register new user
RecordModel.userRegisterNewUser = function(_data, _callback) {
    var _jsonObject = _data;
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.password = Bcrypt.hashSync(_data.password, 10);
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let user = new UserModel(_data);
    user.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        console.log('278', error);
        _callback(error, null);
    });
};
//#endregion register new user

//#region function to upload media on server and return publically accesible path
RecordModel._upload_provided_file_data_on_server_and_return_public_path = function(_assetMedia, _additional_data) {
        //Utility_fns._show_logs_output('273', _assetMedia);
        Utility_fns._show_logs_output('274', _additional_data);
        let _resultData = null;
        try {
            if (!_assetMedia) {
                _resultData = {
                    status: 0,
                    message: 'No file uploaded'
                };
            } else {
                //Use the name of the input field (i.e. "assetMedia") to retrieve the uploaded file
                let _sub_folder2use = '';
                let _rename_file_to_this = '';
                let _file_path2upload = '';
                if (!Utility_fns._returnT_4undefined(_additional_data)) {
                    if (!Utility_fns._returnT_4undefined(_additional_data.documentId)) {
                        _sub_folder2use = _additional_data.documentId;
                    }
                    if (!Utility_fns._returnT_4undefined(_additional_data.rename_file_to_this)) {
                        _rename_file_to_this = _additional_data.rename_file_to_this;
                    }
                }
                if (Utility_fns._returnT_4undefined(_rename_file_to_this)) {
                    _rename_file_to_this = _assetMedia.name;
                }
                let _dir2use = './user_media_uploads/' + (_sub_folder2use ? _sub_folder2use + '/' : '');
                _file_path2upload = _dir2use + _rename_file_to_this;
                const desiredMode = {
                    mode: 0744
                };
                let _dir = fs.ensureDirSync(_dir2use, desiredMode);
                Utility_fns._show_logs_output('3769', _file_path2upload, _dir);
                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                _assetMedia.mv(_file_path2upload).catch(function(ex) {
                    Utility_fns._show_logs_output('246', ex);
                });

                //send response
                _resultData = {
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        path: _file_path2upload.replace('./user_media_uploads/', '/'),
                        name: _assetMedia.name,
                        mimetype: _assetMedia.mimetype,
                        size: _assetMedia.size
                    }
                };
            }
        } catch (ex) {
            Utility_fns._show_logs_output('262', ex);
        }
        return _resultData;
    }
    //#endregion function to upload media on server and return publically accesible path
    //#region verify users otp
RecordModel.verifyUsersOtp = function(_emailAddress, _otp, _callback) {
    try {
        let _myCacheData = _get_cache_data_from_key(_emailAddress);
        if (Utility_fns._returnT_4undefined(_myCacheData)) {
            return _callback("OTP expired or not exists.", null);
        }
        if (!Utility_fns._returnT_4undefined(_myCacheData)) {
            if (_myCacheData.otp != _otp) {
                return _callback("Entered wrong OTP.", null);
            } else {
                Utility_fns._show_logs_output('291', _myCacheData);
                return _callback(null, _myCacheData);
            }
        }
    } catch (ex) {
        Utility_fns._show_logs_output("775 :: err " + ex.stack);
        return _callback(err, null);
    }
};
//#endregion verify users otp
//#region send otp to user for registration
RecordModel.sendUsersOtp = function(_emailAddress, _role, _callback) {
    try {
        RecordModel.userGetByUserName(_emailAddress, function(error, result) {
            if (error) {
                return _callback("Something went wrong, Please try again later.", null);
            } else {
                if (!Utility_fns._returnT_4undefined(result)) {
                    return _callback("Mobile Number already exists.", null);
                } else {
                    let _otp2send = _.trim(Utility_fns.random(6));
                    let _myCacheData = {
                        otp: _otp2send,
                        userName: _emailAddress,
                        role: _role
                    };
                    let _toEmailIdCommaSeparated = "";
                    let _ccEmailIdCommaSeparated = "";
                    let _bccEmailIdCommaSeparated = "";
                    let _subject = "";
                    let _mailBodyHtml = "";

                    _toEmailIdCommaSeparated = _.trim(_emailAddress);
                    _subject = config.appName + " Account Verification";
                    _mailBodyHtml = `<h2>Dear User, </h2>
                    <h3>Thanks for using ` + config.appName + `, your OTP to reset password is ` + _otp2send + `</h3>`
                    Utility_fns._send_email_using_smtp_details(null, Utility_fns._return_smtp_mailer_message_object(_toEmailIdCommaSeparated, _ccEmailIdCommaSeparated, _bccEmailIdCommaSeparated, _subject, _mailBodyHtml));

                    let _data2send = {
                        mobileNo: _.trim(_emailAddress),
                        otp: _otp2send,
                        emailAddress: _emailAddress
                    };
                    Utility_fns._send_sms_otp_using_details(_data2send, _otp2send);

                    _set_cache_key_with_data(_emailAddress, _myCacheData);

                    Utility_fns._show_logs_output('330', _myCacheData);
                    return _callback(null, { message: "OTP has been sent.", success: 1, data: { "otp": _otp2send } });
                    //return _callback(null, result.recordset);
                }
            }
        });
    } catch (ex) {
        Utility_fns._show_logs_output("826 :: err " + ex.stack);
        return _callback(err, null);
    }
};
//#endregion send otp to user for registration
//#region send users data from contactus page
RecordModel.sendUsersDataToContactUs = function(_details, _callback) {
    try {
        if (Utility_fns._returnT_4undefined(_details)) {
            return _callback("No details found", null);
        } else {
            let _toEmailIdCommaSeparated = "";
            let _ccEmailIdCommaSeparated = "";
            let _bccEmailIdCommaSeparated = "";
            let _subject = "";
            let _mailBodyHtml = "";

            _toEmailIdCommaSeparated = _.trim(config.contactUsEmailId);
            _subject = "Request By " + (_details.emailAddress);

            _mailBodyHtml = _mailBodyHtml + `<h2>Dear Admin, </h2>`
            _mailBodyHtml = _mailBodyHtml + `<h3> New Request has been submited from contact us form</h3>`;
            _mailBodyHtml = _mailBodyHtml + `<p><b> Details </b></p>`;
            _mailBodyHtml = _mailBodyHtml + `<p> Name: ` + _details.userName + `</p>`;
            _mailBodyHtml = _mailBodyHtml + `<p> Phone No: ` + _details.phoneNo + `</p>`;
            _mailBodyHtml = _mailBodyHtml + `<p> Email ID: ` + _details.emailAddress + `</p>`;
            _mailBodyHtml = _mailBodyHtml + `<p> Subject: ` + _details.subject + `</p>`;
            _mailBodyHtml = _mailBodyHtml + `<p> Message: ` + _details.message + `</p>`;
            Utility_fns._send_email_using_smtp_details(null, Utility_fns._return_smtp_mailer_message_object(_toEmailIdCommaSeparated, _ccEmailIdCommaSeparated, _bccEmailIdCommaSeparated, _subject, _mailBodyHtml));
            return _callback(null, { message: "Email has been sent.", success: true, data: {} });
        }
    } catch (ex) {
        Utility_fns._show_logs_output("429 :: err " + ex.stack);
        return _callback(err, null);
    }
};
//#endregion send users data from contactus page

//#region send otp to user for reset password
RecordModel.resetPasswordSendUsersOtp = function(_emailAddress, _callback) {
    try {
        RecordModel.userGetByUserName(_emailAddress, function(error, result) {
            if (error) {
                return _callback("Something went wrong, Please try again later.", null);
            } else {
                if (Utility_fns._returnT_4undefined(result)) {
                    return _callback("Email ID not exists.", null);
                } else {
                    //Utility_fns._show_logs_output('394 :: ',result);
                    let _otp2send = _.trim(Utility_fns.random(6));
                    let _myCacheData = {
                        otp: _otp2send,
                        userName: _emailAddress,
                        role: result.role
                    };
                    let _toEmailIdCommaSeparated = "";
                    let _ccEmailIdCommaSeparated = "";
                    let _bccEmailIdCommaSeparated = "";
                    let _subject = "";
                    let _mailBodyHtml = "";

                    _toEmailIdCommaSeparated = _.trim(_emailAddress);
                    _subject = "[" + config.appName + "] Reset Password";
                    _mailBodyHtml = `<h2>Dear User, </h2>
                   <h3>Thanks for using ` + config.appName + `, your OTP to reset password is ` + _otp2send + `</h3>`
                    Utility_fns._send_email_using_smtp_details(null, Utility_fns._return_smtp_mailer_message_object(_toEmailIdCommaSeparated, _ccEmailIdCommaSeparated, _bccEmailIdCommaSeparated, _subject, _mailBodyHtml));
                    let _data2send = {
                        mobileNo: _.trim(_emailAddress),
                        otp: _otp2send,
                        emailAddress: _emailAddress
                    };
                    Utility_fns._send_sms_otp_using_details(_data2send, _otp2send);
                    _set_cache_key_with_data(_emailAddress, _myCacheData);
                    Utility_fns._show_logs_output('372', _myCacheData);
                    return _callback(null, { message: "OTP has been sent.", success: 1, data: { "otp": _otp2send } });
                    //return _callback(null, result.recordset);
                }
            }
        });
    } catch (ex) {
        Utility_fns._show_logs_output("826 :: err " + ex.stack);
        return _callback(err, null);
    }
};
//#endregion send otp to user for reset password
//#region update existing users password
RecordModel.userResetPasswordById = function(_documentId, _password, _callback) {
    UserModel.findById(_documentId, function(error, user) {
        if (!user) {
            _callback(error, null);
        } else {
            user.password = Bcrypt.hashSync(_password, 10);
            user.updatedOn = _.now();
            //Utility_fns._show_logs_output('393', user, _documentId, _password);
            user.save().then(result => {
                //Utility_fns._show_logs_output('394', result);
                _callback(null, { success: true, message: "success", data: result });
            }).catch(error => {
                Utility_fns._show_logs_output('397', error)
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing users password
//#region update existing users isVerified status
RecordModel.userVerifydById = function(_documentId, _isVerified, _callback) {
    UserModel.findById(_documentId, function(error, user) {
        if (!user) {
            _callback(error, null);
        } else {
            user.isVerified = !!_isVerified;
            user.updatedOn = _.now();
            //Utility_fns._show_logs_output('468', user, _documentId, _isVerified);
            user.save().then(result => {
                //Utility_fns._show_logs_output('470', result);
                _callback(null, result);
            }).catch(error => {
                Utility_fns._show_logs_output('473', error)
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing users isVerified status

RecordModel.userOnlineStatusSaveWithoutAnyValidation = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting

    let userOnline = new UserOnline(data);
    userOnline.updateOne(data, { upsert: true }, function(error, result) {
        if (error) {
            return _callback({ message: "error", data: null }, null);
        } else {
            return _callback(null, { message: "success", data: result });
        }
    });
};

RecordModel.userOnlineStatusDeletedBySocketId = function(socketId, _callback) {
    UserOnline.findOneAndDelete({ socketId: new RegExp('^' + socketId + '$', "i") }, function(error, result) {
        if (!result) {
            return _callback(error, null);
        } else {
            return _callback(null, result);
        }
    });
};
//#region search user all
RecordModel.userOnlineStatusGetAll = function(online, _callback) {
    UserOnline.find(function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all user

//#region search user all
RecordModel.userGetAllById = function(userOnlineStatusObjArr, _callback) {
    let _idColl = _.map(userOnlineStatusObjArr, '_id');

    UserModel.find({ _id: { $in: _idColl } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all user

//#region search user all
RecordModel.userGetAllByType = function(role, _callback) {

    UserModel.find({ role: role }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};

RecordModel.userGetAllBySearch = function(_obj2Save, useAndTrueOrFalse, _callback) {
    Object.keys(_obj2Save).forEach((key) => (Utility_fns._returnT_4undefined(_obj2Save[key])) && delete _obj2Save[key]);
    let _data2search = null;
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _data2search = _obj2Save;
    } else {
        let _search_data = [];
        for (let _index in _obj2Save) {
            let _obj = {};
            _obj[_index] = { $regex: _obj2Save[_index] };
            _search_data.push(_obj);
        }
        if (useAndTrueOrFalse) {
            _data2search = { $and: _search_data };
        } else {
            _data2search = { $or: _search_data };
        }
    }

    //Utility_fns._show_logs_output('535', JSON.stringify(_data2search));
    UserModel.find(_data2search, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all user
//#region add new session
RecordModel.addNewSesion = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let session = new SessionModel(_data);
    //Utility_fns._show_logs_output('525', session);
    session.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('529', error);
        _callback(error, null);
    });
};
//#endregion add new session
//#region update existing session by id
RecordModel.sessionUpdateDataById = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let fieldsToUpdate = ['sessionSubject',
        'sessionDescription',
        'sessionStartDateTime',
        'sessionEndDateTime',
        'services',
        'location',
        'status',
        'additionalDocuments',
        'sessionPrice',
        'maxParticipants',
        'bannerUrl'
    ];

    let documentId = data._id;

    SessionModel.findById(documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            let _updatedObject = _.pick(data, fieldsToUpdate);
            for (let _index in _updatedObject) {
                session[_index] = _updatedObject[_index];
            }
            //Utility_fns._show_logs_output('560',_.pick(data, fieldsToUpdate));
            //Utility_fns._show_logs_output('561',session);
            session.updatedOn = _.now();
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing session by id
//#region update existing session by id add transactionId data
RecordModel.sessionUpdateDataByIdAddTransactionDetails = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let documentId = data.sessionId;

    SessionModel.findById(documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            let _updatedOn = _.now();
            if (data.status) {
                session.status = data.status;
            }
            if (!session.transactionIdCollection) {
                session.transactionIdCollection = {};
            }
            session.transactionIdCollection[data.transactionId] = {
                sessionApplyId: data.sessionApplyId,
                transactionId: data.transactionId,
                updatedOn: _updatedOn
            };
            session.updatedOn = _updatedOn;
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing session by id add transactionId data
//#region update existing session by id and update status only
RecordModel.sessionUpdateDataByIdUpdateStatusOnly = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let documentId = data.sessionId;

    SessionModel.findById(documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            let _updatedOn = _.now();
            if (data.status) {
                session.status = data.status;
            }
            session.updatedOn = _updatedOn;
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing session by id and update status only
//#region update existing session by adding session execution data
RecordModel.sessionUpdateDataByIdAddExecutionDetails = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let documentId = data.sessionId;

    SessionModel.findById(documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            if (!session.sessionsExecutionCollection) {
                session.sessionsExecutionCollection = {};
            }
            let _updatedOn = _.now();

            session.sessionsExecutionCollection[_updatedOn] = {
                sessionId: data.sessionId,
                sessionApplyId: data.sessionApplyId,
                sessionStartDateTime: data.sessionStartDateTime,
                sessionEndDateTime: data.sessionEndDateTime,
                duration: data.duration,
                updatedOn: _updatedOn
            };
            session.updatedOn = _updatedOn;
            session.save().then(result => {
                RecordModel.sessionApplyUpdateDataByIdAddExecutionDetails(data, _callback);
                //_callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
RecordModel.sessionApplyUpdateDataByIdAddExecutionDetails = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let documentId = data.sessionApplyId;

    SessionApplyModel.findById(documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            if (!session.sessionsExecutionCollection) {
                session.sessionsExecutionCollection = {};
            }
            let _updatedOn = _.now();

            session.sessionsExecutionCollection[_updatedOn] = {
                sessionId: data.sessionId,
                sessionApplyId: data.sessionApplyId,
                sessionStartDateTime: data.sessionStartDateTime,
                sessionEndDateTime: data.sessionEndDateTime,
                duration: data.duration,
                updatedOn: _updatedOn
            };
            session.updatedOn = _updatedOn;
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing session by adding session execution data
//#region search all sessions
RecordModel.sessionGetAll = function(_callback) {
    SessionModel.find({ isDeleted: { $ne: true }, sessionType: { $ne: "restricted" } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all sessions
//#region search all sessions of  today's date 
RecordModel.sessionGetAllOfTodayOnlyAccepted = function(_user_id, _callback) {
    let _current_date_state_epoch = parseInt(Date.parse(moment(_.now()).add(0, 'd').format('DD-MMM-YYYY')));
    let _next_date_state_epoch = parseInt(Date.parse(moment(_.now()).add(1, 'd').format('DD-MMM-YYYY')));
    Utility_fns._show_logs_output('current', new Date(_current_date_state_epoch), 'tommorow', new Date(_next_date_state_epoch));
    let _filterQuery = {
        $and: [{
                $and: [{
                        sessionStartDateTime: {
                            $exists: true,
                            $not: {
                                $eq: null
                            },
                            $gte: _current_date_state_epoch,
                        }
                    },
                    {
                        sessionEndDateTime: {
                            $exists: true,
                            $not: {
                                $eq: null
                            },
                            $lte: _next_date_state_epoch,
                        }
                    }
                ]
            },
            {
                $and: [{
                    isDeleted: { $ne: true }
                }, {
                    status: { $eq: "accepted" }
                }, {
                    createdBy: { $eq: _user_id }
                }]
            }
        ]
    };
    Utility_fns._show_logs_output("722", JSON.stringify(_filterQuery));
    SessionModel.aggregate([{
        "$match": _filterQuery
    }, {
        "$sort": { "updatedOn": -1 }
    }, {
        "$skip": 0
    }, {
        "$limit": _maxSearchLimit
    }, {
        "$lookup": {
            "from": "session_apply",
            "localField": "_id",
            "foreignField": "sessionId",
            "as": "sessionAppliedByConsultants"
        }
    }], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all sessions of  today's date
//#region search all sessions with sessionApply from supplied consultantId
RecordModel.sessionGetAllBySessionApplyByConsultantId = function(_consultantId, _callback) {
    SessionModel.aggregate([{
        $lookup: {
            from: 'session_apply',
            localField: '_id',
            foreignField: 'sessionId',
            as: 'sessionAppliedByConsultants'
        }
    }, {
        "$sort": { "updatedOn": -1 }
    }, {
        "$skip": 0
    }, {
        "$limit": _maxSearchLimit
    }], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all sessions with sessionApply from supplied consultantId
//#region session get by id
RecordModel.sessionGetByDocumentId = function(sessionId, _callback) {
    if (!sessionId) {
        _callback('Sesion Id Required', null);
        return;
    }
    SessionModel.findById(sessionId, function(error, result) {
        if (!result) {
            _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion session get by id
//#region search all sessions by services
RecordModel.sessionGetAllBySearch = function(_obj2Save, useAndTrueOrFalse, _callback) {
    Object.keys(_obj2Save).forEach((key) => (Utility_fns._returnT_4undefined(_obj2Save[key])) && delete _obj2Save[key]);
    let _data2search = null;
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _obj2Save = {};
    }
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _data2search = _obj2Save;
    } else {
        let _search_data = [];
        for (let _index in _obj2Save) {
            if (_obj2Save[_index]) {
                let _obj = {};
                if (_.isObject(_obj2Save[_index]) || _.isArray(_obj2Save[_index])) {
                    _obj[_index] = _obj2Save[_index];
                } else {
                    _obj[_index] = { $regex: _obj2Save[_index] };
                }
                _search_data.push(_obj);
            }
        }
        if (useAndTrueOrFalse) {
            _data2search = { $and: _search_data };
        } else {
            _data2search = { $or: _search_data };
        }
    }
    let _qs_data2search = {};
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _qs_data2search = { $and: [{ "sessionType": { "$ne": "restricted" } }] };
    } else {
        _qs_data2search = { $and: [_data2search, { "sessionType": { "$ne": "restricted" } }] };
    }
    Utility_fns._show_logs_output('738', JSON.stringify(_qs_data2search));
    SessionModel.aggregate([{
        "$match": _qs_data2search
    }, {
        "$sort": { "updatedOn": -1 }
    }, {
        "$skip": 0
    }, {
        "$limit": _maxSearchLimit
    }, {
        "$lookup": {
            "from": "session_apply",
            "localField": "_id",
            "foreignField": "sessionId",
            "as": "sessionAppliedByConsultants"
        }
    }], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all sessions by services
//#region get length of all sessions by services
RecordModel.sessionGetLengthBySearch = function(_obj2Save, useAndTrueOrFalse, _callback) {
    let _data2search = null;
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _obj2Save = {};
    }

    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _data2search = _obj2Save || {};
    } else {
        Object.keys(_obj2Save).forEach((key) => (Utility_fns._returnT_4undefined(_obj2Save[key])) && delete _obj2Save[key]);
        let _search_data = [];
        for (let _index in _obj2Save) {
            let _obj = {};
            if (_.isObject(_obj2Save[_index]) || _.isArray(_obj2Save[_index])) {
                _obj[_index] = _obj2Save[_index];
            } else {
                _obj[_index] = { $regex: _obj2Save[_index] };
            }
            _search_data.push(_obj);
        }
        if (useAndTrueOrFalse) {
            _data2search = { $and: _search_data };
        } else {
            _data2search = { $or: _search_data };
        }
    }
    let _qs_data2search = {};
    if (Utility_fns._returnT_4undefined(_obj2Save)) {
        _qs_data2search = { $and: [{ "sessionType": { "$ne": "restricted" } }] };
    } else {
        _qs_data2search = { $and: [_data2search, { "sessionType": { "$ne": "restricted" } }] };
    }
    Utility_fns._show_logs_output('792', JSON.stringify(_qs_data2search));
    SessionModel.countDocuments(_qs_data2search, function(error, result) {
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion get length of all sessions by services
//#region sessionApply
//#region Add New Apply New Session
RecordModel.addNewSesionApply = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let sessionApply = new SessionApplyModel(_data);
    //Utility_fns._show_logs_output('525', session);
    sessionApply.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('529', error);
        _callback(error, null);
    });
};
//#endregion Add New Apply New Session
//#region Update Existing Apply Session
RecordModel.updateSesionApplyByConsultant = function(_data, _updatedBy, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id;
    SessionApplyModel.findById(_documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('992',data);

            let _updatedOn = _.now();
            session.sessionNotesToEndUser = _data.sessionNotesToEndUser;
            session.fixedPriceProposal = _data.fixedPriceProposal;
            session.status = _data.status;
            session.sessionStartDateTime = _data.sessionStartDateTime;
            session.sessionEndDateTime = _data.sessionEndDateTime;
            session.mileStoneProposal = _data.mileStoneProposal;

            session.updatedOn = _updatedOn;
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
RecordModel.updateSesionApplyByEndUser = function(_data, _updatedBy, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id;
    SessionApplyModel.findById(_documentId, function(error, session) {
        if (!session) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('992',data);
            if (session.sessionsOldDataCollection) {
                session.sessionsOldDataCollection = {};
            }
            let _updatedOn = _.now();
            session.sessionsOldDataCollection[_updatedOn] = _.pick(session, ['sessionNotesToEndUser', 'fixedPriceProposal', 'status', 'sessionStartDateTime', 'sessionEndDateTime', 'mileStoneProposal']);

            session.fixedPriceProposal = _data.fixedPriceProposal;
            session.status = _data.status;
            session.sessionStartDateTime = _data.sessionStartDateTime;
            session.sessionEndDateTime = _data.sessionEndDateTime;
            session.mileStoneProposal = _data.mileStoneProposal;

            session.updatedOn = _updatedOn;
            session.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion Update Existing Apply Session
//#region search all applied sessions using session id
RecordModel.sessionApplyGetAllBySessionId = function(_sessionId, _callback) {
    SessionApplyModel.find({ sessionId: _sessionId, isDeleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all applied sessions using session id
//#region send all session search by applied by consultantId
RecordModel.sessionApplyGetAllByConsultantId = function(_consultantId, _sessionId, _sessionApplyId, _callback) {
    let _filterQuery = {}
    if (_consultantId) {
        _filterQuery["consultantId"] = _consultantId
    }
    if (_sessionApplyId) {
        _filterQuery["_id"] = _sessionApplyId;
    }
    if (_sessionId) {
        _filterQuery["sessionId"] = _sessionId;
    }
    console.log('1121', _filterQuery);
    SessionApplyModel.aggregate([{
            "$match": _filterQuery
        }, {
            "$sort": { "updatedOn": -1 }
        }, {
            "$skip": 0
        }, {
            "$limit": _maxSearchLimit
        },
        {
            $lookup: {
                from: 'sessions',
                localField: 'sessionId',
                foreignField: '_id',
                as: 'sessionForConsultant'
            }
        },
    ], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            //#region modify result with aap use
            let _updated_result = [];
            if (_.keys(result).length > 0) {
                for (let _index in result) {
                    let _sessionObj = null;
                    let _sessionAppliedByConsultants = [];

                    let _obj2process = _.cloneDeep(result[_index]);
                    _sessionObj = _.cloneDeep(_.pick(result[_index], 'sessionForConsultant').sessionForConsultant[0]);

                    delete _obj2process.sessionForConsultant;
                    _sessionAppliedByConsultants.push(_obj2process);
                    _sessionObj.sessionAppliedByConsultants = _.cloneDeep(_sessionAppliedByConsultants);
                    _updated_result.push(_sessionObj);
                }
            }

            //#endregion modify result with aap use
            _callback(null, _updated_result);
        }
    });
};
//#endregion send all session search by applied by consultantId
//#region search all sessions of  today's date for _consultantId
RecordModel.sessionGetAllOfTodayOnlyAcceptedByConsultantId = function(_consultantId, _callback) {
    let _current_date_state_epoch = parseInt(Date.parse(moment(_.now()).add(0, 'd').format('DD-MMM-YYYY')));
    let _next_date_state_epoch = parseInt(Date.parse(moment(_.now()).add(1, 'd').format('DD-MMM-YYYY')));
    Utility_fns._show_logs_output('current', new Date(_current_date_state_epoch), 'tommorow', new Date(_next_date_state_epoch));
    let _filterQuery = {
        $and: [{
                $and: [{
                        sessionStartDateTime: {
                            $exists: true,
                            $not: {
                                $eq: null
                            },
                            $gte: _current_date_state_epoch,
                        }
                    },
                    {
                        sessionEndDateTime: {
                            $exists: true,
                            $not: {
                                $eq: null
                            },
                            $lte: _next_date_state_epoch,
                        }
                    }
                ]
            },
            {
                $and: [{
                    "isDeleted": { $ne: true }
                }, {
                    "status": { $eq: "accepted" }
                }]
            }
        ]
    };
    SessionApplyModel.aggregate([{
            "$match": { "consultantId": _consultantId, status: { $eq: "accepted" } }
        }, {
            "$sort": { "updatedOn": -1 }
        }, {
            "$skip": 0
        }, {
            "$limit": _maxSearchLimit
        },
        {
            $lookup: {
                from: 'sessions',
                let: { sessions: '$sessions' },
                pipeline: [{
                    $match: _filterQuery
                }],
                as: 'sessionForConsultant'
            }
        }
    ], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            //#region modify result with aap use
            let _updated_result = {};
            if (_.keys(result).length > 0) {
                for (let _index in result) {
                    let _sessionObj = null;
                    let _sessionAppliedByConsultants = [];

                    let _obj2process = _.cloneDeep(result[_index]);
                    _sessionObj = _.cloneDeep(_.pick(result[_index], 'sessionForConsultant').sessionForConsultant[0]);

                    delete _obj2process.sessionForConsultant;
                    _sessionAppliedByConsultants.push(_obj2process);
                    if (!Utility_fns._returnT_4undefined(_sessionObj) && _sessionObj._id == _obj2process.sessionId) {
                        _sessionObj.sessionAppliedByConsultants = _.cloneDeep(_sessionAppliedByConsultants);
                        _updated_result[_sessionObj._id] = _sessionObj;
                    }
                }
            }

            //#endregion modify result with aap use
            _callback(null, _updated_result);
        }
    });

};
//#endregion search all sessions of  today's date
//#region update status of sessionApply by customer
RecordModel.sessionApplyUpdateStatusByCustomer = function(_sessionId, _sessionApplyId, _status, _updatedBy, _transactionId, _callback) {
    SessionApplyModel.findById(_sessionApplyId, function(error, sessionApply) {
        if (!sessionApply) {
            _callback(error, null);
        } else {
            let data = {
                status: _status,
                transactionId: _transactionId,
                sessionId: _sessionId,
                sessionApplyId: _sessionApplyId
            };
            //sessionApply.status = _status;
            /*
            if (_transactionId) {
                sessionApply.transactionId = _transactionId;
            }
            */
            let _updatedOn = _.now();
            sessionApply.updatedOn = _updatedOn;
            if (data.status) {
                sessionApply.status = data.status;
            }
            if (!sessionApply.updatedBy) {
                sessionApply.updatedBy = [];
            }
            sessionApply.updatedBy.push({ "userId": _updatedBy, "updatedOn": sessionApply.updatedOn });
            if (_transactionId) {
                if (!sessionApply.transactionIdArray) {
                    sessionApply.transactionIdArray = [];
                }
                sessionApply.transactionIdArray.push(data.transactionId);
            }

            sessionApply.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update status of sessionApply by customer
//#endregion sessionApply
//#region ServicesTypes
//#region Add New ServicesTypes
RecordModel.addNewServicesTypes = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    if (!Utility_fns._returnT_4undefined(_data.parentServicesTypesId)) {
        _data.feeFromUserFixedAmount = 0;
        _data.serviceFeeFromUserFixedAmount = 0;
        _data.feeToConsultFixedAmount = 0;
        _data.commisionToProtalFixedAmount = 0;
        _data.serviceFeeFromUserPercentage = 0;
        _data.feeToConsultPercentage = 0;
        _data.commisionToProtalPercentage = 0;
    }
    // If the document id doesn't exist create a unique id for inserting
    let servicesTypes = new ServicesTypesModel(_data);
    //Utility_fns._show_logs_output('846', servicesTypes);
    servicesTypes.save().then(result => {
        //Utility_fns._show_logs_output('848', result);
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('850', error);
        _callback(error, null);
    });
};
//#endregion Add New ServicesTypes
//#region update existing ServicesTypes by id
RecordModel.UpdateDataByIdServicesTypes = function(data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    let fieldsToUpdate = [
        "name",
        "rateType",
        "feeFromUserFixedAmount",
        "serviceFeeFromUserFixedAmount",
        "feeToConsultFixedAmount",
        "commisionToProtalFixedAmount",
        "serviceFeeFromUserPercentage",
        "feeToConsultPercentage",
        "commisionToProtalPercentage",
    ];

    let documentId = data._id;

    ServicesTypesModel.findById(documentId, function(error, servicesTypes) {
        if (!servicesTypes) {
            _callback(error, null);
        } else {
            //Utility_fns._show_logs_output('555',data);
            let _updatedObject = _.pick(data, fieldsToUpdate);
            for (let _index in _updatedObject) {
                servicesTypes[_index] = _updatedObject[_index];
            }
            if (!Utility_fns._returnT_4undefined(servicesTypes.parentServicesTypesId)) {
                servicesTypes.feeFromUserFixedAmount = 0;
                servicesTypes.serviceFeeFromUserFixedAmount = 0;
                servicesTypes.feeToConsultFixedAmount = 0;
                servicesTypes.commisionToProtalFixedAmount = 0;
                servicesTypes.serviceFeeFromUserPercentage = 0;
                servicesTypes.feeToConsultPercentage = 0;
                servicesTypes.commisionToProtalPercentage = 0;
            }
            //Utility_fns._show_logs_output('881',_.pick(data, fieldsToUpdate));
            //Utility_fns._show_logs_output('883',servicesTypes);
            servicesTypes.updatedOn = _.now();
            servicesTypes.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update existing ServicesTypes by id
//#region search all ServicesTypes
RecordModel.getAllServicesTypes = function(_callback) {
    ServicesTypesModel.find({ isDeleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all ServicesTypes
//#region search all ServicesTypes using name
RecordModel.getAllByNameServicesTypesModel = function(_name, _documentId, _parentServicesTypesId, _callback) {
    let _filterQuery = {
        name: _name,
        isDeleted: { $ne: true }
    };
    if (_documentId) {
        _filterQuery['_id'] = { $ne: _documentId }
    }
    if (_parentServicesTypesId) {
        _filterQuery['parentServicesTypesId'] = { $ne: _parentServicesTypesId }
    }
    //Utility_fns._show_logs_output('919', _filterQuery);
    ServicesTypesModel.find(_filterQuery, function(error, result) {
        //Utility_fns._show_logs_output('921', error, result);
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all ServicesTypes using session id
//#region search all ServicesTypes which is parent
RecordModel.getAllParentServicesTypesModel = function(_search4AllT, _callback) {
    var _filterQuery = {
        isDeleted: { $ne: true }
    };

    if (!_search4AllT) {
        _filterQuery['parentServicesTypesId'] = {
            $eq: ""
        }
    }
    Utility_fns._show_logs_output('965', _filterQuery);
    ServicesTypesModel.aggregate([{
            "$match": _filterQuery
        }, {
            "$sort": { "updatedOn": -1 }
        }, {
            "$skip": 0
        }, {
            "$limit": _maxSearchLimit
        },
        {
            $lookup: {
                from: 'servicestypes',
                localField: '_id',
                foreignField: 'parentServicesTypesId',
                as: 'childServicesTypes'
            }
        }
    ], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all ServicesTypes which is parent
//#region search all ServicesTypes
RecordModel.getAllChildServicesTypes = function(_search4AllT, _callback) {
    var _filterQuery = {
        isDeleted: { $ne: true }
    };

    if (!_search4AllT) {
        _filterQuery['parentServicesTypesId'] = {
            $ne: ""
        }
    }
    //Utility_fns._show_logs_output('1000', _filterQuery);
    ServicesTypesModel.aggregate([{
            "$match": _filterQuery
        }, {
            "$sort": { "updatedOn": -1 }
        }, {
            "$skip": 0
        }, {
            "$limit": _maxSearchLimit
        },
        {
            $lookup: {
                from: '_id',
                localField: 'servicestypes',
                foreignField: 'parentServicesTypesId',
                as: 'parentServicesTypes'
            }
        }
    ], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search all ServicesTypes
//#endregion ServicesTypes
//#region chats
//#region Add New Chat
RecordModel.addNewChat = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let chatModel = new ChatModel(_data);
    //Utility_fns._show_logs_output('525', chatModel);
    chatModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('529', error);
        _callback(error, null);
    });
};
//#endregion Add New Chat
//#region search all Chat by roomId
RecordModel.getAllChatByRoomId = function(_roomId, _callback) {
    ChatModel.find({ roomId: _roomId, isDeleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all Chat by roomId
//#endregion chats
//#region Notifications
//#region Add New NotificationModel
RecordModel.addNewNotification = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    _data.expiryStartOn = (_data.expiryStartOn ? _data.expiryStartOn : new Date());
    // If the document id doesn't exist create a unique id for inserting
    let notificationModel = new NotificationModel(_data);
    //Utility_fns._show_logs_output('525', chatModel);
    notificationModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('529', error);
        _callback(error, null);
    });
};
//#endregion Add New NotificationModel
//#endregion Create Index for NotificationModel
RecordModel.addExpiryIndexForNotification = function(_fieldName, _expiryInSeconds, _callback) {
    //Utility_fns._show_logs_output('525', chatModel);
    let _columns = {};
    _columns[_fieldName] = 1;
    _columns.expireAfterSeconds = _expiryInSeconds || 0;

    NotificationModel.cre(_columns, function(error, result) {
        Utility_fns._show_logs_output(error, result)
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    })
};
//#endregion Create Index for NotificationModel
//#region search all Notification by roomId
RecordModel.getAllNotificationByRoomId = function(_roomId, notifyRoomExceptUserIds, _callback) {
    let _filterQuery = { roomId: _roomId, isDeleted: { $ne: true }, notifyRoomExceptUserIds: { $not: { $in: notifyRoomExceptUserIds } } };
    if (!notifyRoomExceptUserIds || _.keys(notifyRoomExceptUserIds).length == 0) {
        delete _filterQuery.notifyRoomExceptUserIds;
    }
    console.log("1553", JSON.stringify(_filterQuery, 4));
    NotificationModel.find(_filterQuery, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search all Notification by roomId
//#region update notification as read by user
RecordModel.updateNotificationByUserId = function(documentId, userId, _callback) {
    NotificationModel.findById(documentId, function(error, notification) {
        if (!notification) {
            _callback(error, null);
        } else {
            if (!notification.notifyRoomExceptUserIds) {
                notification.notifyRoomExceptUserIds = [];
            }
            notification.notifyRoomExceptUserIds.push(userId);
            if (notification.roomId == userId) {
                notification.isDeleted = true;
                notification.deletedBy = userId;
                notification.deletedOn = _.now();
            } else {
                notification.updatedOn = true;
                notification.updatedBy = userId;
            }
            notification.save().then(result => {
                _callback(null, result);
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion update notification as read by user
//#endregion Notification
//#region add fund 
RecordModel.fund_addnew = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let funds = new FundsModel(_data);
    funds.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion add fund
//#region get all funds of supplied user
RecordModel.fund_getall = function(_user_id, _callback) {
    FundsModel.find({ created_by: new RegExp('^' + _user_id + '$', "i"), is_deleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion get all funds of supplied user
//#region get count only of supplied user
RecordModel.fund_get_total_4_requested_user = function(_user_id, _callback) {
    let _filterQuery = [
        { $match: { $and: [{ created_by: new RegExp('^' + _user_id + '$', "i"), is_deleted: { $ne: true } }] } },
        { $group: { _id: _user_id, totalFund4currentUser: { $sum: "$amount" }, count: { $sum: 1 } } }
    ];
    Utility_fns._show_logs_output("1360", JSON.stringify(_filterQuery));
    FundsModel.aggregate(_filterQuery, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        Utility_fns._show_logs_output('1365', result);
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion get count only of supplied user
//#region get total spent on sessions for user
RecordModel.sessions_get_spent_total_4_requested_user = function(_user_id, _callback) {
    let _filterQuery = [
        { $match: { $and: [{ created_by: new RegExp('^' + _user_id + '$', "i"), is_deleted: { $ne: true }, transactionActionType: { $not: { $in: ["funds_add"] } } }] } },
        { $group: { _id: _user_id, totalSpentOnSessions4currentUser: { $sum: "$amount" }, count: { $sum: 1 } } }
    ];
    Utility_fns._show_logs_output("1380", JSON.stringify(_filterQuery));
    TransactionDetailsModel.aggregate(_filterQuery, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        Utility_fns._show_logs_output('1385', result);
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion get total spent on sessions for user
//#region delete fund by id
RecordModel.fund_delete_by_id = function(documentId, _deleted_by, _callback) {
    FundsModel.findById(documentId, function(error, funds) {
        if (!funds) {
            _callback(error, null);
        } else {
            funds.is_deleted = true;
            funds.deleted_by = _deleted_by;
            funds.updatedOn = _.now();
            funds.save().then(result => {
                    _callback(null, { message: "success", data: result });
                })
                .catch(error => {
                    _callback(error, null);
                });
        }
    });
};
//#endregion delete fund by id


//#region add diversification 
RecordModel.diversification_addnew = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let diversification = new DiversificationModel(_data);
    diversification.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion add diversification
//#region get all diversification of supplied user
RecordModel.diversification_getall = function(_user_id, _callback) {
    DiversificationModel.find({ created_by: new RegExp('^' + _user_id + '$', "i"), is_deleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion get all diversification of supplied user
//#region delete Diversification by id
RecordModel.diversification_delete_by_id = function(documentId, _deleted_by, _callback) {
    DiversificationModel.findById(documentId, function(error, diversification) {
        if (!diversification) {
            _callback(error, null);
        } else {
            diversification.is_deleted = true;
            diversification.deleted_by = _deleted_by;
            diversification.updatedOn = _.now();
            diversification.save().then(result => {
                _callback(null, { message: "success", data: result });
            }).catch(error => {
                _callback(error, null);
            });
        }
    });
};
//#endregion delete Diversification by id
//#region contacts
//#region add contacts
RecordModel.addNewContact = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let contactModel = new ContactModel(_data);
    contactModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion add contacts
//#region get all my contacts
RecordModel.getAllMyContact = function(_user_id, _callback) {
    ContactModel.find({ created_by: new RegExp('^' + _user_id + '$', "i"), is_deleted: { $ne: true } }, function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).sessionApply(_maxTimeOutInMs);
};
//#endregion get all my contacts
//#region search contact by id
RecordModel.getByIdContact = function(contactId, _callback) {
    ContactModel.findById(contactId, function(error, result) {
        if (!result) {
            _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion search contact by id
//#region search contact admin users
RecordModel.getByAdminUserContact = function(_adminUsersArray, _callback) {
    ContactModel.find({ "usersColl.admin": { $all: _adminUsersArray }, isGroup: false }, function(error, result) {
        if (!result) {
            _callback(error, null);
        } else {
            _callback(null, result);
        }
    }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search contact admin users
//#region search contact by any user in any role
RecordModel.getByUserInAnyRoleContact = function(_userId, _callback) {

    ContactModel.find({ $or: [{ "usersColl.admin": _userId }, { "usersColl.member": _userId }, { "usersColl.guest": _userId }] },
        function(error, result) {
            if (!result) {
                _callback(error, null);
            } else {
                _callback(null, result);
            }
        }).skip(0).limit(_maxSearchLimit).maxTimeMS(_maxTimeOutInMs);
};
//#endregion search contact by any user in any role
//#endregion contacts
//#region transactions
//#region add transaction
RecordModel.addNewTransaction = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let transactionModel = new TransactionModel(_data);
    transactionModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion add transaction
//#region add transaction details
RecordModel.addNewTransactionDetails = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    _data.amount = (_data.amount ? _data.amount : _.get(_data, 'transactionDetailsObj.purchase_units.0.amount.value'));
    // If the document id doesn't exist create a unique id for inserting
    let transactionDetailsModel = new TransactionDetailsModel(_data);
    transactionDetailsModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        _callback(error, null);
    });
};
//#endregion add transaction details
//#region get all transaction details
RecordModel.getAllTransactionDetails = function(_data, _callback) {

    TransactionDetailsModel.aggregate([{
        $lookup: {
            from: 'user',
            localField: 'createdBy',
            foreignField: '_id',
            as: 'transactionInitiatedByUser'
        }
    }, {
        "$sort": { "updatedOn": -1 }
    }, {
        "$skip": 0
    }, {
        "$limit": _maxSearchLimit
    }], function(error, result) {
        if (Utility_fns._returnT_4undefined(result)) {
            result = [];
        }
        if (error) {
            return _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion get all transaction details
//#endregion transactions
//#region Rating Review
//#region Add New Rating Review
RecordModel.addNewRatingReview = function(_data, _callback) {
    // If the document id doesn't exist create a unique id for inserting
    var _documentId = _data._id ? _data._id : UUID.v4();
    _data._id = _documentId;
    _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
    _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
    // If the document id doesn't exist create a unique id for inserting
    let ratingModel = new RatingModel(_data);
    //Utility_fns._show_logs_output('525', session);
    ratingModel.save().then(result => {
        _callback(null, { success: true, message: "success", data: result });
    }).catch(error => {
        //Utility_fns._show_logs_output('529', error);
        _callback(error, null);
    });
};
//#endregion Add New Rating Review
//#region Search By ID Rating Review
RecordModel.getByDocumentIdRatingReview = function(ratingId, _callback) {
    RatingModel.findById(ratingId, function(error, result) {
        if (!result) {
            _callback(error, null);
        } else {
            _callback(null, user);
        }
    });
};
//#endregion Search By ID Rating Review
//#region Search By additional details Rating Review
RecordModel.getByUserIdSessionIdCreatedByRatingReview = function(_createdBy, _userId, _sessionId, _callback) {
    let _filterQuery = {
        $and: [{
            $and: [{
                createdBy: {
                    $exists: true,
                    $not: {
                        $eq: null
                    },
                    $eq: _createdBy,
                }
            }]
        }]
    };

    if (_userId) {
        _filterQuery.$and[0].$and.push({
            userId: {
                $exists: true,
                $not: {
                    $eq: null
                },
                $eq: _userId,
            }
        });
    } else {
        _filterQuery.$and[0].$and.push({
            userId: {
                $exists: true,
                $in: ["", null],
            }
        });
    }
    if (_sessionId) {
        _filterQuery.$and[0].$and.push({
            sessionId: {
                $exists: true,
                $not: {
                    $eq: null
                },
                $eq: _sessionId,
            }
        });
    } else {
        _filterQuery.$and[0].$and.push({
            sessionId: {
                $exists: true,
                $in: ["", null],
            }
        });
    }
    RatingModel.find(_filterQuery, function(error, result) {
        if (!result) {
            _callback(error, null);
        } else {
            _callback(null, result);
        }
    });
};
//#endregion Search By additional details Rating Review
//#endregion Rating Review
//#region handle case of deduct fund amount and add to transaction details
RecordModel.fundDeductAmountAndAddToTransaction = function(_fundsObj, _transactionDetails, _callback) {
    let _userId = _fundsObj.created_by;
    RecordModel.fund_get_total_4_requested_user(_userId, function(error, result) {
        if (!result) {
            _callback({ success: false, message: "Facing issue with wallet data", data: null }, null);
        } else {
            if (result && _.keys(result).length > 0) {
                let totalFund4currentUser = _.get(result, '0.totalFund4currentUser') || 0;;
                if (_fundsObj.amount <= totalFund4currentUser) {
                    _fundsObj.amount = _fundsObj.amount * -1;
                    RecordModel.fund_addnew(_fundsObj, function(error, result) {
                        Utility_fns._show_logs_output('1687 :: _funds_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_fundsObj)); // JSON.stringify(result) +
                        if (error) {
                            _callback({ success: false, message: "Facing issue with wallet data", data: null }, null);
                        }
                        if (Utility_fns._returnT_4undefined(result)) {
                            _callback({ success: false, message: "Facing issue with wallet data", data: null }, null);
                        } else {
                            if (result.success) {
                                _transactionDetails.transactionId = result.data._id;
                                _transactionDetails.transactionObj = result.data;
                                RecordModel.addNewTransactionDetails(_transactionDetails, function(error, _data) {
                                    Utility_fns._show_logs_output('88', error, _data);
                                });
                                _callback(null, { success: true, message: "Success", data: result });
                            } else {
                                _callback({ success: false, message: "Facing issue with wallet data", data: null }, null);
                            }
                        }
                    });

                } else {
                    _callback({ success: false, message: "Not sufficient amount in wallet", data: null }, null);
                }
            } else {
                _callback({ success: false, message: "Facing issue with wallet data", data: null }, null);
            }
        }
    });

};
//#endregion handle case of deduct fund amount and add to transaction details
module.exports = RecordModel;