# serverless-boilerplate
Serverless Boilerplate (APIGW + DynamoDB + Lambda)

![image](https://user-images.githubusercontent.com/35857179/128360478-c3496b52-c9ca-4889-b67c-e4359bfb1cd1.png)

## Installing

```
npm install serverless -g
```

## Build backend resources (API Gateway + DynamoDB)

```
cd ./backend
yarn install
```

## Deploy backend resources (API Gateway + DynamoDB)

```
cd ./backend
sls deploy --stage='dev'
```

## Remove backend resources (API Gateway + DynamoDB) 

```
cd ./backend
sls remove --stage='dev'
```

## Build API

```
cd api/src
yarn install
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
