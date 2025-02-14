# Sales Service Documentation

## Overview
The Sales Service is a microservice responsible for managing sales-related operations within the CRM microservices architecture. It handles the sales pipeline, including tracking potential sales, managing sales statuses, and storing relevant notes.

## Features
- **Sales Pipeline Management**: Supports various stages of sales such as "New", "In Contact", "Deal", and "Closed".
- **CRUD Operations**: Allows for the creation, reading, updating, and deletion of sales records.
- **Notes Management**: Enables adding and editing notes for each sale.
- **Independent Microservice**: Operates independently and communicates with other microservices through the API Gateway.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the sales-service directory:
   ```
   cd crm-microservices/sales-service
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the Sales Service, run:
```
npm start
```

## API Endpoints
Refer to the API documentation for detailed information on available endpoints and their usage.

## Testing
Unit tests are located in the `src/tests` directory. To run tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.