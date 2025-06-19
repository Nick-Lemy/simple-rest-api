
# Simple REST API

This is a simple REST API for getting and adding users

## Documentation

This Project uses Node.js to build the REST API. Additionally, it follow a specific architecture and take it count user input validation.

### Project architecture

```
├── controllers
│   └── user.controller.mjs
├── models
│   └── user.model.mjs
├── routes
│   └── user.route.mjs
├── server.mjs
├── package.json
├── structure.txt
└── yarn.lock
```

### Project installation

```bash
# Clone the github repository
git clone https://github.com/Nick-Lemy/simple-rest-api

# Setup the project
cd simple-rest-api
yarn # or npm install
echo 'PORT=4321' > .env

# Run the server
yarn dev # or npm run dev

```

## API Reference

### Get all users

```http
  GET /users
```

### Get single user

```http
  GET /users/${id}
```

| params     | Type     | Description                |
| :------- | :------- | :------------------------- |
| `id`   | string   | **Required**. id of the user|

### Create user

```http
  PSOT /users
```

| body     | Type     | Description                |
| :------- | :------- | :------------------------- |
| `name`   | string   | **Required**. name of the user|
| `email`  | string   | **Required**. email of the user |

## Feedback

If you have any feedback, please reach out to us at <nicklemykayiranga@gmail.com>
