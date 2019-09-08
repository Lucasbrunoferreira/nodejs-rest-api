# Express REST API - Node.JS + TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![node](https://img.shields.io/node/v/express) [![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

Structure for node.js projects involving typescript

## Getting Started

Hello, my name is Lucas Bruno, and I am providing this framework, which has been very helpful to me during the development of REST APIs using Node.js and TypeScript. Hope you enjoy, any feedback and pull request is very welcome!


### Prerequisites

In order to use this project, you must have the following requirements:

* NODE
* NPM

### Structure

Project structure:
```
├── src
│   ├── api               ---> The Folder to handler API layers
│   │   ├── controllers   ---> Input and Output of the application, along with basic request validations.
│   │   │
│   │   ├── middlewares   ---> Request Interceptors
│   │   │
│   │   └── routes        ---> App route settings
│   │
│   ├── config            ---> Application Settings, Logging, Environment, Express middleware ...
│   │
│   ├── interfaces        ---> Implementation of interfaces for development assistance
│   │
│   ├── models            ---> Models, Entities and Schemas for manipulation and persistence.
│   │
│   ├── persistence       ---> Definitions and database instances.
│   │
│   └── services          ---> It gathers business rules and external manipulations (Database, other api's ...)
│
├── tests                 ---> Unit Tests

```

### Installing and Running

So you can run your project in your environment, follow these steps:

Clone the project in your preferred folder.


```
cd nodejs-rest-api
```

```
npm install
```

```
npm run dev
```

And ready! The application will be running on the port defined in src/server.ts

## Running the tests

This application has unit tests using the [Jest](https://jestjs.io/) framework.

To run unit tests:

```
npm run test
```

To run unit tests with coverage:

```
npm run coverage
```


### And coding style tests

So that we can write cleaner and more beautiful code, we can adopt linear frameworks like [Eslint](https://eslint.org/).

```
npm run lint
```

## Deployment


If you want to enjoy the application in production, you can use the [Docker](https://www.docker.com/).

For this, the project has the Dockerfile configuration file, so that it can generate the project image.

```
docker build --name nodejs-api .
```

```
docker run -d -p 8080:8080 nodejs-api
```

## Built With

* [Express](https://expressjs.com/pt-br/) - The web framework used
* [TypeScript](https://www.typescriptlang.org/) - Is a Typed superset of Javascript
* [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
* [Jest](https://jestjs.io/) - Is a delightful JavaScript Testing Framework
* [Eslint](https://eslint.org/) - The pluggable linting utility for JavaScript
* [EditorConfig](https://editorconfig.org/) - Helps maintain consistent coding styles


## References

* [Santiq](https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=devto&utm_medium=post) - Bulletproof node.js project architecture
* [RocketSeat](https://github.com/Rocketseat/youtube-typescript-nodejs) - Project code produced during TypeScript video on NodeJS

## Authors

*  [Lucas Bruno Ferreira](https://github.com/Lucasbrunoferreira)
