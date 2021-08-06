# serverless-boilerplate
Serverless Boilerplate (APIGW + DynamoDB + Lambda)

![image](https://user-images.githubusercontent.com/35857179/128360478-c3496b52-c9ca-4889-b67c-e4359bfb1cd1.png)

## To-be-provisioned resources

- 1 API Gateway

  ![image](https://user-images.githubusercontent.com/35857179/128449981-b6ae18f4-58b3-4226-a2da-2761a1b2aaed.png)

- 1 DynamoDB with 2 Tables
  
  ![image](https://user-images.githubusercontent.com/35857179/128450008-80ee18d8-ff27-4a9e-a105-6af8a2525cea.png)

- 2 Lambda functions

  ![image](https://user-images.githubusercontent.com/35857179/128450790-46b480c5-8968-442f-88d0-d89584c4cc29.png)

## Install

```
npm i serverless -g
```

## Build backend resources (API Gateway + DynamoDB)

```
cd ./backend
npm i
```

## Deploy backend resources (API Gateway + DynamoDB)

```
cd ./backend
sls deploy --stage='dev'
```

![image](https://user-images.githubusercontent.com/35857179/128448918-a4860889-f8be-4d16-aa81-27cce2b651c6.png)

## Build API

```
cd api/src
npm i
```

## Deploy API

There are two Lambda functions. Both will take the input fields (field1 and field2) and write to DynamoDB. The only difference is that api1 is integrated with SES and will send emails to notify specfic users. See [here](https://github.com/wingkwong/serverless-boilerplate/blob/master/api/src/api1/index.js#L72) for more.

```
cd api/src
sls deploy --stage='dev'
```

![image](https://user-images.githubusercontent.com/35857179/128450844-91c800c9-614b-4880-a84f-2ad87410ab3a.png)

## Test API

> If you test api1, make sure your sender has been verified.

Headers
```
Content-Type:application/json
```

Request Body
```
{
    "field1": "foo",
    "field2": "bar"
}
```

Response

![image](https://user-images.githubusercontent.com/35857179/128451231-4cd1c015-d888-4fe9-ac88-b643dcf6149c.png)

## Clean up

### Remove API 

```
cd api/src
sls remove --stage='dev'
```

### Remove backend resources (API Gateway + DynamoDB) 

```
cd ./backend
sls remove --stage='dev'
```
