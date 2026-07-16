# REST API Test Automation

A backend test automation project built with **JavaScript**, **Node.js**, **Mocha**, **Chai**, and **Supertest**. This project validates REST API endpoints by testing HTTP requests, response status codes, response bodies, and CRUD operations against a mock API powered by **json-server**.

## 🚀 Technologies

- JavaScript (ES6 Modules)
- Node.js
- Mocha
- Chai
- Supertest
- json-server
- dotenv

## 📂 Project Structure

```
.
├── tests/              # API test suites
├── db.json             # Mock database for json-server
├── package.json
└── README.md
```

## 📋 Features

- Automated REST API testing
- CRUD endpoint validation
- HTTP status code verification
- Response body validation
- Mock REST API using json-server
- Modular and maintainable test structure

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Domsabianca16/<repository-name>.git
```

Navigate to the project directory:

```bash
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Project

Start the mock API server:

```bash
npm run api
```

The server will run on:

```
http://localhost:3000
```

Run the automated tests:

```bash
npm test
```

## 🧪 Test Coverage

The test suite validates:

- GET requests
- POST requests
- PUT requests
- DELETE requests
- Response status codes
- Response payloads
- API behavior and data integrity

## 👩‍💻 Author

**Bianca Domșa**

- GitHub: https://github.com/Domsabianca16
- LinkedIn: https://www.linkedin.com/in/bianca-domsa-920b22319/
