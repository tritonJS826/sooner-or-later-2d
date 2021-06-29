# Quick Start Guide

To run the cloned codebase directly, you need to have Node.js and Docker installed (commands may differ by OS this is for windows 10).

1. Run `npm i` to install dependencies.
2. Run `docker compose up -d` to get a MongoDB instance running.
3. Run `npm start` to start server

##### Shut down

Run `docker compose down` to shut down MongoDB

### Current endpoints:

- GET `/users`
- POST `/users`
  {
  email: string, (unique)
  password: string, (min length 5)
  firstName?: string
  lastName?: string
  }

swagger will be soon...
