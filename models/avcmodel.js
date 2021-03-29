const config = require("../config");
const sha1 = require('sha1');
const najax = $ = require('najax');
const _ = require("lodash");
//const parser = require('xml2json');
var convert = require('xml-js');

function AVcModel() {};
/*
var xml = '<response>\r\n' +
    '<returncode>SUCCESS</returncode>\r\n' +
    '<meetingID>abc123</meetingID>\r\n' +
    '<internalMeetingID>6367c48dd193d56ea7b0baad25b19455e529f5ee-1594070524222</internalMeetingID>\r\n' +
    '<parentMeetingID>bbb-none</parentMeetingID>\r\n' +
    '<attendeePW>111222</attendeePW>\r\n' +
    '<moderatorPW>333444</moderatorPW>\r\n' +
    '<createTime>1594070524222</createTime>\r\n' +
    '<voiceBridge>62155</voiceBridge>\r\n' +
    '<dialNumber>613-555-1234</dialNumber>\r\n' +
    '<createDate>Mon Jul 06 21:22:04 UTC 2020</createDate>\r\n' +
    '<hasUserJoined>false</hasUserJoined>\r\n' +
    '<duration>0</duration>\r\n' +
    '<hasBeenForciblyEnded>false</hasBeenForciblyEnded>\r\n' +
    '<messageKey></messageKey>\r\n' +
    '<message></message>\r\n' +
    '</response>';
console.log("input -> %s", xml)

var json = convert.xml2json(xml, { compact: true, spaces: 4 }); //parser.toJson(xml);
console.log("to json -> %s", json);
*/
function _return_query_string_from_json_object(obj, without_qm) {
    let s = "";
    if (_.isObject(obj)) {
        for (var key in obj) {
            if (s != "") {
                s += "&";
            }
            s += (key + "=" + encodeURIComponent(obj[key]));
        }
    }
    return (without_qm ? "" : "?") + s + "";
}

function _returnPurifiedJSONfromXMLConvertedJSON(_json) {
    let _convertedJSON = {};
    for (let _item in _json) {
        if (_item == 'elements') {
            _convertedJSON = _returnPurifiedJSONfromXMLConvertedJSON(_json[_item]);
        } else {
            if (_json[_item].type == 'element') {
                _convertedJSON[_json[_item].name] = _returnPurifiedJSONfromXMLConvertedJSON(_json[_item].elements);
            } else if (_json[_item].type == 'text') {
                return _json[_item].text;
            } else {

            }
        }
    }
    return _convertedJSON;
}

function _returnPurifiedJSONfromXMLConvertedJSON_second(_json) {
    let _convertedJSON = {};
    for (let _item in _json) {
        if (_item != '_text') {
            console.log('53', _item, _json[_item], _json);
            _convertedJSON[_item] = _returnPurifiedJSONfromXMLConvertedJSON_second(_json[_item]);
        } else {
            console.log('56', _item);
            return _json[_item];
        }
    }
    return _convertedJSON;
}

AVcModel.createNewAVcMeeting = function(Obj2Use, _callback) {
    let apiCallName = 'create';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true); //'name=Test+Meeting&meetingID=abc123&attendeePW=111222&moderatorPW=333444';
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    let apiServer = config.BigBlueButtonApiUrl; //'https://we.educolive.com/bigbluebutton/api/';
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('84', finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('13', _resFromServer);
            _callback(null, { success: true, message: "Success", data: _resFromServer });
        })
        .error(function(a, b, c) {
            console.log('16', a, b, c);
            _callback({ success: false, message: "Facing issue with meeting", data: null }, null);
        })
};

