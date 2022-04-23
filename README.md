## Car Store - Backend

#### How to set-up locally

- Create a file called `.env` and copy the properties from `.env.sample` with a correct Mongo DB URL.

- Run `npm install`

- Clone the [car-store-frontend](https://github.com/egon10/car-store-frontend) project
    - In the frontend run `npm build` and then copy the `/build` folder and paste it in the root of the backend project.

- Start the application with `npm start`

#### Unit tests

- Run `npm test`


#### How to setup MongoDB

- You can spin up a free Mongo DB cloud instance on https://www.mongodb.com/ OR

- With Docker: `docker run --name car-store-db -d mongo:latest` - [See official docs](https://hub.docker.com/_/mongo)