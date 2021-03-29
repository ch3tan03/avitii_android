const Utility_fns = require("../models/utilityfns");
const _ = require("lodash");
const config = require("./../config");
var appRouter = function(app, JsonWebToken, RecordModel, appAVModule, PaymentServiceModel) {

    app.post("/api/post/user/delete/byid", function(req, res) {
        if (!req.body.document_id) {
            return res.status(400).send({ "status": "error", "message": "A document id is required" });
        }
        RecordModel.userDeletedById(req.body.document_id, function(error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.post("/api/post/user/save", function(req, res) {
        if (!req.body.firstname) {
            return res.status(400).send({ "status": "error", "message": "A firstname is required" });
        } else if (!req.body.lastname) {
            return res.status(400).send({ "status": "error", "message": "A lastname is required" });
        } else if (!req.body.email) {
            return res.status(400).send({ "status": "error", "message": "A email is required" });
        }
        RecordModel.userSaveWithoutAnyValidation(req.body, function(error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.post("/api/post/user/getbyid", function(req, res) {
        if (!req.body.userId) {
            return res.status(400).send({ "status": "error", "message": "A userId is required" });
        }
        RecordModel.userGetByDocumentId(req.body.userId, function(error, result) {
            if (error) {
                return res.status(400).send({ success: false, "status": "error", "message": error || "A userId is required" });
            }
            res.send({ success: true, data: result, "message": "success" });
        });
    });

    //#region register new user 
    app.post("/api/post/user/register", (request, response) => {
        let newUser = request.body;
        //#region check whether requested userName is available or not for registration
        RecordModel.userGetByUserName(newUser.userName, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length > 0) {
                return response.send({ message: "UserName already taken.", success: false, data: {} });
            } else {
                RecordModel.userRegisterNewUser(newUser, function(error, result) {
                    if (error) {
                        return response.send({ message: "error 400", success: false, data: {} });
                    }
                    return response.send(result);
                });
            }
        });
        //#endregion check whether requested userName is available or not for registration
    });
    //#endregion register new user 
    //#region Authenticate user in login 
    app.post("/api/post/user/login", (request, response) => {
        let newUser = request.body;
        //#region check whether requested userName is available or not for registration
        RecordModel.userGetByUserName_and_Password(newUser.userName, newUser.password, newUser.role, function(error, result) {
            if (error) {
                return response.status(400).send({ message: "error", success: false, data: {} });
                //return response.send({message: "error 400",success:false, data: {}});
            }
            if (result.success) {
                var token = JsonWebToken.sign(result.data._id, app.get("jwt-secret"), {});
                return response.send({
                    _id: result.data._id,
                    userName: result.data.userName,
                    role: result.data.role,
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                    token: token
                });
            }
        });
        //#endregion check whether requested userName is available or not for registration
    });
    //#endregion Authenticate user in login
    //#region register new user 
    app.post("/api/post/user/getall", (request, response) => {
        let newUser = request.body;
        //#region check whether requested userName is available or not for registration
        RecordModel.userGetAll(newUser.role, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send({ message: "No users to show.", success: false, data: {} });
            } else {
                return response.send({ message: "No users to show.", success: false, data: result });
            }
        });
        //#endregion check whether requested userName is available or not for registration
    });
    app.get("/api/get/user/getall", (request, response) => {
        let newUser = request.query;
        //#region check whether requested userName is available or not for registration
        RecordModel.userGetAll(newUser.role, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send(result);
            } else {
                return response.send(result);
            }
        });
        //#endregion check whether requested userName is available or not for registration
    });
    //#endregion register new user
    app.get("/session", function(req, res) {
        Utility_fns._show_logs_output('Session ' + JSON.stringify(req.headers));
        res.send({});
    });
    //#region Authenticate user in login 
    app.post("/api/post/user/admin/login", (request, response) => {
        let newUser = request.body;
        //#region authenticate with userName and password
        //Utility_fns._show_logs_output('219', newUser);
        RecordModel.userGetByAdminUserName_and_Password(newUser.userName, newUser.password, newUser.role, function(error, result) {
            if (error) {
                return response.status(400).send({ message: "error", success: false, data: {} });
                //return response.send({message: "error 400",success:false, data: {}});
            }
            if (result.success) {
                //Utility_fns._show_logs_output('226', result);
                var token = JsonWebToken.sign((result.data.documentId || result.data._id), app.get("jwt-secret"), {});
                return response.send({
                    _id: (result.data.documentId || result.data._id),
                    userName: result.data.userName,
                    role: result.data.role,
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                    token: token
                });
            }
        });
        //#endregion authenticate with userName and password
    });
    //#endregion Authenticate user in login
    //#region register new admin user 
    app.post("/api/post/user/admin/register", (request, response) => {
        let newUser = request.body;
        //#region check whether requested admin userName is available or not for registration
        //Utility_fns._show_logs_output('244', newUser);
        RecordModel.userGetByAdminUserName(newUser.userName, newUser.role, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: "error 400", success: false, data: {} });
                }
                if (result.length > 0) {
                    return response.send({ message: "UserName already taken.", success: false, data: {} });
                } else {
                    RecordModel.userRegisterNewAdminUser(newUser, function(error, result) {
                        if (error) {
                            return response.send({ message: "error 400", success: false, data: {} });
                        }
                        return response.send(result);
                    });
                }
            } catch (ex) {
                Utility_fns._show_logs_output('178 :: ex ', ex.stack);
                return response.send({ message: "error 400", success: false, data: {} });
            }
        });
        //#endregion check whether requested admin userName is available or not for registration
    });
    //#endregion register new admin user
    //#region upload file on server
    app.post('/api/post/upload/assetdata', async(req, res) => {
        try {
            let _resultData = null;
            let _uploadedFiles = req.files;
            _resultData = RecordModel._upload_provided_file_data_on_server_and_return_public_path(_.values(_uploadedFiles)[0], req.body);
            res.send(_resultData);
        } catch (err) {
            Utility_fns._show_logs_output('190 :: ex ', err);
            res.status(500).send(err);
        }
    });
    //#endregion upload file on server
    //#region verify user with otp
    app.post("/api/post/users/verifyotp", (request, response) => {
        let usersObj = (!Utility_fns._returnT_4undefined(request.body) ? request.body : request.query);
        //#region verify user with otp
        RecordModel.verifyUsersOtp(usersObj.userName, usersObj.otp, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: error, success: 0, data: {} });
                } else {
                    //#region check whether requested userName is available or not for registration
                    RecordModel.userGetByUserName(usersObj.userName, function(error, result) {
                        if (error) {
                            return response.send({ message: "error 400", success: false, data: {} });
                        }
                        if (result.length > 0) {
                            return response.send({ message: "UserName already taken.", success: false, data: {} });
                        } else {
                            RecordModel.userRegisterNewUser(usersObj, function(error, result) {
                                if (error) {
                                    return response.send({ message: "error 400", success: false, data: {} });
                                }
                                return response.send(result);
                            });
                        }
                    });
                    //#endregion check whether requested userName is available or not for registration
                }
            } catch (ex) {
                Utility_fns._show_logs_output("433 :: ex :: " + ex.stack);
                return response.send({ message: "error 400", success: 0, data: {} });
            }
        });
        //#endregion verify user with otp
    });
    //#endregion verify user with otp
    //#region send otp
    app.post("/api/post/users/sendotp", (request, response) => {
        let usersObj = (!Utility_fns._returnT_4undefined(request.body) ? request.body : request.query);
        //#region send otp
        RecordModel.sendUsersOtp(usersObj.userName, usersObj.role, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: error, success: 0, data: {} });
                } else {
                    return response.send(result);
                }
            } catch (ex) {
                Utility_fns._show_logs_output("433 :: ex :: " + ex.stack);
                return response.send({ message: "error 400", success: 0, data: {} });
            }
        });
        //#endregion send otp
    });
    //#endregion send otp

    //#region send otp for reset password
    app.post("/api/post/users/resetpassword/sendotp", (request, response) => {
        let usersObj = (!Utility_fns._returnT_4undefined(request.body) ? request.body : request.query);
        //#region send otp for reset password
        RecordModel.resetPasswordSendUsersOtp(usersObj.userName, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: error, success: 0, data: {} });
                } else {
                    return response.send(result);
                }
            } catch (ex) {
                Utility_fns._show_logs_output("433 :: ex :: " + ex.stack);
                return response.send({ message: "error 400", success: 0, data: {} });
            }
        });
        //#endregion send otp for reset password
    });
    //#endregion send otp for reset password

    //#region verify user with otp and reset password
    app.post("/api/post/users/resetpassword/verifyotp", (request, response) => {
        let usersObj = (!Utility_fns._returnT_4undefined(request.body) ? request.body : request.query);
        //#region verify user with otp and reset password
        RecordModel.verifyUsersOtp(usersObj.userName, usersObj.otp, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: error, success: 0, data: {} });
                } else {
                    //Utility_fns._show_logs_output(282, usersObj);
                    //#region check whether requested userName is available or not for registration
                    RecordModel.userGetByUserName(usersObj.userName, function(error, result) {
                        if (error) {
                            return response.send({ message: "error 400", success: false, data: {} });
                        }
                        if (!Utility_fns._returnT_4undefined(result)) {
                            if (!result._id) {
                                let _temp_result = _.first(result);
                                result = _.cloneDeep(_temp_result);
                            }
                            RecordModel.userResetPasswordById(result._id, usersObj.password, function(error, result) {
                                if (error) {
                                    return response.send({ message: "error 400", success: false, data: {} });
                                }
                                return response.send(result);
                            });
                        } else {
                            return response.send({ message: "Request user not found.", success: false, data: {} });
                        }
                    });
                    //#endregion check whether requested userName is available or not for registration
                }
            } catch (ex) {
                Utility_fns._show_logs_output("433 :: ex :: " + ex.stack);
                return response.send({ message: "error 400", success: 0, data: {} });
            }
        });
        //#endregion verify user with otp and reset password
    });
    //#endregion verify user with otp and reset password

    //#region update existing user by id 
    app.post("/api/post/user/update/byid", (request, response) => {
        let newUser = request.body;
        //#region check whether user exists or not
        RecordModel.userGetByDocumentId(newUser._id, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length <= 0) {
                return response.send({ message: "Requested user not exists.", success: false, data: {} });
            } else {
                RecordModel.userUpdateDataById(newUser, function(error, result) {
                    if (error) {
                        return response.send({ message: "error 400", success: false, data: {} });
                    }
                    return response.send({ message: "success", success: true, data: result });
                });
            }
        });
        //#endregion check whether user exists or not
    });
    //#endregion update existing user by id

    //#region Sessions
    //#region update existing session by id 
    app.post("/api/post/session/update/byid", (request, response) => {
        let _obj2Save = request.body;
        //#region check whether session exists or not
        RecordModel.sessionGetByDocumentId(_obj2Save._id, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length <= 0) {
                return response.send({ message: "Requested Session not exists.", success: false, data: {} });
            } else {
                RecordModel.sessionUpdateDataById(_obj2Save, function(error, result) {
                    if (error) {
                        return response.send({ message: "error 400", success: false, data: {} });
                    }
                    return response.send({ message: "success", success: true, data: result });
                });
            }
        });
        //#endregion check whether session exists or not
    });
    //#endregion update existing session by id
    //#region get existing session by id  
    app.post("/api/post/session/getbyid", function(req, res) {
        if (!req.body.sessionId) {
            return res.status(200).send({ "status": "error", "message": "sessionId is required" });
        }
        RecordModel.sessionGetByDocumentId(req.body.sessionId, function(error, result) {
            if (error) {
                return res.status(200).send({ success: false, "status": "error", "message": error || "sessionId is required" });
            }
            res.send({ success: true, data: result, "message": "success" });
        });
    });
    //#endregion get existing session by id  
    //#region save new session 
    app.post("/api/post/session/addnew", (request, response) => {
        let _obj2Save = request.body;
        //#region add new session
        RecordModel.addNewSesion(_obj2Save, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            return response.send({ message: "success", success: true, data: result });
        });
        //#endregion add new session
    });
    //#endregion save new session
    //#region get all sessions
    app.post("/api/post/session/getall", (request, response) => {
        let _obj2Save = request.body;
        //#region get all sessions
        RecordModel.sessionGetAll(function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send({ message: "No session to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all sessions
    });
    //#endregion get all sessions
    //#region get all sessions
    app.post("/api/post/session/getall/withappliedsessions", (request, response) => {
        let _obj2Save = request.body;
        //#region get all sessions
        RecordModel.sessionGetAllBySessionApplyByConsultantId(_obj2Save.consultantId, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send({ message: "No session to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all sessions
    });
    //#endregion get all sessions
    //#region get all sessions by services
    app.post("/api/post/session/getall/bysearch", (request, response) => {
        let _obj2Save = request.body.data2search;
        let useAndTrueOrFalse = request.body.useAndTrueOrFalse || false;
        //#region get all sessions by services
        RecordModel.sessionGetAllBySearch(_obj2Save, useAndTrueOrFalse, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send({ message: "No session to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all sessions by services
    });
    //#endregion get all sessions by services
    //#region get length of sessions by services
    app.post("/api/post/session/getlength/bysearch", (request, response) => {
        let _obj2Save = request.body.data2search;
        let useAndTrueOrFalse = request.body.useAndTrueOrFalse || false;
        //#region get length of sessions by services
        RecordModel.sessionGetLengthBySearch(_obj2Save, useAndTrueOrFalse, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: 0 });
            }
            if (result.length == 0) {
                return response.send({ message: "No session to show.", success: false, data: 0 });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get length of sessions by services
    });
    //#endregion get length of sessions by services
    //#endregion Sessions
    //#region get all sessions search by applied by consultantId
    app.post("/api/post/session/getall/byconsultantid", (request, response) => {
        let _obj2Save = request.body;
        //#region get all sessions search by applied by consultantId
        RecordModel.sessionApplyGetAllByConsultantId(_obj2Save.consultantId, _obj2Save.sessionApplyId, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return response.send({ message: "No session to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all sessions search by applied by consultantId
    });
    //#endregion get all sessions search by applied by consultantId

    //#region register new servicetype
    app.post("/api/post/servicetypes/addnew", (request, response) => {
        let newObj = request.body;
        //#region check whether servicetype already added or not
        //Utility_fns._show_logs_output('476', newObj);
        RecordModel.getAllByNameServicesTypesmodel(newObj.name, newObj._id, newObj.parentServicesTypesId, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: "error 400", success: false, data: {} });
                }
                if (result.length > 0) {
                    return response.send({ message: "ServiceType already exists.", success: false, data: {} });
                } else {
                    RecordModel.addNewServicesTypes(newObj, function(error, result) {
                        if (error) {
                            return response.send({ message: "error 400", success: false, data: {} });
                        }
                        return response.send(result);
                    });
                }
            } catch (ex) {
                Utility_fns._show_logs_output('178 :: ex ', ex.stack);
                return response.send({ message: "error 400", success: false, data: {} });
            }
        });
        //#endregion check whether servicetype already added or not
    });
    //#endregion register new servicetype

    //#region get all servicetype
    app.post("/api/post/servicetypes/getall", (request, response) => {
        let _obj2Use = request.body;
        //#region get all servicetype
        RecordModel.getAllServicesTypes(function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return;
                // response.send({ message: "No ServiceType to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all servicetype
    });
    //#endregion get all servicetype

    //#region get all ServicesTypes which is parent
    app.post("/api/post/servicetypes/getall/parents", (request, response) => {
        let _obj2Use = request.body;
        let _search4AllT = false;
        //#region get all ServicesTypes which is parent
        RecordModel.getAllParentServicesTypesModel(_search4AllT, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return;
                //response.send({ message: "No ServiceType to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all ServicesTypes which is parent
    });
    //#endregion get all ServicesTypes which is parent

    //#region get all ServicesTypes which is child
    app.post("/api/post/servicetypes/getall/child", (request, response) => {
        let _obj2Use = request.body;
        let _search4AllT = false;
        //#region get all ServicesTypes which is child
        RecordModel.getAllChildServicesTypes(_search4AllT, function(error, result) {
            if (error) {
                return response.send({ message: "error 400", success: false, data: {} });
            }
            if (result.length == 0) {
                return;
                //response.send({ message: "No ServiceType to show.", success: false, data: {} });
            } else {
                return response.send({ message: "Success.", success: true, data: result });
            }
        });
        //#endregion get all ServicesTypes which is child
    });
    //#endregion get all ServicesTypes which is child

    app.post('/meeting', (req, res) => {
        /*
                const timestamp = new Date().getTime() - 30000
                const msg = Buffer.from(config.zoom_master.API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
                const hash = crypto.createHmac('sha256', config.zoom_master.API_SECRET).update(msg).digest('base64')
                const signature = Buffer.from(`${config.zoom_master.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')
          -*/
        const signature = appAVModule.generateSignature(config.zoom_master.API_KEY, config.zoom_master.API_SECRET, req.body.meetingNumber, req.body.role);
        res.json({
            signature: signature
        })
    });

    app.get('/*', function(req, res) {
        res.send('Restricted...');
    });

    //#region send email to app admins for contacct us
    app.post("/api/post/app/contactus", (request, response) => {
        let usersObj = (!Utility_fns._returnT_4undefined(request.body) ? request.body : request.query);
        //#region send email to app admins for contacct us
        RecordModel.sendUsersDataToContactUs(usersObj, function(error, result) {
            try {
                if (error) {
                    return response.send({ message: error, success: 0, data: {} });
                } else {
                    return response.send(result);
                }
            } catch (ex) {
                Utility_fns._show_logs_output("582 :: ex :: " + ex.stack);
                return response.send({ message: "error 400", success: 0, data: {} });
            }
        });
        //#endregion send email to app admins for contacct us
    });
    //#endregion send email to app admins for contacct us
    app.post("/api/post/payment/pay", function(req, res, next) {
        try {
            const paymentBody = req.body;
            PaymentServiceModel.makePayment(paymentBody, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    });

    app.post("/api/post/payment/success", function(req, res, next) {
        try {
            const paymentSuccessBody = req.body;

            ecordModel.addNewTransactionDetails(paymentSuccessBody, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    // Redirect to payment success page

                }
            });
            PaymentServiceModel.paymentSuccess(paymentSuccessBody, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    // Redirect to payment success page
                    const redirectUrl = "http://localhost:4200/payment/success";
                    res.redirect(redirectUrl);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    });
    app.post("/api/post/payment/failure", function(req, res, next) {
        try {
            const paymentFailureBody = req.body;
            PaymentServiceModel.paymentFailure(paymentFailureBody, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    // Redirect to payment failure page
                    const redirectUrl = "http://localhost:4200/payment/failure";
                    res.redirect(redirectUrl);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    });
    app.post('/api/post/payment/generatehash', function(req, res) {
        var strdat = '';

        req.on('data', function(chunk) {
            strdat += chunk;
            console.log('29', chunk, strdat);
        });

        req.on('end', function() {
            var data = JSON.parse(strdat);
            var cryp = crypto.createHash('sha512');

            var text = config.PAYUMONEY_MERCHANT_KEY + '|' + data.txnid + '|' + data.amount + '|' + data.productinfo + '|' + data.fname + '|' + data.email + '|' + data.mobileNo + '||||' + data.udf5 + '||||||' + config.PAYUMONEY_MERCHANT_SALT;
            console.log('36', text);
            cryp.update(text);
            var hash = cryp.digest('hex');
            res.setHeader("Content-Type", "text/json");
            //res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(JSON.stringify(hash));
        });


    });
};

module.exports = appRouter;