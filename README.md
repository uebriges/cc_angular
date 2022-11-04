# Angular example

This example retrieves data from a server (backend) via REST-API calls and displays it. The backend retrieves the data from the file system as well as from a postgres database.

## Prerequisites

The backend for this frontend application can be found here:

[https://github.com/uebriges/cc_angular_be](https://github.com/uebriges/cc_angular_be)

## Load dependencies

```
yarn
```

## Start the application

```
yarn start
```

## Usage

Go to

```
http://localhost:4200/
```

Click one of the following two buttons:

- Retrieve data from DB
- Retrieve data from file

The result is represented below the buttons

## Necessary future improvements:

- UI
- Securing environment variables/secrets
- Catch problems if the backend is not available
