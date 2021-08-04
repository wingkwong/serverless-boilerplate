# serverless-boilerplate
Serverless Boilerplate

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
