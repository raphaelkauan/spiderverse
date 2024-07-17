<p align="center">
  <img src="https://github.com/raphaelkauan/api-aranhaverso/assets/111379005/dfb30345-6202-4da7-ad87-1ef8dcc03c25" width="200" alt="Spider Logo" />
</p>

## Description

An api inspired by the spiderverse with the aim of registering several spider men and their other villains.

## Functionalities

-   Robust Validation: Use of Class Validator to ensure data quality.
-   Efficient Data Management: Using Prisma for database operations.
-   Authentication with JWT: Generation of JWT for privacy of other routes.
-   Dockerization: Implementation with Docker for ease of deployment and development.
-   Redis: Redis implementation for cache management.

## 🧪 Scripts and Test Cases:

-   [Click here!](https://github.com/raphaelkauan/spiderverse-performance-test)

## Installation not using Docker

```bash
# Install dependencies
$ npm install

# .env config
DATABASE_URL = "conect postgres"
JWT_SECRET_TOKEN = "random password"

REDIS_HOST = "host redis"
REDIS_PORT = "port"

# Run database migrations
$ npx prisma migrate dev
```

## Running the app

```bash
# Initializing
$ npm run start:dev
```

## Swagger

**Route:** `http://localhost:3000/v1/docs`

  <img src="https://github.com/raphaelkauan/spiderverse/assets/111379005/5d7c81c1-a9a5-49f1-bd8e-1ab37388507b" width="750" alt="Doc" />

## License

This project is licensed under the [MIT licensed](LICENSE).
