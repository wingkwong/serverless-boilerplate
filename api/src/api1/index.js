/*jshint esversion: 9 */
const log4js = require('log4js');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const AWS = require('aws-sdk');
const dynamoDBDocClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
});
const logLevel = process.env.logLevel;
const {
    uuid
} = require('uuidv4');
const {
    sendEmail
} = require('../common/notifications.js');

const app = express();
const RESPONSE_SECURITY_HEADER = {
    'Access-Control-Allow-Origin': "example.com",
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'POST,GET',
    'Strict-Transport-Security': 'max-age= 63072000',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'same-origin',
}

log4js.configure({
    appenders: {
        logger: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['logger'],
            level: logLevel
        }
    }
});

app.use(bodyParser.json({
    strict: false
}));

app.post('/api1', async (req, res) => {
    try {
        const body = req.body;
        res.set(RESPONSE_SECURITY_HEADER);

        const {
            field1,
            field2
        } = body;

        const id = uuid()
        const params = {
            // exported from serverless.yml
            TableName: process.env.FOO_DYNAMODB_TABLE_A,
            Item: {
                id,
                field1,
                field2
            },
        };

        dynamoDBDocClient
            .put(params)
            .promise()
            .then(() => {
                // exported from serverless.yml
                const sender = process.env.FOO_SENDER || "foo@example.com"
                const recipients = [
                    "bar@example.com",
                    "baz@example.com"
                ]
                const subject = "Subject"
                const body = "Body"
                return sendEmail(sender, recipients, subject, body);
            })
            .then(() => {
                res.status(200).json({
                    body: JSON.stringify({
                        message: 'SUCCESS',
                    })
                });
            }).catch(error => {
                console.log('FAILED:', error);
                res.status(400).json({
                    body: JSON.stringify({
                        message: error
                    })
                });
            });
    } catch (err) {
        res.status(504).json({
            body: 'FAILED'
        });
    }
});

const handler = serverless(app);
exports.handler = async (event, context) => {
    const result = await handler(event, context);
    return result;
};
