const _ = require("lodash");
const Utility_fns = require("./utilityfns");
let online = 0;
var appEvents = function(io, RecordModel, AVcModel, PaymentServiceModel) {
    //#region Server side socket events
    io.use(function(socket, next) {
        //Utility_fns._show_logs_output("8 :: Socket Query: ", socket.handshake.query);
        // return the result of next() to accept the connection.
        if (socket.handshake.query.user_id) {
            //#region authenticate user and store session of current user in DB for future use
            Utility_fns._show_logs_output("12 :: Socket Query: AUTHENTICATION IS PENDING :: ", socket.handshake.query);
            //////PENDING HERE
            //#endregion authenticate user and store session of current user in DB for future use
            return next();
        }
        // call next() with an Error if you need to reject the connection.
        next(new Error('Authentication error'));
    });

    io.sockets.on('disconnect', socket => {
        Utility_fns._show_logs_output('21 :: DISCONNESSO!!! ', socket);
        online--;
        io.sockets.emit('count', {
            number: online
        });
    });

    io.on('connection', socket => {
        const appAVModule = require("./chatevents")(io, socket, RecordModel, PaymentServiceModel);
        const appEvents = require("./avcevents")(io, socket, AVcModel);
        online = online + 1;
        let previousId;
        socket.emit('connected_successfully', socket.id);
        //io.to(`${socket.id}`).emit('connected_successfully', socket.id);
        io.to(`${socket.id}`).emit('send_user_online_list', [{ id: socket.id }]);
        const safeJoin = currentId => {
            socket.leave(previousId);
            socket.join(currentId, () => Utility_fns._show_logs_output(`33 :: Socket ${socket.id} joined room ${currentId}`));
            Utility_fns._show_logs_output('35 :: IO :: old :: ' + previousId + ' :: currentId :: ' + currentId);
            previousId = currentId;
        }

        socket.on('disconnect', function(id, data, data2, data3) {
            socket.emit('disconnected');
            online = online - 1;
            //Utility_fns._show_logs_output(`42 :: Socket disconnected ${socket.id} :: online :: ${online} :: ${socket.handshake.query.user_id}`);
            RecordModel.userOnlineStatusDeletedBySocketId(socket.id, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('45 :: userOnlineStatusDeletedBySocketId :: error :: ' + _.now() + ' :: ' + socket.id + ' :: ' + ' :: ' + JSON.stringify(error)); //+ JSON.stringify(result)
                }
                //Utility_fns._show_logs_output('47 :: userOnlineStatusDeletedBySocketId :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(result));
                _broadcast_event_of_current_online_users_status_all();
            });
        });

        socket.on('end', function() {
            socket.disconnect(0);
        });

        socket.on('get_user_online_list', function(_sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse) {
            //Utility_fns._show_logs_output('57 :: get_user_online_list :: ' + _.now() + ' :: ' + socket.id);
            _broadcast_event_of_current_online_users_status_all((_sendDataOnlyMeFalseToAllTrue ? null : (_sendDataOnlyMeFalseToAllTrue ? null : socket.id)), _obj2Use4Filter, useAndTrueOrFalse);
        });

        socket.on('get_user_by_role_list', function(_sendDataOnlyMeFalseToAllTrue, _obj2Use4Filter, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('62 :: get_user_by_role_list :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Use4Filter));
            _broadcast_event_of_role_wise_users_all((_sendDataOnlyMeFalseToAllTrue ? null : socket.id), _obj2Use4Filter, useAndTrueOrFalse);
        });

        socket.on('sessions_request_getlength_bysearch', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('67 :: sessions_request_getlength_bysearch :: ' + _.now() + ' :: ' + socket.id + ' :: ' + _sendDataOnlyMeFalseToAllTrue + ' :: ' + _obj2Save + ' :: ' + useAndTrueOrFalse);
            _broadcast_event_of_session_count_to_all((_sendDataOnlyMeFalseToAllTrue ? null : socket.id), _obj2Save, useAndTrueOrFalse);
        });

        socket.on('sessions_request_getall_bysearch', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse, emitThisEvent) {
            Utility_fns._show_logs_output('75 :: sessions_request_getall_bysearch :: ' + _.now() + ' :: ' + socket.id + ' :: ' + _obj2Save + ' :: ' + useAndTrueOrFalse + ' :: ' + emitThisEvent);
            _broadcast_event_of_session_all_to_all_or_sender((_sendDataOnlyMeFalseToAllTrue ? null : socket.id), _obj2Save, useAndTrueOrFalse, emitThisEvent);
        });

        socket.on('set_session_apply_by_consultant', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('80 :: set_session_apply_by_consultant :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + useAndTrueOrFalse);
            RecordModel.addNewSesionApply(_obj2Save, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('75 :: set_session_apply_by_consultant :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                RecordModel.sessionGetByDocumentId(_obj2Save.sessionId, function(error, data2send) {
                    if (error) {
                        return;
                    }
                    if (data2send && data2send._id) {
                        let tempObj = {
                            data: data2send
                        }
                        data2send = tempObj;
                    }
                    //console.log("95", result, data2send);
                    let roomId = result.data.consultantId; //'my_app_main_room_for_student';
                    let additionalData = {
                        sessionId: _obj2Save.sessionId,
                        sessionApplyId: result.data._id,
                        action: 'added_new',
                        category: 'session_apply'
                    };
                    let message = "New Course Request";
                    let description = data2send.data.sessionSubject;
                    let notifyRoomExceptUserIds = [];
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                    roomId = data2send.data.createdBy;
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                });

                io.to(`${socket.id}`).emit('get_session_apply_by_consultant', { success: true, message: "success", data: result });
                //_broadcast_event_of_current_online_users_status_all();


            });
        });
        socket.on('update_session_apply_by_enduser', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedBy, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('89 :: update_session_apply_by_enduser :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + useAndTrueOrFalse);
            RecordModel.updateSesionApplyByEndUser(_obj2Save, _updatedBy, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('75 :: update_session_apply_by_enduser :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                RecordModel.sessionGetByDocumentId(_obj2Save.sessionId, function(error, data2send) {
                    if (error) {
                        return;
                    }
                    if (data2send && data2send._id) {
                        let tempObj = {
                            data: data2send
                        }
                        data2send = tempObj;
                    }
                    let roomId = result.consultantId; //'my_app_main_room_for_student';
                    let additionalData = {
                        sessionId: _obj2Save.sessionId,
                        sessionApplyId: result.data._id,
                        action: 'updated',
                        category: 'session_apply'
                    };
                    let message = "Updated Session Applied";
                    let description = data2send.data.sessionSubject;
                    let notifyRoomExceptUserIds = [];
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                    roomId = data2send.data.createdBy;
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                });
                io.to(`${socket.id}`).emit('get_session_apply_by_consultant', { success: true, message: "success", data: result });

                //_broadcast_event_of_current_online_users_status_all();
            });
        });

        socket.on('update_session_apply_by_consultant', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save, _updatedBy, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('100 :: update_session_apply_by_consultant :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + useAndTrueOrFalse);
            RecordModel.updateSesionApplyByConsultant(_obj2Save, _updatedBy, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('75 :: update_session_apply_by_consultant :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                RecordModel.sessionGetByDocumentId(_obj2Save.sessionId, function(error, data2send) {
                    if (error) {
                        return;
                    }
                    if (data2send && data2send._id) {
                        let tempObj = {
                            data: data2send
                        }
                        data2send = tempObj;
                    }
                    let roomId = result.consultantId; //'my_app_main_room_for_student';
                    let additionalData = {
                        sessionId: _obj2Save.sessionId,
                        sessionApplyId: result.data._id,
                        action: 'updated',
                        category: 'session_apply'
                    };
                    let message = "Updated Session Applied";
                    let description = data2send.data.sessionSubject;
                    let notifyRoomExceptUserIds = [];
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                    roomId = _obj2Save.createdBy;
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                });
                io.to(`${socket.id}`).emit('get_session_apply_by_consultant', { success: true, message: "success", data: result });
                //_broadcast_event_of_current_online_users_status_all();
            });
        });

        socket.on('get_session_apply_by_session_id', function(_sendDataOnlyMeFalseToAllTrue, _sessionId, useAndTrueOrFalse) {
            Utility_fns._show_logs_output('82 :: get_session_apply_by_session_id :: ' + _.now() + ' :: ' + socket.id + ' :: ' + _obj2Save + ' :: ' + useAndTrueOrFalse);
            _broadcast_event_of_session_apply_by_session_id_to_all((_sendDataOnlyMeFalseToAllTrue ? null : socket.id), _sessionId, useAndTrueOrFalse);
        });

        socket.on('set_session_apply_status_updated_by_customer', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save) {
            Utility_fns._show_logs_output('91 :: set_session_apply_status_updated_by_customer :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ');
            RecordModel.sessionApplyUpdateStatusByCustomer(_obj2Save.sessionId, _obj2Save.sessionApplyId, _obj2Save.status, _obj2Save.updatedBy, _obj2Save.transactionId, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('94 :: set_session_apply_status_updated_by_customer :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                RecordModel.sessionGetByDocumentId(_obj2Save.sessionId, function(error, data2send) {
                    if (error) {
                        return;
                    }
                    //console.log("203", data2send, result);
                    if (data2send && data2send._id) {
                        let tempObj = {
                            data: data2send
                        }
                        data2send = tempObj;
                    }
                    let roomId = result.consultantId; //'my_app_main_room_for_student';
                    let additionalData = {
                        sessionId: _obj2Save.sessionId,
                        sessionApplyId: result._id,
                        action: 'updated',
                        category: 'session_apply'
                    };
                    let message = "Updated Session Applied";
                    let description = data2send.data.sessionSubject;
                    let notifyRoomExceptUserIds = [];
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                    roomId = _obj2Save.updatedBy;
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                });
                //_broadcast_event_of_current_online_users_status_all();
            });
        });

        socket.on('set_session_status_updated_by_customer', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save) {
            Utility_fns._show_logs_output('126 :: set_session_status_updated_by_customer :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ');
            RecordModel.sessionUpdateDataByIdUpdateStatusOnly(_obj2Save, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('94 :: set_session_status_updated_by_customer :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                RecordModel.sessionGetByDocumentId(_obj2Save.sessionId, function(error, data2send) {
                    if (error) {
                        return;
                    }
                    if (data2send && data2send._id) {
                        let tempObj = {
                            data: data2send
                        }
                        data2send = tempObj;
                    }
                    let roomId = result.consultantId; //'my_app_main_room_for_student';
                    let additionalData = {
                        sessionId: _obj2Save.sessionId,
                        sessionApplyId: result._id,
                        action: 'updated',
                        category: 'session_apply'
                    };
                    let message = "Updated Session Applied";
                    let description = data2send.data.sessionSubject;
                    let notifyRoomExceptUserIds = [];
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                    roomId = _obj2Save.createdBy;
                    _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                });
                //_broadcast_event_of_current_online_users_status_all();
            });
        });

        socket.on('set_session_add_transactions_updated_by_customer', function(_sendDataOnlyMeFalseToAllTrue, _obj2Save) {
            Utility_fns._show_logs_output('102 :: set_session_add_transactions_updated_by_customer :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ');
            RecordModel.sessionUpdateDataByIdAddTransactionDetails(_obj2Save, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('105 :: set_session_add_transactions_updated_by_customer :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(_obj2Save) + ' :: ' + JSON.stringify(error));
                }
                //_broadcast_event_of_current_online_users_status_all();
            });
        });
        Utility_fns._show_logs_output(`61 :: Socket connected ${socket.id} :: online :: ${online} :: ${socket.handshake.query.user_id}`);

        if (!Utility_fns._returnT_4undefined(socket.handshake.query.user_id)) {
            let userOnlineObj = {
                _id: socket.handshake.query.user_id,
                online: true,
                socketId: socket.id,
                createdOn: _.now()
            };
            RecordModel.userOnlineStatusSaveWithoutAnyValidation(userOnlineObj, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('281 :: UserOnlineStatus :: error :: ' + _.now() + ' :: ' + userOnlineObj._id + ' :: ' + JSON.stringify(userOnlineObj) + ' :: ' + JSON.stringify(error));
                }
                //Utility_fns._show_logs_output('166 :: UserOnlineStatus :: ' + _.now() + ' :: ' + userOnlineObj._id + ' :: ' + JSON.stringify(result));
                _broadcast_event_of_current_online_users_status_all();
            });
        }

        //#region event for get all user
        socket.on('user_getall', _userType => {
            Utility_fns._show_logs_output('81 :: user_getall :: ' + _.now() + ' :: ' + _userType + ' :: ');
            RecordModel.userGetAll(_userType, function(error, result) {
                //Utility_fns._show_logs_output('83 :: user_getall_list :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ');
                if (error) {
                    socket.emit('user_getall_list', result);
                    //response.send({message: "error 400",success:false, data: {}});
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('user_getall_list', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('user_getall_list', result);
                        //response.send({message: "No users to show.",success:false, data: {}});
                    } else {
                        socket.emit('user_getall_list', result);
                        //response.send({message: "No users to show.",success:false, data: result});
                    }
                }
            });
        });
        socket.on('request_user_getall', _userType => {
            Utility_fns._show_logs_output('81 :: request_user_getall :: ' + _.now() + ' :: ' + _userType + ' :: ');
            RecordModel.userGetAll(_userType, function(error, result) {
                //Utility_fns._show_logs_output('155 :: request_user_getall :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ');
                if (error) {
                    socket.emit('response_user_getall', { success: false, message: "no record founds", data: result });
                    //response.send({message: "error 400",success:false, data: {}});
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_user_getall', { success: false, message: "no record founds", data: result });
                } else {
                    if (result.length == 0) {
                        socket.emit('response_user_getall', { success: false, message: "failue", data: result });
                        //response.send({message: "No users to show.",success:false, data: {}});
                    } else {
                        socket.emit('response_user_getall', { success: true, message: "success", data: result });
                        //response.send({message: "No users to show.",success:false, data: result});
                    }
                }
            });
        });
        socket.on('request_user_update_verification', (_userId, _isVerified) => {
            Utility_fns._show_logs_output('174 :: request_user_update_verification :: ' + _.now() + ' :: ' + _userId + ' :: ' + _isVerified + ' :: ');
            RecordModel.userVerifydById(_userId, _isVerified, function(error, result) {
                //Utility_fns._show_logs_output('155 :: request_user_getall :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ');
                if (error) {
                    socket.emit('response_user_update_verification', { success: false, message: "no record founds", data: result });
                    //response.send({message: "error 400",success:false, data: {}});
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_user_update_verification', { success: false, message: "no record founds", data: result });
                } else {
                    if (result.length == 0) {
                        socket.emit('response_user_update_verification', { success: false, message: "failue", data: result });
                        //response.send({message: "No users to show.",success:false, data: {}});
                    } else {
                        io.to(`${_userId}`).emit('response_recd_self_user_profile_updates', { message: "success", success: true, data: result });
                        socket.emit('response_user_update_verification', { success: true, message: "success", data: result });
                        //response.send({message: "No users to show.",success:false, data: result});
                    }
                }
            });
        });
        socket.on('request_user_add_new', (usersObj) => {
            if (!usersObj || !usersObj.userName) {
                return socket.emit('response_user_add_new', { message: "UserName is missing", success: false, data: {} });
            }
            Utility_fns._show_logs_output('359 :: request_user_add_new :: ' + _.now() + ' :: ');
            //#region check whether requested userName is available or not for registration
            RecordModel.userGetByUserName(usersObj.userName, function(error, result) {
                if (error) {
                    return socket.emit('response_user_add_new', { message: "error 400", success: false, data: {} });
                }
                if (result.length > 0) {
                    return socket.emit('response_user_add_new', { message: "UserName already taken.", success: false, data: {} });
                } else {
                    RecordModel.userRegisterNewUser(usersObj, function(error, result) {
                        if (error) {
                            return socket.emit('response_user_add_new', { message: "error 400", success: false, data: {} });
                        }
                        return socket.emit('response_user_add_new', result);
                    });
                }
            });
            //#endregion check whether requested userName is available or not for registration
        });

        //#endregion event for get all user
        //#region event for delete specific user
        socket.on('user_delete_by_id', _delete_obj => {
            var _id = _delete_obj._id;
            var _deletedBy = _delete_obj.user_id;
            Utility_fns._show_logs_output('106 :: user_delete_by_id :: ' + _.now() + ' :: ' + _id + ' :: ');
            RecordModel.userDeletedById(_id, _deletedBy, function(error, result) {
                Utility_fns._show_logs_output('107 :: user_delete_by_id :: ' + _.now() + ' :: ' + ' :: '); // + JSON.stringify(result)
                if (error) {
                    socket.emit('user_delete_by_id', result);
                    //response.send({message: "error 400",success:false, data: {}});
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('user_delete_by_id', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('user_delete_by_id', result);
                        //response.send({message: "No users to show.",success:false, data: {}});
                    } else {
                        socket.emit('user_delete_by_id', result);
                        //response.send({message: "No users to show.",success:false, data: result});
                    }
                }
            });
        });
        //#endregion event for delete specific user

        //#region event for add new fund by user
        socket.on('fund_addnew', _funds_obj => {
            Utility_fns._show_logs_output('171 :: fund_addnew :: ' + _.now() + ' :: ' + JSON.stringify(_funds_obj) + ' :: ');
            RecordModel.fund_addnew(_funds_obj, function(error, result) {
                Utility_fns._show_logs_output('173 :: _funds_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_funds_obj)); // JSON.stringify(result) +
                if (error) {
                    socket.emit('fund_added', _funds_obj.created_by);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('fund_added', _funds_obj.created_by);
                } else {
                    if (result.length == 0) {
                        socket.emit('fund_added', _funds_obj.created_by);
                    } else {
                        socket.emit('fund_added', _funds_obj.created_by);
                    }
                }
            });
        });
        //#endregion event for add new fund by user
        //#region paying from wallet
        socket.on('request_deduct_amount_from_wallet', (_fundsObj, _transactionDetails) => {
            Utility_fns._show_logs_output('171 :: response_deduct_amount_from_wallet :: ' + _.now() + ' :: ' + JSON.stringify(_fundsObj) + ' :: ');
            RecordModel.fundDeductAmountAndAddToTransaction(_fundsObj, _transactionDetails, function(error, result) {
                Utility_fns._show_logs_output('246 :: _funds_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_fundsObj)); // JSON.stringify(result) +
                if (error) {
                    socket.emit('response_deduct_amount_from_wallet', _fundsObj.created_by);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_deduct_amount_from_wallet', _fundsObj.created_by);
                } else {
                    if (result.length == 0) {
                        socket.emit('response_deduct_amount_from_wallet', _fundsObj.created_by);
                    } else {
                        socket.emit('response_deduct_amount_from_wallet', _fundsObj.created_by);
                    }
                }
            });
        });
        //#endregion paying from wallet
        //#region update session execution data
        socket.on('request_session_session_apply_update_for_execution_time', (sessionObj) => {
            Utility_fns._show_logs_output('264 :: request_session_session_apply_update_for_execution_time :: ' + _.now() + ' :: ' + JSON.stringify(sessionObj) + ' :: ');
            RecordModel.sessionUpdateDataByIdAddExecutionDetails(sessionObj, function(error, result) {
                Utility_fns._show_logs_output('266 :: sessionObj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(sessionObj)); // JSON.stringify(result) +
                if (error) {
                    socket.emit('response_session_session_apply_update_for_execution_time', { success: false, message: "failure", data: result });
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_session_session_apply_update_for_execution_time', { success: false, message: "failure", data: result });
                } else {
                    socket.emit('response_session_session_apply_update_for_execution_time', { success: true, message: "success", data: result });
                }
            });
        });
        //#endregion update session execution data
        //#region event for funds get all data
        socket.on('fund_getall', _user_id => {
            Utility_fns._show_logs_output('190 :: fund_getall :: ' + _.now() + ' :: ' + _user_id + ' :: ');
            RecordModel.fund_getall(_user_id, function(error, result) {
                Utility_fns._show_logs_output('192 :: fund_getall_list :: ' + _.now() + ' :: ' + ' :: '); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('fund_getall_list', result);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('fund_getall_list', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('fund_getall_list', result);
                    } else {
                        socket.emit('fund_getall_list', result);
                    }
                }
            });
        });
        //#endregion event for funds get all data
        //#region event for funds get Summary count for user
        socket.on('request_fund_get_count_sum', _user_id => {
            Utility_fns._show_logs_output('264 :: request_fund_get_count_sum :: ' + _.now() + ' :: ' + _user_id + ' :: ');
            RecordModel.fund_get_total_4_requested_user(_user_id, function(error, result) {
                Utility_fns._show_logs_output('266 :: request_fund_get_count_sum :: ' + _.now() + ' :: ' + ' :: '); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('response_fund_get_count_sum', { message: "No data found", success: false, data: {} });
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_fund_get_count_sum', { message: "No data found", success: false, data: {} });
                } else {
                    socket.emit('response_fund_get_count_sum', { message: "success", success: true, data: result });
                }
            });
        });
        //#endregion event for funds get Summary count for user
        //#region event for total spent on sessions by user
        socket.on('request_session_spent_get_count_sum', _user_id => {
            Utility_fns._show_logs_output('280 :: request_session_spent_get_count_sum :: ' + _.now() + ' :: ' + _user_id + ' :: ');
            RecordModel.sessions_get_spent_total_4_requested_user(_user_id, function(error, result) {
                Utility_fns._show_logs_output('282 :: request_session_spent_get_count_sum :: ' + _.now() + ' :: ' + ' :: '); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('response_session_spent_get_count_sum', { message: "No data found", success: false, data: {} });
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('response_session_spent_get_count_sum', { message: "No data found", success: false, data: {} });
                } else {
                    socket.emit('response_session_spent_get_count_sum', { message: "success", success: true, data: result });
                }
            });
        });
        //#endregion event for total spent on sessions by user
        //#region event for funds get all data
        socket.on('fund_delete_by_id', _delete_obj => {
            var _id = _delete_obj._id;
            var _deleted_by = _delete_obj.user_id;
            Utility_fns._show_logs_output('209 :: fund_delete_by_id :: ' + _.now() + ' :: ' + _id + ' :: deleted by :: ' + _deleted_by);
            RecordModel.fund_delete_by_id(_id, _deleted_by, function(error, result) {
                Utility_fns._show_logs_output('211 :: fund_getall_list :: ' + _.now() + ' :: ' + ' :: '); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('fund_getall_list', result);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('fund_getall_list', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('fund_getall_list', result);
                    } else {
                        socket.emit('fund_getall_list', result);
                    }
                }
            });
        });
        //#endregion event for funds get all data


        //#region event for add new diversification by user
        socket.on('diversification_addnew', _diversification_obj => {
            Utility_fns._show_logs_output('168 :: fund_addnew :: ' + _.now() + ' :: ' + JSON.stringify(_diversification_obj) + ' :: ');
            RecordModel.diversification_addnew(_diversification_obj, function(error, result) {
                Utility_fns._show_logs_output('236 :: _diversification_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_diversification_obj)); //+ JSON.stringify(result) 
                if (error) {
                    socket.emit('diversification_added', _diversification_obj.created_by);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('diversification_added', _diversification_obj.created_by);
                } else {
                    if (result.length == 0) {
                        socket.emit('diversification_added', _diversification_obj.created_by);
                    } else {
                        socket.emit('diversification_added', _diversification_obj.created_by);
                    }
                }
            });
        });
        //#endregion event for add new diversification by user
        //#region event for diversification get all data
        socket.on('diversification_getall', _user_id => {
            Utility_fns._show_logs_output('254 :: diversification_getall :: ' + _.now() + ' :: ' + _user_id + ' :: ');
            RecordModel.diversification_getall(_user_id, function(error, result) {
                Utility_fns._show_logs_output('257 :: diversification_getall_list :: ' + _.now() + ' :: ' + ' :: '); // + JSON.stringify(result)
                if (error) {
                    socket.emit('diversification_getall_list', result);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('diversification_getall_list', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('diversification_getall_list', result);
                    } else {
                        socket.emit('diversification_getall_list', result);
                    }
                }
            });
        });
        //#endregion event for diversification get all data
        //#region event for diversification get all data
        socket.on('diversification_delete_by_id', _delete_obj => {
            var _id = _delete_obj._id;
            var _deleted_by = _delete_obj.user_id;
            Utility_fns._show_logs_output('209 :: fund_delete_by_id :: ' + _.now() + ' :: ' + _id + ' :: deleted by :: ' + _deleted_by);
            RecordModel.diversification_delete_by_id(_id, _deleted_by, function(error, result) {
                Utility_fns._show_logs_output('279 :: diversification_getall_list :: ' + _.now() + ' :: ' + ' :: '); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('diversification_getall_list', result);
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('diversification_getall_list', []);
                } else {
                    if (result.length == 0) {
                        socket.emit('diversification_getall_list', result);
                    } else {
                        socket.emit('diversification_getall_list', result);
                    }
                }
            });
        });
        //#endregion event for diversification get all data

        //#region sessions events
        //#region event for add new fund by user
        socket.on('sessions_request_addnew', _session_obj => {
            Utility_fns._show_logs_output('300 :: sessions_request_addnew :: ' + _.now() + ' :: ' + JSON.stringify(_session_obj) + ' :: ');
            RecordModel.addNewSesion(_session_obj, function(error, result) {
                Utility_fns._show_logs_output('302 :: _session_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_session_obj)); //+ JSON.stringify(result) 
                if (error) {
                    socket.emit('sessions_response_added', { message: "error 400", success: false, data: {} });
                }
                if (Utility_fns._returnT_4undefined(result)) {
                    socket.emit('sessions_response_added', result);
                } else {
                    switch (_session_obj.sessionType) {
                        case "instant":
                            io.emit('instant_sessions_response_added', result);
                            break;
                        case "restricted":
                            io.to(`${_session_obj.consultantId}`).emit('instant_sessions_response_added', result);
                            io.to(`${_session_obj.consultantId}`).emit('sessions_response_added', result);
                            break;
                        default:
                            //io.to(`my_app_main_room_for_student`).emit('response_session_updates_for_single_session', result);
                            let roomId = 'my_app_main_room_for_student';
                            let additionalData = {
                                sessionId: result.data._id,
                                action: 'added_new',
                                category: 'sessions'
                            };
                            let message = "New Session Added";
                            let description = result.data.sessionSubject;
                            let notifyRoomExceptUserIds = [];
                            _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                            //roomId = 'my_app_main_room_for_customer';
                            //_add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds);
                            break;
                    }
                    socket.emit('sessions_response_added', result);
                }
            });
        });
        //#endregion event for add new fund by user
        //#region event for get all sessions by user
        socket.on('sessions_request_getall', _session_obj => {
            Utility_fns._show_logs_output('318 :: sessions_request_getall :: ' + _.now() + ' :: ' + JSON.stringify(_session_obj) + ' :: ');
            RecordModel.sessionGetAll(_session_obj, function(error, result) {
                Utility_fns._show_logs_output('320 :: _session_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_session_obj)); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('sessions_response_getall', { message: "error 400", success: false, data: {} });
                }
                if (result.length == 0) {
                    socket.emit('sessions_response_getall', { message: "No session to show.", success: false, data: {} });
                } else {
                    socket.emit('sessions_response_getall', { message: "Success.", success: true, data: result });
                }
            });
        });
        //#endregion event for get all sessions by user
        //#region event for get all sessions by user
        socket.on('request_sessions_get_all_accepted_today', (_user_id, _role) => {
            Utility_fns._show_logs_output('406 :: request_sessions_get_all_accepted_today :: ' + _.now() + ' :: ' + JSON.stringify(_user_id) + ' :: ');
            switch (_role) {
                case 'consultant':
                    RecordModel.sessionGetAllOfTodayOnlyAcceptedByConsultantId(_user_id, function(error, result) {
                        Utility_fns._show_logs_output('409 :: _user_id :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_user_id)); //+ JSON.stringify(result)
                        Utility_fns._show_logs_output(error, result);
                        if (error) {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "error 400", success: false, data: {} });
                        }
                        if (_.keys(result).length == 0) {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "No session to show.", success: false, data: {} });
                        } else {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "Success.", success: true, data: result });
                        }
                    });

                    break;
                case 'customer':
                    RecordModel.sessionGetAllOfTodayOnlyAccepted(_user_id, function(error, result) {
                        Utility_fns._show_logs_output('409 :: _user_id :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_user_id)); //+ JSON.stringify(result)
                        Utility_fns._show_logs_output(error, result);
                        if (error) {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "error 400", success: false, data: {} });
                        }
                        if (_.keys(result).length == 0) {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "No session to show.", success: false, data: {} });
                        } else {
                            socket.emit('response_sessions_get_all_accepted_today', { message: "Success.", success: true, data: result });
                        }
                    });

                    break;
            }

        });
        //#endregion event for get all sessions by user
        //#region get existing session by id  
        socket.on('request_sessions_getbyid', _sessionId => {
            Utility_fns._show_logs_output('324 :: request_sessions_getbyid :: ' + _.now() + ' :: ' + JSON.stringify(_sessionId) + ' :: ');
            RecordModel.sessionGetByDocumentId(_sessionId, function(error, result) {
                Utility_fns._show_logs_output('337 :: _sessionId :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_sessionId)); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('response_sessions_getbyid', { message: "error 400", success: false, data: {} });
                }
                if (result.length == 0) {
                    socket.emit('response_sessions_getbyid', { message: "No session to show.", success: false, data: {} });
                } else {
                    socket.emit('response_sessions_getbyid', { message: "Success.", success: true, data: result });
                }
            });
        });
        //#endregion get existing session by id  
        //#region get existing session applied by consulttant
        socket.on('sessions_request_withappliedsessions', _session_obj => {
            Utility_fns._show_logs_output('350 :: sessions_request_withappliedsessions :: ' + _.now() + ' :: ' + JSON.stringify(_session_obj) + ' :: ');
            RecordModel.sessionGetAllBySessionApplyByConsultantId(_session_obj.consultantId, function(error, result) {
                Utility_fns._show_logs_output('352 :: _session_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_session_obj)); // + JSON.stringify(result)
                if (error) {
                    socket.emit('sessions_response_withappliedsessions', { message: "error 400", success: false, data: {} });
                    return;
                }
                if (result.length == 0) {
                    socket.emit('sessions_response_withappliedsessions', { message: "No session to show.", success: false, data: {} });
                } else {
                    socket.emit('sessions_response_withappliedsessions', { message: "Success.", success: true, data: result });
                }
            });
        });
        //#endregion get existing session applied by consulttant 
        //#region update existing session by id
        socket.on('sessions_request_updatebyid', _session_obj => {
            Utility_fns._show_logs_output('366 :: sessions_request_updatebyid :: ' + _.now() + ' :: ' + JSON.stringify(_session_obj) + ' :: ');
            //#region check whether session exists or not
            RecordModel.sessionGetByDocumentId(_session_obj._id, function(error, result) {
                if (error) {
                    socket.emit('sessions_response_updatebyid', { message: "error 400", success: false, data: {} });
                    return;
                }
                if (result.length <= 0) {
                    socket.emit('sessions_response_updatebyid', { message: "Requested Session not exists.", success: false, data: {} });
                    return;
                } else {
                    RecordModel.sessionUpdateDataById(_session_obj, function(error, result) {
                        if (error) {
                            socket.emit('sessions_response_updatebyid', { message: "error 400", success: false, data: {} });
                            return;
                        }

                        socket.emit('sessions_response_updatebyid', { message: "success", success: true, data: result });
                        return;
                    });
                }
            });
            //#endregion check whether session exists or not
        });
        //#endregion update existing session by id
        //#region get all sessions search by applied by consultantId
        socket.on('sessions_request_getall_byconsultantid', _session_obj => {
            if (!_session_obj) return;
            let emitThisEvent = _session_obj.emitThisEvent || 'sessions_response_getall_byconsultantid';
            Utility_fns._show_logs_output('393 :: sessions_request_getall_byconsultantid :: ' + _.now() + ' :: ' + JSON.stringify(_session_obj) + ' :: ');
            RecordModel.sessionApplyGetAllByConsultantId(_session_obj.consultantId, _session_obj.sessionId, _session_obj.sessionApplyId, function(error, result) {
                Utility_fns._show_logs_output('395 :: _session_obj :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_session_obj)); //+ JSON.stringify(result)
                if (error) {
                    socket.emit(emitThisEvent, { message: "error 400", success: false, data: {} });
                    return;
                }
                if (result.length == 0) {
                    socket.emit(emitThisEvent, { message: "No session to show.", success: false, data: {} });
                } else {
                    socket.emit(emitThisEvent, { message: "Success.", success: true, data: result });
                }
            });
        });
        //#endregion get all sessions search by applied by consultantId 
        //#endregion sessions events
        //#region transation event
        socket.on('request_text_translation', (string2Translate, languageCode2Translate) => {
            Utility_fns._show_logs_output('468 :: request_text_translation :: ' + _.now() + ' :: ');
            Utility_fns.translateStringToRequestedLanguage(string2Translate, languageCode2Translate, function(error, result) {
                if (error) {
                    socket.emit('response_text_translation', { message: "error 400", success: false, data: {} });
                    return;
                }
                socket.emit('response_text_translation', { message: "Success.", success: true, data: result });
            });
        });
        //#endregion transation event
        //#region Rating Review
        //#region get existing Rating Review by id  
        socket.on('request_rating_getbyid', _ratingId => {
            Utility_fns._show_logs_output('551 :: request_rating_getbyid :: ' + _.now() + ' :: ' + JSON.stringify(_ratingId) + ' :: ');
            RecordModel.getByDocumentIdRatingReview(_ratingId, function(error, result) {
                Utility_fns._show_logs_output('337 :: _ratingId :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(_ratingId)); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('response_rating_getbyid', { message: "error 400", success: false, data: {} });
                }
                if (result.length == 0) {
                    socket.emit('response_rating_getbyid', { message: "No Review to show.", success: false, data: {} });
                } else {
                    socket.emit('response_rating_getbyid', { message: "Success.", success: true, data: result });
                }
            });
        });
        //#endregion get existing Rating Review by id
        //#region add new Rating Review
        socket.on('request_rating_addnew', _obj2save => {
            Utility_fns._show_logs_output('551 :: request_rating_addnew :: ' + _.now() + ' :: ' + JSON.stringify(_obj2save) + ' :: ');
            RecordModel.getByUserIdSessionIdCreatedByRatingReview(_obj2save.createdBy, _obj2save.userId, _obj2save.sessionId, function(error, result) {
                if (result && _.keys(result).length > 0) {
                    socket.emit('response_rating_added', { message: "Review Already Added.", success: false, data: {} });
                } else {
                    RecordModel.addNewRatingReview(_obj2save, function(error, result) {
                        Utility_fns._show_logs_output('337 :: _ratingId :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(result)); //+ JSON.stringify(result)
                        if (error) {
                            socket.emit('response_rating_added', { message: "error 400", success: false, data: {} });
                        }
                        if (result.length == 0) {
                            socket.emit('response_rating_added', { message: "Failed to add review.", success: false, data: {} });
                        } else {
                            socket.emit('response_rating_added', { message: "Success.", success: true, data: result });
                        }
                    });
                }
            });
        });
        //#endregion add new Rating Review
        //#endregion Rating Review
        socket.on('request_app_notification_with_custom_data', function(_roomId, notifyRoomExceptUserIds) {
            Utility_fns._show_logs_output('727 :: request_app_notification_with_custom_data :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(notifyRoomExceptUserIds) + ' :: ' + _roomId);
            RecordModel.getAllNotificationByRoomId(_roomId, notifyRoomExceptUserIds, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('730 :: request_app_notification_with_custom_data :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(error));
                }
                io.to(`${socket.id}`).emit('response_app_notification_with_custom_data', { success: true, message: "success", data: result });
            });
        });
        socket.on('request_update_app_notification_for_viewed_by_user', function(notificationId, userId) {
            Utility_fns._show_logs_output('736 :: request_update_app_notification_for_viewed_by_user :: ' + _.now() + ' :: ' + socket.id + ' :: ' + JSON.stringify(userId) + ' :: ' + notificationId);
            RecordModel.updateNotificationByUserId(notificationId, userId, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('739 :: request_update_app_notification_for_viewed_by_user :: error :: ' + _.now() + ' :: ' + socket._id + ' :: ' + JSON.stringify(error));
                }
                //io.to(`${socket.id}`).emit('response_update_app_notification_for_viewed_by_user', { success: true, message: "success", data: result });
            });
        });
    });
    //#endregion Server side socket events
    //#region Server side events utility functions
    //#region send online user list
    function _broadcast_event_of_current_online_users_status_all(socketId, _obj2Use4Filter, useAndTrueOrFalse) {
        let online = true;
        RecordModel.userOnlineStatusGetAll(online, function(error, result) {
            if (error) {
                return Utility_fns._show_logs_output('52 :: userOnlineStatusGetAll :: error :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(error)); //+ JSON.stringify(result)
            }
            //Utility_fns._show_logs_output('132 :: userOnlineStatusGetAll :: ' + _.now() + ' :: ' + JSON.stringify(result));
            if (Utility_fns._returnT_4undefined(_obj2Use4Filter)) {
                _obj2Use4Filter = {
                    role: 'consultant'
                };
            }
            RecordModel.userGetAllBySearch(_obj2Use4Filter, useAndTrueOrFalse, function(error, innerResult) {
                if (error) {
                    return Utility_fns._show_logs_output('57 :: userGetAllByType :: error :: ' + _.now() + ' :: ' + JSON.stringify(innerResult) + ' :: ' + JSON.stringify(error));
                }
                let _mappedObj = _.mapKeys(innerResult, '_id');
                for (let index in result) {
                    let _obj = result[index];
                    let _id2use = _obj._id;
                    if (_id2use) {
                        if (_mappedObj[_id2use]) {
                            _mappedObj[_id2use]["online"] = true;
                            _mappedObj[_id2use]["onlineUpdatedOn"] = _obj.createdOn;
                            _mappedObj[_id2use]["socketId"] = _obj.socketId;
                            _.merge(_mappedObj[_id2use], { online: true, onlineUpdatedOn: _obj.createdOn, socketId: _obj.socketId });
                        } else {
                            ////TODO ANY Action here???
                        }
                    } else {
                        ////TODO ANY Action here???
                    }
                }
                if (socketId) {
                    //socket.emit('user_online_list', _.values(_mappedObj), 1, 2, 'abc');
                    io.to(`${socketId}`).emit('send_user_online_list', { message: "success", success: true, data: _.values(_mappedObj) });
                    //socket.emit('user_online_list', _.values(_mappedObj)); //will send only self
                    //Utility_fns._show_logs_output('78 :: userGetAllByType :: Self :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
                } else {
                    io.emit('send_user_online_list', { message: "success", success: true, data: _.values(_mappedObj) }); //will broadcast all including self
                    //Utility_fns._show_logs_output('82 :: userGetAllByType :: All :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
                }
            });
        });
    }
    //#endregion send online user list
    //#region send role types user list
    function _broadcast_event_of_role_wise_users_all(socketId, _obj2Use4Filter, useAndTrueOrFalse) {
        Utility_fns._show_logs_output(socketId, _obj2Use4Filter, useAndTrueOrFalse)
        if (Utility_fns._returnT_4undefined(_obj2Use4Filter)) {
            _obj2Use4Filter = {
                role: 'consultant'
            };
        }
        RecordModel.userGetAllBySearch(_obj2Use4Filter, useAndTrueOrFalse, function(error, innerResult) {
            if (error) {
                return Utility_fns._show_logs_output('182 :: userGetAllBySearch :: error :: ' + _.now() + ' :: ' + JSON.stringify(innerResult) + ' :: ' + JSON.stringify(error));
            }
            let _mappedObj = _.mapKeys(innerResult, '_id');

            if (socketId) {
                //socket.emit('user_online_list', _.values(_mappedObj), 1, 2, 'abc');
                io.to(`${socketId}`).emit('send_user_role_wise_list', { message: "success", success: true, data: _.values(_mappedObj) });
                //socket.emit('user_online_list', _.values(_mappedObj)); //will send only self
                //Utility_fns._show_logs_output('190 :: userGetAllBySearch :: Self :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            } else {
                io.emit('send_user_role_wise_list', { message: "success", success: true, data: _.values(_mappedObj) }); //will broadcast all including self
                //Utility_fns._show_logs_output('193 :: userGetAllBySearch :: All :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            }
        });
    }
    //#endregion send online user list

    //#region send sessions count
    function _broadcast_event_of_session_count_to_all(socketId, _obj2Save, useAndTrueOrFalse) {
        let _data2search = ((_obj2Save && _obj2Save.data2search) ? _obj2Save.data2search : _obj2Save);
        useAndTrueOrFalse = (useAndTrueOrFalse ? useAndTrueOrFalse : false);
        RecordModel.sessionGetLengthBySearch(_data2search, useAndTrueOrFalse, function(error, _mappedObj) {
            if (error) {
                return Utility_fns._show_logs_output('182 :: sessionGetLengthBySearch :: error :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                io.to(`${socketId}`).emit('sessions_response_getlength_bysearch', { message: "success", success: true, data: _mappedObj });
                //Utility_fns._show_logs_output('213 :: sessionGetLengthBySearch :: Self :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            } else {
                io.emit('sessions_response_getlength_bysearch', { message: "success", success: true, data: _mappedObj }); //will broadcast all including self
                //Utility_fns._show_logs_output('216 :: sessionGetLengthBySearch :: All :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            }
        });
    }
    //#endregion send sessions count

    //#region send sessions count
    function _broadcast_event_of_session_all_to_all_or_sender(socketId, _obj2Save, useAndTrueOrFalse, emitThisEvent) {
        emitThisEvent = (emitThisEvent ? emitThisEvent : 'sessions_response_getall_bysearch');
        let _data2search = ((_obj2Save && _obj2Save.data2search) ? _obj2Save.data2search : _obj2Save);
        useAndTrueOrFalse = (useAndTrueOrFalse ? useAndTrueOrFalse : false);
        RecordModel.sessionGetAllBySearch(_data2search, useAndTrueOrFalse, function(error, _mappedObj) {
            if (error) {
                return Utility_fns._show_logs_output('256 :: sessionGetAllBySearch :: error :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                io.to(`${socketId}`).emit(emitThisEvent, { message: "success", success: true, data: _mappedObj });
                //Utility_fns._show_logs_output('260 :: sessionGetAllBySearch :: Self :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            } else {
                io.emit(emitThisEvent, { message: "success", success: true, data: _mappedObj }); //will broadcast all including self
                //Utility_fns._show_logs_output('263 :: sessionGetAllBySearch :: All :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            }
        });
    }
    //#endregion send sessions count

    //#region send session apply using session id
    function _broadcast_event_of_session_apply_by_session_id_to_all(socketId, _sessionId, useAndTrueOrFalse) {
        useAndTrueOrFalse = (useAndTrueOrFalse ? useAndTrueOrFalse : false);
        RecordModel.sessionApplyGetAllBySessionId(_sessionId, function(error, _mappedObj) {
            if (error) {
                return Utility_fns._show_logs_output('251 :: sessionApplyGetAllBySessionId :: error :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                io.to(`${socketId}`).emit('send_session_apply_by_session_id', { message: "success", success: true, data: _mappedObj });
                //Utility_fns._show_logs_output('255 :: sessionApplyGetAllBySessionId :: Self :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            } else {
                io.emit('send_session_apply_by_session_id', { message: "success", success: true, data: _mappedObj }); //will broadcast all including self
                //Utility_fns._show_logs_output('258 :: sessionApplyGetAllBySessionId :: All :: ' + _.now() + ' :: '); //+JSON.stringify(_mappedObj)
            }
        });
    }
    //#endregion send session apply using session id

    //#region send session all data with applied users id collection for self user only
    function _broadcast_event_of_session_all_data_with_supplied_consultantId_to_all(socketId, _consultantId, useAndTrueOrFalse) {
        useAndTrueOrFalse = (useAndTrueOrFalse ? useAndTrueOrFalse : false);

        //#region get all sessions

        //#endregion get all sessions
    }
    //#endregion send session all data with applied users id collection for self user only
    //#region add app notification and broadcast to user
    function _add_app_notification_and_broadcast_event_in_room(roomId, additionalData, message, description, notifyRoomExceptUserIds) {
        let _data = {
            roomId: roomId,
            additionalData: additionalData,
            message: message,
            notifyRoomExceptUserIds: notifyRoomExceptUserIds,
            description: description
        };
        //Utility_fns._show_logs_output('821 :: _add_app_notification_and_broadcast_event_in_room :: error :: ' + _.now() + ' :: ' + JSON.stringify(_data));
        RecordModel.addNewNotification(_data, function(error, result) {
            if (error) {
                return Utility_fns._show_logs_output('824 :: _add_app_notification_and_broadcast_event_in_room :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
            }
            Utility_fns._show_logs_output('826 :: _add_app_notification_and_broadcast_event_in_room :: error :: ' + _.now() + ' :: ' + JSON.stringify(_data) + ' :: ' + roomId);
            io.to(roomId).emit('response_app_notification_with_custom_data', result);
            return;
        });
    }
    //#endregion add app notification and broadcast to user
    //#endregion Server side events utility functions
};
module.exports = appEvents;