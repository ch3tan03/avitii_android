const UUID = require("uuid");
const _ = require("lodash");
const Utility_fns = require("./utilityfns");
let SessionModel = require('../models/sessionsmodel');
var AVcEvents = function(io, socket, AVcModel) {
    //#region Server side socket events
    socket.on('request_addnew_av_meeting', function(_data, socketId) {
        socketId = socket.id;
        Obj2Use = {
            "name": _data.sessionSubject,
            "meetingID": _data._id,
            "attendeePW": _data.attendeePW,
            "moderatorPW": _data.moderatorPW,
            "lockSettingsDisableCam": true,
            "lockSettingsDisableMic": true,
            "lockSettingsHideUserList": true,
            "meta_endCallbackUrl": encodeURI('https://educolive.com/home?meetingID=' + _data._id)
        };
        AVcModel.createNewAVcMeeting(Obj2Use, function(error, result) {
            if (error) {
                return Utility_fns._show_logs_output('11 :: request_addnew_av_meeting :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                //io.in(_data.roomId).emit('response_addnew_av_meeting', result);
                io.emit('response_addnew_av_meeting', result);
            } else {
                io.emit('response_addnew_av_meeting', result); //will broadcast all including self
            }
        });
    });

    socket.on('request_join_av_meeting', function(_data, socketId) {
        socketId = socket.id;
        let _meetingId = null;
        if (_data.sessionId && _data.lessonId) {
            _meetingId = _data.sessionId + '__' + _data.lessonId;
        } else {
            _meetingId = _data.sessionId;
        }
        Obj2Use = {
            "fullName": _data.firstName,
            "meetingID": _meetingId,
            "password": _data.token,
            "userID": _data.userId,
            "redirect": true
        };
        SessionModel.findById(_data.sessionId, function(error, result) {
            if (!result) {

            } else {
                let _meetingName = null;
                if (_data.sessionId && _data.lessonId) {
                    let _lessonObj = _.filter(result.sessionLessonsCollection, { "lessonId": _data.lessonId })[0];
                    if (_lessonObj) {
                        _meetingName = result.sessionSubject + '-' + _lessonObj.lessonName;
                    }
                }
                if (!_meetingName) {
                    _meetingName = result.sessionSubject;
                }
                let Obj2Use4meeting = {
                    "name": _meetingName,
                    "meetingID": _meetingId,
                    "attendeePW": result.attendeePW,
                    "moderatorPW": result.moderatorPW,
                    "meta_endCallbackUrl": encodeURI('https://educolive.com/home?meetingID=' + result._id),
                    "allowStartStopRecording": true,
                    "autoStartRecording": false,
                    "record": true,
                };
                /*
                "voiceBridge": 75002,
                "welcome": "Welcome+to+" + result.sessionSubject
                    */
                AVcModel.joinExistingAVcMeeting(Obj2Use, Obj2Use4meeting, function(error, result) {
                    if (error) {
                        return Utility_fns._show_logs_output('39 :: request_join_av_meeting :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
                    }
                    if (socketId) {
                        //io.in(_data.roomId).emit('response_addnew_av_meeting', result);
                        io.emit('response_join_av_meeting', result);
                    } else {
                        io.emit('response_join_av_meeting', result); //will broadcast all including self
                    }
                });
            }
        });

        socket.on('request_getinfo_av_meeting', function(_data, socketId) {
            socketId = socket.id;
            let _meetingId = null;
            if (_data.sessionId && _data.lessonId) {
                _meetingId = _data.sessionId + '__' + _data.lessonId;
            } else {
                _meetingId = _data.sessionId;
            }
            Obj2Use = {
                "meetingID": _meetingId,
                "password": _data.token,
            };
            AVcModel.getInfoExistingAVcMeeting(Obj2Use, function(error, result) {
                if (error) {
                    return Utility_fns._show_logs_output('97 :: request_getinfo_av_meeting :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
                }
                if (socketId) {
                    io.emit('response_getinfo_av_meeting', result);
                } else {
                    io.emit('response_getinfo_av_meeting', result);
                }
            });
        });
    });
    socket.on('request_getrecording_av_meeting', function(_data, socketId) {
        socketId = socket.id;
        let _meetingId = null;
        if (_data.sessionId && _data.lessonId) {
            _meetingId = _data.sessionId + '__' + _data.lessonId;
        } else {
            _meetingId = _data.sessionId;
        }
        Obj2Use = {
            "meetingID": _meetingId,
        };
        AVcModel.getRecordingsAVcMeeting(Obj2Use, function(error, result) {
            if (error) {
                return Utility_fns._show_logs_output('124 :: request_getrecording_av_meeting :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
            }
            if (socketId) {
                io.emit('response_getrecording_av_meeting', result);
            } else {
                io.emit('response_getrecording_av_meeting', result);
            }
        });
    });
    //#endregion Server side socket events
};
module.exports = AVcEvents;