# CRM Microservices

This project is a microservices architecture for a Customer Relationship Management (CRM) system. It consists of multiple services that handle different aspects of the CRM functionality, including user management, customer management, and sales tracking.

## Project Structure

```
crm-microservices
├── api-gateway          # Entry point for the API Gateway
├── user-service         # Service for user management
├── customer-service     # Service for customer management
├── sales-service        # Service for sales tracking
└── docker-compose.yml   # Docker Compose file to run all services
```

## Features

1. **User Management**:

   - User authentication with JWT.
   - Role management (Admin, Sales Representative, etc.).
   - CRUD operations for user information.

2. **Customer Management**:

   - CRUD operations for customer information (name, email, phone, company).
   - Ability to add and edit notes for customers.
   - Sorting and filtering of customer lists.

3. **Sales Tracking**:

   - Pipeline management for potential sales (e.g., "New", "In Contact", "Deal", "Closed").
   - Tracking dates and notes for each sales status.
   - Recording transaction dates when sales status changes.

4. **Microservices Architecture**:

   - Each service operates independently.
   - Communication through an API Gateway.

5. **Database**:

   - Each microservice has its own database.
   - Support for both SQL and NoSQL databases.

6. **Testing and Documentation**:
   - Unit tests for each service.
   - API documentation using Swagger.

## Getting Started

To get started with the CRM microservices, clone the repository and run the following command to start all services:

```bash
docker-compose up
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
