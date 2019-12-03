# Desafio Bossa Box Dev. Back-End

![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_12-✓-blue.svg)
![](https://img.shields.io/badge/express-✓-blue.svg)

# File structure

```
api/
│
├── src/
│   ├── controllers/
│   │   ├── ...
│
├── config/
│   ├── env/
│   │   ├── ...
│   │
│   ├── ...
│
├── .gitignore                    * Example git ignore file
├── index.js                      * Entry point of our Node's app
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
└── README.md                     * This file
```

# Introduction (https://jwt.io)

I have a great introduction to JWT in one of my other repositories, click [here](https://github.com/murraco/spring-boot-jwt#introduction-httpsjwtio) to take a look!

## How to use this code?

1.  Install NPM dependencies

```
$ npm install
```

2.  Run the project

```
$ node index.js
```

3.  Or use `nodemon` for live-reload

```
$ npm start
```

> `npm start` will run `nodemon index.js`.

4.  Navigate to `http://localhost:3000/` in your browser to check you're seing the following response

```javascript
{ "status": "ok" }
```

> The port can be changed by the setting the environment variable `PORT`

# Contribution

- Report issues
- Open pull request with improvements
- Spread the word