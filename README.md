# VUTTR (Very Useful Tools to Remember)

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://gitlab.com/nelsonpl/desafio-bossa-box)
![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)
![](https://img.shields.io/badge/build-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_12-✓-blue.svg)
![](https://img.shields.io/badge/express-✓-blue.svg)
![](https://img.shields.io/badge/@nestjs-✓-blue.svg)
![](https://img.shields.io/badge/mongoose-✓-blue.svg)
![](https://img.shields.io/badge/swagger-✓-blue.svg)
![](https://img.shields.io/badge/passport-✓-blue.svg)
![](https://img.shields.io/badge/jest-✓-blue.svg)
![](https://img.shields.io/badge/supertest-✓-blue.svg)

# Project

```
api/
│
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.model.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   ├── local.strategy.ts
│   │	│
│   ├── coverage/
│   │	│
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   │	│
│   ├── tool/
│   │   ├── tool.controller.spec.ts
│   │   ├── tool.controller.ts
│   │   ├── tool.model.ts
│   │   ├── tool.module.ts
│   │   ├── tool.service.factory.ts
│   │   ├── tool.service.ts
│   │	│
│   ├── user/
│   │   ├── user.controller.ts
│   │   ├── user.model.ts
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │	│
│   ├── api.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── jest-2e2.json
│   │
├── .gitignore                    
├── .gitlab-ci.yml                
├── CHANGELOG                     
├── .prettierrc                   
├── index.js                     
├── LICENSE                       
├── nest-cli.json                 
├── package.json                  
├── Procfile                      
├── Procfile.dev                  
├── README.md                    
├── tsconfig.build.json         
├── tsconfig.json                 
├── tslint.json                  
```

## Install

```bash
$ npm install
```

## Configs

Env:

```bash
$ DATABASE_URL = MONGODB_URL
$ SECRET = SECRET_JWT
```

## Execute

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API

link: `http://localhost:3000/`

```javascript
{
	"name": "nestjs-api",
	"version": "1.0.0",
	"description": "Simple api.",
	"author":"nelson.npl@gmail.com",
	"license":"MIT"
}
```

## Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
