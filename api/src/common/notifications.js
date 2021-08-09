'use strict';

const AWS = require('aws-sdk');
const ses = new AWS.SES({
    region: 'ap-southeast-1' || process.env.AWS_REGION
});

module.exports.sendEmail = async function sendEmail(sender, recipients, subject, body) {
    return ses.sendEmail({
        Destination: {
            // ToAddresses: [
            //   "recipient1@example.com", 
            //   "recipient2@example.com"
            // ]
            ToAddresses: recipients
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: body
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        Source: sender
    }).promise().then((data) => {
        console.log("Email Sent: ", data);
        return Promise.resolve('Successfully sent email');
    }).catch((error) => {
        console.log("Failed to send email: ", error);
        return Promise.reject(error);
    });
}
