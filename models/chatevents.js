const UUID = require("uuid");
const _ = require("lodash");
const Utility_fns = require("./utilityfns");
let ChatModel = require('../models/chatmodel');
let NotificationModel = require('../models/notificationmodel');

var users = 0;
var chatEvents = function(io, socket, RecordModel, PaymentServiceModel) {
    //#region Server side socket events
    //join room
    socket.on('join_room', function(_data) {

        //display the number of users in room 
        users += 1
        Utility_fns._show_logs_output(users)
            //io.sockets.emit('usercount_in_room', { count: users + ' person joined ' });
            //end

        // user joining the particular room
        socket.join(_data.roomId);

        Utility_fns._show_logs_output('22 :: ' + _data.userId + ' joined the room : ' + _data.roomId)

        //inform other on the room about event
        socket.broadcast.to(_data.roomId).emit('new_user_joined_room', { roomId: _data.roomId, userId: _data.userId, message: "has joined this room " });


    });
    //leave room

    socket.on('leave_room', function(_data) {
        //number of users in room
        users--
        io.sockets.emit('usercount_in_room', { count: '' + users })
        Utility_fns._show_logs_output(users)
            //end

        Utility_fns._show_logs_output('38 :: ' + _data.userId + " has left the room :: " + _data.roomId);
        socket.broadcast.to(_data.roomId).emit('user_left_room', { roomId: _data.roomId, userId: _data.userId, message: "has left the room " });
        socket.leave(_data.roomId)

    });

    //sending message
    socket.on('message_in_room', function(_data) {

        var _documentId = _data._id ? _data._id : UUID.v4();
        _data._id = _documentId;
        _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
        _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
        let chatModel = new ChatModel(_data);
        RecordModel.addNewChat(chatModel, function(error, _data) {
            //Utility_fns._show_logs_output('43', error, _data); 
        });
        io.in(_data.roomId).emit('new_message_in_room', chatModel);
    });

    //sending message
    socket.on('get_all_old_chat_of_room', function(_data, socketId) {
        socketId = socket.id;
        RecordModel.getAllChatByRoomId(_data.roomId, function(error, _mappedObj) {
            if (error) {
                return Utility_fns._show_logs_output('51 :: get_all_old_chat_of_room :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                //socket.emit('user_getall_list', result);
                io.in(_data.roomId).emit('set_all_old_chat_of_room', _mappedObj);
                //io.to(`${socketId}`).emit('send_session_apply_by_session_id', _mappedObj);
                //Utility_fns._show_logs_output('55 :: get_all_old_chat_of_room :: Self :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            } else {
                io.emit('set_all_old_chat_of_room', _mappedObj); //will broadcast all including self
                //Utility_fns._show_logs_output('58 :: get_all_old_chat_of_room :: All :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            }
        });

    });

    socket.on('notification_in_room', function(_data) {
        var _documentId = _data._id ? _data._id : UUID.v4();
        _data._id = _documentId;
        _data.createdOn = (_data.createdOn ? _data.createdOn : _.now());
        _data.updatedOn = (_data.updatedOn ? _data.updatedOn : _.now());
        _data.expiryStartOn = (_data.expiryStartOn ? _data.expiryStartOn : new Date());
        let notificationModel = new NotificationModel(_data);
        RecordModel.addNewNotification(notificationModel, function(error, _data) {
            Utility_fns._show_logs_output('43', error, _data);
        });
        io.in(_data.roomId).emit('new_notification_in_room', chatModel);
    });

    //sending message
    socket.on('get_all_old_notification_of_room', function(_data, socketId) {
        socketId = socket.id;
        RecordModel.getAllNotificationByRoomId(_data.roomId, function(error, _mappedObj) {
            if (error) {
                return Utility_fns._show_logs_output('51 :: get_all_old_notification_of_room :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                //socket.emit('user_getall_list', result);
                io.in(_data.roomId).emit('set_all_old_notification_of_room', _mappedObj);
                //io.to(`${socketId}`).emit('set_all_old_notification_of_room', _mappedObj);
                //Utility_fns._show_logs_output('55 :: set_all_old_notification_of_room :: Self :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            } else {
                io.emit('set_all_old_notification_of_room', _mappedObj); //will broadcast all including self
                //Utility_fns._show_logs_output('58 :: set_all_old_notification_of_room :: All :: ' + _.now() + ' :: ' + JSON.stringify(_mappedObj));
            }
        });

    });
    //#endregion Server side socket events

    socket.on('recd_new_transaction', function(_data) {
        Utility_fns._show_logs_output('78 :: recd_new_transaction :: ' + _.now() + ' :: ' + JSON.stringify(_data));

        RecordModel.addNewTransaction(_data, function(error, _data) {
            Utility_fns._show_logs_output('81', error, _data);
        });
        io.in(_data.roomId).emit('added_recd_new_transaction', { success: true });
    });
    socket.on('recd_new_transaction_details', function(_data) {
        Utility_fns._show_logs_output('86 :: recd_new_transaction_details :: ' + _.now() + ' :: ' + JSON.stringify(_data));
        RecordModel.addNewTransactionDetails(_data, function(error, _data) {
            Utility_fns._show_logs_output('88', error, _data);
        });
        io.in(_data.roomId).emit('added_new_transaction_details', { success: true });
    });
    socket.on('request_transaction_details', function(_data) {
        socketId = socket.id;
        Utility_fns._show_logs_output('94 :: request_transaction_details :: ' + _.now() + ' :: ' + JSON.stringify(_data));
        RecordModel.getAllTransactionDetails(_data, function(error, result) {
            if (error) {
                io.to(`${socketId}`).emit('response_transaction_details', { success: false, message: "failure", data: result });
            } else {
                io.to(`${socketId}`).emit('response_transaction_details', { success: true, message: "success", data: result });
            }
        });

    });
    //#region contacts
    socket.on('recd_new_contact', function(_data, _userId, _overWriteIfExistsT, useAndTrueOrFalse) {
        socketId = socket.id;
        Utility_fns._show_logs_output('78 :: recd_new_contact :: ' + _.now() + ' :: ' + JSON.stringify(_data));
        _broadcast_event_of_new_contact_added_to_all_group_member(socketId, _data, _userId, _overWriteIfExistsT);
    });
    //#region event for get all user
    socket.on('request_contact_getall', _userId => {
        Utility_fns._show_logs_output('102 :: request_contact_getall :: ' + _.now() + ' :: ' + _userId + ' :: ');
        RecordModel.getByUserInAnyRoleContact(_userId, function(error, result) {
            //Utility_fns._show_logs_output('83 :: user_getall_list :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ');
            if (error) {
                socket.emit('response_contact_getall', result);
                //response.send({message: "error 400",success:false, data: {}});
            }
            if (Utility_fns._returnT_4undefined(result)) {
                socket.emit('response_contact_getall', []);
            } else {
                if (result.length == 0) {
                    socket.emit('response_contact_getall', result);
                    //response.send({message: "No users to show.",success:false, data: {}});
                } else {
                    socket.emit('response_contact_getall', result);
                    //response.send({message: "No users to show.",success:false, data: result});
                }
            }
        });
    });
    socket.on('request_contact_getbyid', contactId => {
        Utility_fns._show_logs_output('102 :: request_contact_getbyid :: ' + _.now() + ' :: ' + contactId + ' :: ');
        RecordModel.getByIdContact(contactId, function(error, result) {
            //Utility_fns._show_logs_output('135 :: user_getall_list :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ');
            if (error) {
                socket.emit('response_contact_getbyid', { message: "error 400", success: false, data: {} });
                //response.send({message: "error 400",success:false, data: {}});
            }
            if (Utility_fns._returnT_4undefined(result)) {
                socket.emit('response_contact_getbyid', { message: "Contact is missing.", success: false, data: result });
            } else {
                if (result.length == 0) {
                    socket.emit('response_contact_getbyid', { message: "Contact is missing.", success: false, data: result });
                    //response.send({message: "No users to show.",success:false, data: {}});
                } else {
                    socket.emit('response_contact_getbyid', { message: "success", success: true, data: result });
                    //response.send({message: "No users to show.",success:false, data: result});
                }
            }
        });
    });
    //#endregion event for get all user
    //#region create new oder for payment
    socket.on('request_order_for_paymentr_add_new', _obj2save => {
        if (_obj2save && _obj2save.amount) {
            _obj2save.receipt = _obj2save.receipt ? _obj2save.receipt : UUID.v4();
            Utility_fns._show_logs_output('848 :: request_order_for_paymentr_add_new :: ' + _.now() + ' :: ' + JSON.stringify(_obj2save) + ' :: ');
            PaymentServiceModel.createNewOrder(_obj2save, function(error, result) {
                Utility_fns._show_logs_output('854 :: orderId :: ' + _.now() + ' :: ' + ' :: ' + JSON.stringify(result)); //+ JSON.stringify(result)
                if (error) {
                    socket.emit('response_order_for_paymentr_add_new', { message: "error 400", success: false, data: {} });
                }
                if (result.length == 0) {
                    socket.emit('response_order_for_paymentr_add_new', { message: "Failed to create order.", success: false, data: {} });
                } else {
                    socket.emit('response_order_for_paymentr_add_new', { message: "Success.", success: true, data: result });
                }
            });
        } else {
            socket.emit('response_order_for_paymentr_add_new', { message: "Failed to create order. Data is missing.", success: false, data: {} });
        }
    });
    //#endregion create new oder for payment
    //#region add new contact if exists then 
    function _broadcast_event_of_new_contact_added_to_all_group_member(socketId, _data, _userId, _overWriteIfExistsT, useAndTrueOrFalse) {
        if (Utility_fns._returnT_4undefined(_data)) {
            Utility_fns._show_logs_output("126 :: data missing");
            return;
        }
        useAndTrueOrFalse = (useAndTrueOrFalse ? useAndTrueOrFalse : false);
        let _usersArrInContacts = [];
        _usersArrInContacts = _.without(_.flattenDepth(_.values(_data.usersColl), 1), null, '', NaN, 'NULL', 'Null', 'null', undefined, 'undefined', _userId);
        Utility_fns._show_logs_output("132 :: Contact Info to Rooms :: ", _usersArrInContacts);
        //#region check for existing contact with same id
        if (_overWriteIfExistsT) {
            //#region create forcefully or overwrite existing
            RecordModel.addNewContact(_data, function(error, result) {
                Utility_fns._show_logs_output('105', error, _data);

                io.to(`${socketId}`).emit('added_by_self_recd_new_contact', result);
                //socket.broadcast.emit('added_recd_new_contact', result);
                _usersArrInContacts.forEach(function(room) {
                    io.sockets.in(room).emit('added_recd_new_contact', result);
                });
            });
            //#endregion create forcefully or overwrite existing
        } else {
            if (_data.isGroup) {
                //#region group case 
                _data._id = _data._id ? _data._id : UUID.v4();
                RecordModel.getByIdContact(_data._id, function(error, result) {
                    Utility_fns._show_logs_output('118', error, _data);
                    if (error) {

                    } else {
                        if (!result) {
                            RecordModel.addNewContact(_data, function(error, result) {
                                Utility_fns._show_logs_output('117', error, _data);

                                io.to(`${socketId}`).emit('added_by_self_recd_new_contact', result);
                                //socket.broadcast.emit('added_recd_new_contact', result);
                                _usersArrInContacts.forEach(function(room) {
                                    io.sockets.in(room).emit('added_recd_new_contact', result);
                                });
                            });
                        }
                    }
                });
                //#endregion group case 
            } else {
                //#region individual chat case
                if (_data._id) {
                    RecordModel.getByIdContact(_data._id, function(error, result) {
                        Utility_fns._show_logs_output('136', error, _data);
                        if (error) {

                        } else {
                            if (!result) {
                                RecordModel.addNewContact(_data, function(error, result) {
                                    Utility_fns._show_logs_output('117', error, _data);
                                    io.to(`${socketId}`).emit('added_by_self_recd_new_contact', result);
                                    //socket.broadcast.emit('added_recd_new_contact', result);
                                    _usersArrInContacts.forEach(function(room) {
                                        io.sockets.in(room).emit('added_recd_new_contact', result);
                                    });
                                });
                            }
                        }
                    });
                } else {
                    //#region search contact using admin memmbers and bind data with same
                    RecordModel.getByAdminUserContact(_data.usersColl.admin, function(error, result) {
                        Utility_fns._show_logs_output('153', error, _data, result);
                        if (error) {

                        } else {
                            if (result.length <= 0) {
                                RecordModel.addNewContact(_data, function(error, result) {
                                    Utility_fns._show_logs_output('117', error, _data);
                                    io.to(`${socketId}`).emit('added_by_self_recd_new_contact', result);
                                    //socket.broadcast.emit('added_recd_new_contact', result);
                                    _usersArrInContacts.forEach(function(room) {
                                        io.sockets.in(room).emit('added_recd_new_contact', result);
                                    });
                                });
                            } else {
                                io.to(`${socketId}`).emit('added_by_self_recd_new_contact', result);
                                //socket.broadcast.emit('added_recd_new_contact', result);
                                _usersArrInContacts.forEach(function(room) {
                                    io.sockets.in(room).emit('added_recd_new_contact', result);
                                });
                            }
                        }
                    });
                    //#endregion search contact using admin memmbers and bind data with same
                }
                //#endregion individual chat case
            }
        }

        //io.in(_data.roomId).emit('added_recd_new_contact', result);
        //#endregion check for existing contact with same id
    }
    //#endregion send session all data with applied users id collection for self user only
    //#region contacts
};
module.exports = chatEvents;