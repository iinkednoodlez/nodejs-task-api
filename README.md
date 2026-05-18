# NodeJS Task API

A full-stack task manager application built with Node.js, Express.js, HTML, CSS, and JavaScript.

## Features
- Add new tasks
- Retrieve all tasks
- Retrieve tasks by ID
- Store task data in a JSON file
- Simple frontend interface for task management

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Project Structure
```plaintext
nodejs-task-api/
│
├── index.html
├── app.js
├── styles.css
├── server.js
├── api.json
└── README.md
```

## API Endpoints

### Get all tasks
```http
GET /api/tasks
```

### Get task by ID
```http
GET /api/tasks/:id
```

### Add new task
```http
POST /api/tasks/:description
```

## Running the Project Locally

1. Install dependencies
```bash
npm install
```

2. Start the server
```bash
node server.js
```

3. Open in browser
```plaintext
http://localhost:3333
```

## Deployment
The frontend is deployed using GitHub Pages for demonstration purposes.


## Note
This project includes a Node.js and Express.js backend API.
The frontend is deployed with GitHub Pages for demonstration purposes.
Full task functionality requires the backend server to run locally.

## Author
Maipa Ly
