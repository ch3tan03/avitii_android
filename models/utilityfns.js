const _ = require("lodash");
const config = require(".././config");
var _hide_logs = false;
var fs = require('fs-extra');
var googleApiKey = config.googleApiKey;
var googleOptions = { concurrentLimit: 20 };
const najax = $ = require('najax');
var googleTranslate = require('google-translate')(googleApiKey, googleOptions);

function Utility_fns() {};

//#region utility functions
Utility_fns.translateGetSupportedLanguages = function(_callback) {
    googleTranslate.getSupportedLanguages(function(err, languageCodes) {
        Utility_fns._show_logs_output('15', JSON.stringify(languageCodes));
        if (err) {
            _callback(err, null);
        } else {
            _callback(null, languageCodes);
        }
    });
};
Utility_fns.translateGetSupportedLanguagesJSON = function(_callback) {
    Utility_fns.translateGetSupportedLanguages(async function(err, languageCodes) {
        let languageCodesJSON = {};
        if (languageCodes) {
            let length = languageCodes.length;
            for (let _index in languageCodes) {
                let _currentLanguageCode = languageCodes[_index];
                await googleTranslate.getSupportedLanguages(_currentLanguageCode, function(err, languageCodes) {
                    languageCodesJSON[_currentLanguageCode] = languageCodes;
                    if (_index == (length - 1)) {
                        fs.writeFile('./languageCodesJSON.json', JSON.stringify(languageCodesJSON, null, 4))
                            .then(() => {
                                Utility_fns._show_logs_output('success!')
                            })
                            .catch(err => {
                                console.error(err)
                            });
                    }
                    return languageCodes;
                    // => [{ language: "en", name: "Englisch" }, ...]
                });
            }
        }
        /*
        Utility_fns._show_logs_output(languageCodesJSON)
        fs.writeJson('./languageCodesJSON.json', languageCodesJSON)
            .then(() => {
                Utility_fns._show_logs_output('success!')
            })
            .catch(err => {
                console.error(err)
            });
            */
        if (err) {
            _callback(err, null);
        } else {
            _callback(null, languageCodes);
        }
    });
};

/*
["af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","en","eo","es","et","eu","fa","fi","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","iw","ja","jw","ka",
"kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","my","ne","nl","no","ny","or","pa","pl","ps","pt","ro","ru","rw","sd","si","sk","sl","sm","sn","so","sq","sr","st","su","sv","sw","ta","te","t
g","th","tk","tl","tr","tt","ug","uk","ur","uz","vi","xh","yi","yo","zh","zh-CN","zh-TW","zu"]
*/
//uncomment below line to create or update latest language JSON from google 
//Utility_fns.translateGetSupportedLanguagesJSON(function() {});
Utility_fns.translateStringToRequestedLanguage = function(string2Translate, languageCode2Translate, _callback) {
    googleTranslate.translate(string2Translate, languageCode2Translate, function(err, translation) {
        if (err) {
            _callback(err, null);
        } else {
            _callback(null, translation);
        }
    });
}

Utility_fns.random = function(len) {
    let result = Math.floor(Math.random() * Math.pow(10, len));
    return (result.toString().length < len) ? Utility_fns.random(len) : result;
}
Utility_fns._hide_server_logs = function(_hide_server_logT) {
    _hide_logs = !!_hide_server_logT;
};

