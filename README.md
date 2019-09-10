# Alioit Graphql Demo

## Install

This demo was tested with nodejs v8.10.0. To install all the needed libraries type.

```
$ npm install
```

## Run service

To start the service type.

```
$ npm start
```

The Graphql dev IDE service will be hosted in our local host http://localhost:3000/graphql

## Query example

```
 userById(id:1){
    id,
    name,
    pets{
      name
    }
  }
```

Also we can use the http file to test the API. Open the **ApiCalls.http** file on VSCODE and press **Send Request**. Is necesary to have installed **REST Client** plugin. Go to extension secction if is necesary to install.

```
### GET ALL USERS
POST http://localhost:3000/graphql
content-type: application/json

{
    "query": "{allUsers{name}}"
}
```

## Mock Data

The mock data used in this demo for the no data base queries are stored in model/index.js. In this case USER, PET and CAR.

**NOTE**
All the queries related to PARTS, WORK ORDERS and PURCHASES works ONLY with a data base.

## Links

- [graphql documentary](https://www.youtube.com/watch?v=783ccP__No8)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
