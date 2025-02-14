# User Service Documentation

## Overview
The User Service is a microservice responsible for managing user-related operations within the CRM system. It handles user authentication, user roles, and CRUD operations for user information.

## Features
- User authentication using JWT.
- Management of user roles (Admin, Sales Representative, etc.).
- CRUD operations for user information.

## Directory Structure
```
user-service
├── src
│   ├── app.ts               # Entry point for the User Service
│   ├── controllers          # Contains user-related controllers
│   ├── models               # Contains user schema and database interaction
│   ├── routes               # Defines user-related endpoints
│   └── tests                # Unit tests for the User Service
├── package.json             # Lists dependencies and scripts
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Documentation for the User Service
```

## Getting Started
1. Clone the repository.
2. Navigate to the `user-service` directory.
3. Install dependencies using `npm install`.
4. Start the service using `npm start`.

## API Documentation
Refer to the API documentation for details on available endpoints and their usage.

## Testing
Run unit tests using the command `npm test` to ensure the service functions as expected.

## License
This project is licensed under the MIT License.