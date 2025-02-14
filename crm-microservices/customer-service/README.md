# Customer Service Microservice

This directory contains the implementation of the Customer Service microservice, which is responsible for managing customer-related operations within the CRM system.

## Features

- **CRUD Operations**: Manage customer information including name, email, phone, and company.
- **Notes Management**: Add and edit notes for each customer.
- **Sorting and Filtering**: List customers with sorting and filtering capabilities.

## Directory Structure

- **src/**: Contains the source code for the Customer Service.
  - **app.ts**: Entry point for the Customer Service.
  - **controllers/**: Handles customer-related operations.
  - **models/**: Defines the customer schema and interacts with the database.
  - **routes/**: Defines the endpoints for customer-related operations.
  - **tests/**: Contains unit tests for the Customer Service.

## Installation

1. Clone the repository.
2. Navigate to the `customer-service` directory.
3. Run `npm install` to install dependencies.

## Usage

To start the Customer Service, run:

```
npm start
```

## API Documentation

API endpoints and usage details will be documented using Swagger.

## Testing

Unit tests can be run using:

```
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License.