Utility_fns._show_logs_output = function(...args) {
    if (!_hide_logs) {
        let _msg2Show = [];
        for (let _index in args) {
            if (_.isObject(args[_index]) || _.isArray(args[_index])) {
                _msg2Show.push(JSON.stringify(args[_index]));
            } else {
                _msg2Show.push(args[_index]);
            }
        }
        console.log(_msg2Show.join(" :: "));
    }
}
Utility_fns._returnT_4undefined = function(_obj, _ignore_bitT) {
    if ((typeof _obj == 'undefined' || _obj == null || _obj == '' || (typeof _obj == 'string' && _obj != '' && _obj.trim() == '') || _obj == "undefined" || _obj == "null" || _obj == 'NaN' || _.isUndefined(_obj) || _.isNaN(_obj) || _.isNull(_obj) || _obj == [] || (typeof _obj === 'object' && Object.keys(_obj).length == 0)) && ((!_ignore_bitT) || (_ignore_bitT && _obj !== false && _obj !== 0))) {
        return true;
    } else {
        return false;
    }
};
//#endregion utility functions
Utility_fns.AppDocumentType = {
    user_profile: 'user_profile',
    app_funds: 'app_funds'
}
Utility_fns._return_dycrypted_out_put = function() {

}
Utility_fns._return_post_event_cb_to_client_with_response_data = function() {

}
Utility_fns._return_url_hostname_with_protocol = function() {

}
Utility_fns._send_sms_otp_using_details = function(_data, _otp2send, _callback) {
    //https://api.msg91.com/api/v5/otp?authkey=334942AYCkfsOwLEQn5f04bd15P1&template_id=5f04c0f4d6fc050e1470e511&extra_param={"Param1":"Value1", "Param2":"Value2", "Param3": "Value3"}&mobile=918983525349&invisible=1&otp=112233 to send and verify. If not sent, OTP will be generated.&userip=IPV4 User IP&email=Email ID
    let finalUrl2Call = config.OtpApiURL + '&mobile=' + _data.mobileNo + '&invisible=1&otp=' + _otp2send;
    console.log('126', _data, finalUrl2Call);
    najax({ url: finalUrl2Call, type: 'POST' })
        .success(function(a, b, c) {
            let _resFromServer = a; // _returnPurifiedJSONfromXMLConvertedJSON(JSON.parse(convert.xml2json(a)));
            console.log('130', _resFromServer);
            if (_callback) {
                _callback(null, { success: true, message: "Success", data: _resFromServer });
            }
        })
        .error(function(a, b, c) {
            console.log('133', a, b, c);
            if (_callback) {
                _callback({ success: false, message: "Facing issue with api", data: null }, null);
            }
        });
}
const nodemailer = require("nodemailer");
Utility_fns._send_email_using_smtp_details = function(_options, _message) {
        if (Utility_fns._returnT_4undefined(_options)) {
            _options = config.smtp_default_setting;
            /*
                  _opt  ions = {
                        pool: true,
                        host: "piralo.com",
                        port: 465,
                        secure: true, // use TLS
                  auth      : {
                            user: "support@piralo.com",
                            pass: "qwer@1234"
                        }
                    };
                    */
        }
        if (Utility_fns._returnT_4undefined(_message)) {
            _message = {
                to: 'support@piralo.com',
                subject: 'Test Mail ✔' + Date.now(),
                text: 'Hello to myself!',
                html: `<p><b>Hello</b> User </p>
                    <p>This is Testing mail</p>`
            };
        }
        //Utility_fns._show_logs_output('67', _options, _message);
        let _transporter = nodemailer.createTransport(_options);
        _transporter.verify(function(error, success) {
            if (error) {
                Utility_fns._show_logs_output('61', error);
            } else {
                Utility_fns._show_logs_output("63 :: Server is ready to take our messages", success);
            }
        });
        _transporter.sendMail(_message, (error, info) => {
            if (error) {
                Utility_fns._show_logs_output('Error occurred');
                Utility_fns._show_logs_output(error.message);
                return;
            }

            Utility_fns._show_logs_output('Message sent successfully!');
            Utility_fns._show_logs_output(nodemailer.getTestMessageUrl(info));

            // only needed when using pooled connections
            transporter.close();
        });
    }
    //#region return message object for SMTP mail
Utility_fns._return_smtp_mailer_message_object = function(_toEmailIdCommaSeparated, _ccEmailIdCommaSeparated, _bccEmailIdCommaSeparated, _subject, _mailBodyHtml) {
        let _message = {};
        if (!Utility_fns._returnT_4undefined(_toEmailIdCommaSeparated)) {
            _message.to = _toEmailIdCommaSeparated;
        }
        if (!Utility_fns._returnT_4undefined(_ccEmailIdCommaSeparated)) {
            _message.cc = _ccEmailIdCommaSeparated;
        }
        if (!Utility_fns._returnT_4undefined(_bccEmailIdCommaSeparated)) {
            _message.bcc = _bccEmailIdCommaSeparated;
        }
        if (!Utility_fns._returnT_4undefined(_subject)) {
            _message.subject = _subject;
        }
        if (!Utility_fns._returnT_4undefined(_mailBodyHtml)) {
            _message.html = _mailBodyHtml;
        }
        Utility_fns._show_logs_output('109', _message);
        return _message;
    }
    //#endregion return message object for SMTP mail
    //#region sample mail message object
    /*    
            // Message object
         let    message = {
                // Comma separated list of recipients
                to: 'Nodemailer <example@nodemailer.com>',
                // Subject of the message
                subject: 'Nodemailer is unicode friendly ✔' + Date.now(),
                // plaintext body
                text: 'Hello to myself!',
                // HTML body
                html: `<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>
                <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,
                // AMP4EMAIL
                amp: `<!doctype html>
                <html ⚡4email>
          <h        ead>
                    <meta charset="utf-8">
                    <style amp4email-boilerplate>body{visibility:hidden}</style>
                    <script async src="https://cdn.ampproject.org/v0.js"></script>
                    <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
                  </head>
               <b   ody>
                    <p><b>Hello</b> to myself <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
                   <p >No embedded image attachments in AMP, so here's a linked nyan cat instead:<br/>
                      <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
                  </body>
                </html>`,
                // An array of attachments
           atta     chments: [
                    // String attachment
                 {   
                        filename: 'notes.txt',
                        content: 'Some notes about this e-mail',
                        contentType: 'text/plain' // optional, would be detected from the filename
                    },
                    // Binary Buffer attachment
              {      
                        filename: 'image.png',
                   cont     ent: Buffer.from(
                            'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                            '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                            'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                            'base64'
                        ),
                        cid: 'note@example.com' // should be as unique as possible
                    },
                    // File Stream attachment
               {     
                        filename: 'nyan cat ✔.gif',
                        path: __dirname + '/assets/nyan.gif',
                        cid: 'nyan@example.com' // should be as unique as possible
                    }
                ],
        list        : {
                    // List-Help: <mailto:admin@example.com?subject=help>
                    help: 'admin@example.com?subject=help',
                    // List-Unsubscribe: <http://example.com> (Comment)
               unsu     bscribe: [
                    {    
                            url: 'http://example.com/unsubscribe',
                            comment: 'A short note about this url'
                        },
                        'unsubscribe@example.com'
                    ],
                    // List-ID: "comment" <example.com>
              id:       {
                        url: 'mylist.example.com',
                        comment: 'This is my awesome list'
                    }
                }
            };
            */
    //#endregion sample mail message object

module.exports = Utility_fns;