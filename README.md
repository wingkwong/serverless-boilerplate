# serverless-boilerplate
Serverless Boilerplate (APIGW + DynamoDB + Lambda)

![image](https://user-images.githubusercontent.com/35857179/128360478-c3496b52-c9ca-4889-b67c-e4359bfb1cd1.png)

## To-be-provisioned resources

- 1 API Gateway
- 1 DynamoDB with 2 Tables (Table_A & Table_B)
- 2 Lambda functions

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


## Remove backend resources (API Gateway + DynamoDB) 

```
cd ./backend
sls remove --stage='dev'
```

## Build API

```
cd api/src
npm i
```

## Deploy API

```
cd api/src
sls deploy --stage='dev'
```

## Remove API 

```
cd api/src
sls remove --stage='dev'
```

## Testing API

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
