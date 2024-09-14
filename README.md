# To-Do List Application

This is a RESTful API for a To-Do List application built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login)
- Create, read, update, and delete tasks
- Mark tasks as completed

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/me-kirtangajjar/Task-Management-Project
   cd Task-Management-Project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   DB_URI = mongodb://localhost:27017/todo-list
   JWT_KEY = your_secret_key
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### User Routes

- POST /api/users/register - Register a new user
- POST /api/users/login - Login user

### Task Routes

- POST /api/tasks - Create a new task
- GET /api/tasks - Get all tasks for the logged-in user
- PATCH /api/tasks/:taskId/status - Update task status
- PUT /api/tasks/:taskId - Update task details
- DELETE /api/tasks/:taskId - Delete a task