AVcModel.joinExistingAVcMeeting = function(Obj2Use, Obj2Use4meeting, _callback) {
    let apiCallName = 'join';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true);
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    //https://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=mp&redirect=true&checksum=eaa5a7046f173585805fc5b1b85b4d61048f52dc
    //https://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=ap&redirect=true&checksum=37ec553580c3f29fe62fba1b25130271abfbf983  
    let apiServer = config.BigBlueButtonApiUrl;
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('106', finalUrl2Call);
    let Obj2ReUse = {
        meetingID: Obj2Use.meetingID
    };
    AVcModel.isRunningExistingAVcMeeting(Obj2ReUse, function(error, info) {
        console.log('113', error, info);
        if (info.success) {
            if (info.data.response.running == false || info.data.response.running == 'false') {
                AVcModel.createNewAVcMeeting(Obj2Use4meeting, function(error, result) {
                    if (error) {
                        return console.log('39 :: request_join_av_meeting :: error :: ' + _.now() + ' :: ' + JSON.stringify(result) + ' :: ' + JSON.stringify(error));
                    }
                    _callback(null, { success: true, message: "Success", data: { "url2join": finalUrl2Call } });
                    return;
                });
                return;
            } else {
                _callback(null, { success: true, message: "Success", data: { "url2join": finalUrl2Call } });
                return;
            }
        } else {
            _callback(null, { success: true, message: "Success", data: { "url2join": finalUrl2Call } });
            return;
        }
    })
};
AVcModel.endExistingAVcMeeting = function(Obj2Use, _callback) {
    let apiCallName = 'end';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true);
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    let apiServer = config.BigBlueButtonApiUrl;
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('123', finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('127', _resFromServer);
            _callback(null, { success: true, message: "Success", data: _resFromServer });
        })
        .error(function(a, b, c) {
            console.log('131', a, b, c);
            _callback({ success: false, message: "Facing issue with meeting", data: null }, null);
        });
};

