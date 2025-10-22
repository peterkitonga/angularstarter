# Angular Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). It is a starter created to serve as a starting template for an SPA built with Angular and TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) - For type safety and other awesome features not native to vanilla JavaScript.
- [Angular](https://angular.dev/) - Frontend framework for building reactive and responsive web applications.
- [NgRx](https://ngrx.io/) - RxJS powered state management library.
- [Jest](https://jestjs.io/) - Javascript testing framework.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Roadmap

- [x] Jest for unit tests
- [x] Cucumber and cypress for E2E tests
- [x] Containerized setup for development with docker-compose
- [ ] Service workers setup with PWA
- [ ] State management with NgRx
- [ ] Jenkins pipeline for running tests
- [ ] Code coverage with coveralls
- [ ] Containerized setup for production with docker-compose

## Installing dependencies

To install a dependency(e.g. js-cookie) using the provided docker "utility" service, run

```bash
docker-compose run --rm npm install js-cookie
```

## Angular CLI

To run angular CLI commands with the provided docker "utility" service, run

```bash
docker-compose run --rm ng [angular command]
```

## Run Locally

First, you must install dependencies after cloning the project

```bash
npm install
```

Or with docker

```bash
docker-compose run --rm npm install
```

You can run the dev server with npm

```bash
npm start
```

Alternatively, you can run it with docker

```bash
docker-compose up -d dev-server
```

Navigate to `http://127.0.0.1:4200/`. The application will automatically reload if you change any of the source files.

## Running Unit Tests

To execute the unit tests, run

```bash
npm test
```

To view the coverage reports for the unit tests, run

```bash
npm run test:view
```

Alternatively, you can run the unit tests using docker

```bash
docker-compose run --rm npm run test
```

## E2E testing

To execute the e2e tests(cypress) with a browser, run

```bash
npm run cypress:open
```

A "utility" service has been provided in the project for running with docker. To run the tests, run

```bash
docker-compose run --rm cypress run --browser chrome
```

## Build project

Project build artifacts will be stored in the `dist/` directory.

To build the project, run

```bash
npm run build
```

To execute the same with the provided docker "utility" service, run

```bash
docker-compose run --rm npm run build
```

## Linting

Linting is configured with eslint and prettier. You are free to configure it to your liking using the configuration files `.eslint.config.js` and `.prettierrc`

To format code with linting rules, run

```bash
npm run lint
```

Alternative docker command

```bash
docker-compose run --rm npm run lint
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
