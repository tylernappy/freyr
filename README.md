# Freyr

## Local Development

Freyr runs on node `12.20.0`. Use [nvm](https://github.com/creationix/nvm) for node versioning and to use `12.18.2`:

```
$ nvm use 12.20.0
```

Freyr utilizes [yarn](https://yarnpkg.com/en/) to build, run, and test the application. To get started, use yarn to install the dependencies and bootstrap any necessary resources:

```
$ yarn
```

## Running Processes

Freyr can run processes via the command line:

```
$ yarn run water-plant
```

## Running Tests

Freyr tests should be run using [yarn](https://yarnpkg.com/en/).

```
$ yarn test
```

## Deploy

Freyr can upload firmware in `firmware/index.ino` via the command line: 

```
$ yarn run flash-device
```