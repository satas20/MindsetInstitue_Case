# README for API Gateway

This API Gateway serves as the entry point for the CRM microservices architecture. It is responsible for routing requests to the appropriate microservices, handling authentication, and aggregating responses.

## Features

- **Routing**: Directs incoming requests to the respective microservices (User, Customer, Sales).
- **Authentication**: Implements JWT authentication to secure endpoints.
- **Modular Design**: Each microservice operates independently, promoting scalability and maintainability.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the API Gateway directory:
   ```
   cd crm-microservices/api-gateway
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the API Gateway

To start the API Gateway, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

### API Documentation

API endpoints and their usage can be found in the Swagger documentation. Ensure to check the documentation for details on request formats and response structures.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.