const _ = require("lodash");
const crypto = require('crypto');
const Utility_fns = require("./utilityfns");
var appAVModule = function(io, RecordModel) {

    function generateSignature(apiKey, apiSecret, meetingNumber, role) {

        // Prevent time sync issue between client signature generation and zoom 
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

        Utility_fns._show_logs_output("14 :: AV API secret: " + signature);
        return signature
    }
    //   app.listen(config.zoom_master.port|| 4000, () => Utility_fns._show_logs_output(`Zoom Web SDK Sample Signature Node.js on port ${config.zoom_master.port}!`))

    // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
    //Utility_fns._show_logs_output(generateSignature(process.env.API_KEY, process.env.API_SECRET, 123456789, 0))
    //Utility_fns._show_logs_output("21 :: zoom secret: " + generateSignature('A0NTAp34PlwahW91BxolqWqucOtsFbm7Fme4', 'ZTkVT47u5muoLLNoLANBwtfkcj045CP8xHLn', 123456789, 0));
    generateSignature('A0NTAp34PlwahW91BxolqWqucOtsFbm7Fme4', 'ZTkVT47u5muoLLNoLANBwtfkcj045CP8xHLn', 123456789, 0)
};
module.exports = appAVModule;