AVcModel.isRunningExistingAVcMeeting = function(Obj2Use, _callback) {
    let apiCallName = 'isMeetingRunning';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true);
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    let apiServer = config.BigBlueButtonApiUrl;
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('136', finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('149', _resFromServer);
            _callback(null, { success: true, message: "Success", data: _resFromServer });
        })
        .error(function(a, b, c) {
            console.log('153', a, b, c);
            _callback({ success: false, message: "Facing issue with meeting", data: null }, null);
        })
};
AVcModel.getInfoExistingAVcMeeting = function(Obj2Use, _callback) {
    let apiCallName = 'getMeetingInfo';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true);
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    let apiServer = config.BigBlueButtonApiUrl;
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('166', finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('170', _resFromServer);
            _callback(null, { success: true, message: "Success", data: _resFromServer });
        })
        .error(function(a, b, c) {
            console.log('174', a, b, c);
            _callback({ success: false, message: "Facing issue with meeting", data: null }, null);
        })
};
AVcModel.getRecordingsAVcMeeting = function(Obj2Use, _callback) {
    let apiCallName = 'getRecordings';
    let apiCallParams = _return_query_string_from_json_object(Obj2Use, true);
    let sharedSecret = config.BigBlueButtonSharedSecret;
    let checksum = sha1(apiCallName + apiCallParams + sharedSecret);

    let apiServer = config.BigBlueButtonApiUrl;
    let finalUrl2Call = apiServer + apiCallName + '?' + apiCallParams + '&checksum=' + checksum;
    finalUrl2Call.replace(/ /g, "+");
    console.log('209', finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('213', JSON.stringify(_resFromServer, null, 4));
            _callback(null, { success: true, message: "Success", data: _resFromServer });
        })
        .error(function(a, b, c) {
            console.log('217', a, b, c);
            _callback({ success: false, message: "Facing issue with meeting", data: null }, null);
        })
};
/*
let Obj2Use = {};
Obj2Use = {
    "name": "Test+Meeting",
    "meetingID": "abc123",
    "attendeePW": "111222",
    "moderatorPW": "333444"
};

AVcModel.createNewAVcMeeting(Obj2Use);
Obj2Use = {
    "fullName": "MD1",
    "meetingID": "abc123",
    "password": "333444",
    "userID": "MD1",
    "redirect": true
};
AVcModel.joinExistingAVcMeeting(Obj2Use);
Obj2Use = {
    "fullName": "AT1",
    "meetingID": "abc123",
    "password": "111222",
    "userID": "AT1",
    "redirect": true
};
AVcModel.joinExistingAVcMeeting(Obj2Use);
Obj2Use = {
    "meetingID": "abc123",
    "password": "333444"
};
AVcModel.endExistingAVcMeeting(Obj2Use);

Obj2Use = {
    "meetingID": "abc123",
    "password": "333444"
};
AVcModel.isRunningExistingAVcMeeting(Obj2Use);
*/
module.exports = AVcModel;
/*
GET POST / https://we.educolive.com/bigbluebutton/api/
GET POST create https://we.educolive.com/bigbluebutton/api/create?allowStartStopRecording=true&attendeePW=ap&autoStartRecording=false&meetingID=random-4556633&moderatorPW=mp&name=random-4556633&record=false&voiceBridge=76080&welcome=%3Cbr%3EWelcome+to+%3Cb%3E%25%25CONFNAME%25%25%3C%2Fb%3E%21&checksum=c3b1684ba5ad8568d16e92b678111af2721af574
GET POST join as moderator https://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=mp&redirect=true&checksum=eaa5a7046f173585805fc5b1b85b4d61048f52dc
GET POST join as attendee https://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=ap&redirect=true&checksum=37ec553580c3f29fe62fba1b25130271abfbf983
GET POST isMeetingRunning https://we.educolive.com/bigbluebutton/api/isMeetingRunning?meetingID=random-4556633&checksum=bbd768c7c03dc81ec7f639a639f47a9a2e1cf90f
GET POST getMeetingInfo https://we.educolive.com/bigbluebutton/api/getMeetingInfo?meetingID=random-4556633&password=mp&checksum=33e36a4e6e875665422b32e1eb060309b6bb15ee
GET POST end https://we.educolive.com/bigbluebutton/api/end?meetingID=random-4556633&password=mp&checksum=5bb30fd1347ab67c0cd6aec802a9bbebb072a071
GET POST getMeetings https://we.educolive.com/bigbluebutton/api/getMeetings?checksum=810178fd56d64fdfeb3932bcf68db5a2b324fa6f
GET POST getDefaultConfigXML https://we.educolive.com/bigbluebutton/api/getDefaultConfigXML?checksum=fa3775957e92f83470d0a71a4ce0edecccb9a877
GET POST setConfigXML https://we.educolive.com/bigbluebutton/api/setConfigXML
GET POST enter https://we.educolive.com/bigbluebutton/api/enter
GET POST configXML https://we.educolive.com/bigbluebutton/api/configXML
GET POST signOut https://we.educolive.com/bigbluebutton/api/signOut
GET POST getRecordings https://we.educolive.com/bigbluebutton/api/getRecordings?meetingID=random-4556633&recordID=random-4556633&checksum=8d434b3cd62798166a2d097f7d7f2116de463b84
GET POST publishRecordings https://we.educolive.com/bigbluebutton/api/publishRecordings?publish=false&recordID=random-4556633&checksum=70c00b99999857ef19930ee4243bb5b0b9e1bfd7
GET POST deleteRecordings https://we.educolive.com/bigbluebutton/api/deleteRecordings?recordID=random-4556633&checksum=081de3b3482929e908f83d1471fd8cb05dc0ccd0
GET POST updateRecordings https://we.educolive.com/bigbluebutton/api/updateRecordings?recordID=random-4556633&checksum=c9f65af4a7b118644409154cd59451792efeacea
GET POST getRecordingTextTracks https://we.educolive.com/bigbluebutton/api/getRecordingTextTracks?recordID=random-4556633&checksum=8a9ffddc0be7c376259c7771967b4b2a23e069b2
GET POST mobile call: join as moderator bigbluebutton://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=mp&redirect=true&checksum=eaa5a7046f173585805fc5b1b85b4d61048f52dc
GET POST mobile call: join as attendee bigbluebutton://we.educolive.com/bigbluebutton/api/join?fullName=User+6195242&meetingID=random-4556633&password=ap&redirect=true&ch
*/