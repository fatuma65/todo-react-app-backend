# Task Management Server 

This is a restful api built with Node.js, express, and Prisma for managing tasks. This server allows users to create, read, update and delete tasks making it easy to manage and organise personal tasks.

# Features

- **User Authentication:** Able to secure endpoints so that specific only authorized users are able to perform different tasks.
- **Create Tasks:** Add new tasks with details such as title, description, the time they were created and updated.
- **Read Tasks:** Retrieve tasks of specific users from the database.
- **Update Tasks:** Users are able to modify specific tasks.
- **Delete Tasks:** Users are able to delete tasks of their choice.

# Technologies Used

- Node.js: A JavaScript RunTime environment used to build scalable applications.
- Express: A fast and flexible node.js web framework for robust features for the web.
- Prisma: An ORM for node.js that simplifies database access and managment
- Postgresql: A relational database used to store data.

# Installation

1. ** Clone the repository **
`git clone https://github.com/fatuma65/todo-react-app-backend.git`

2. Install dependencies
npm install

3. Set up environment variables
Create a `.env` file in the root directory and add your variables
```env
DATABASE_URL='your database url'
PORT=4000
```

4. Run Database Migrations 
Apply prisma migrations to set up your schema
`npx prisma migrate dev --name init`

5. Start the server
Using nodemon `npm run dev`

Using node `node index.js`

# API Endpoints

|       |     Endpoints         |           Use                         |
|-------|--------------------   |-------------------                    |
|   1   | users/create/user     | Create a new user                     |
|   2   | users/login/user      | Logs in the user                      |
|   3   | tasks/create/task     | Creates a new task                    |
|   4   | tasks/edit/task/:id   | Edits an existing task                |
|   5   | tasks/delele/task/:id | Deletes an existing task              |
|   6   | tasks/get/tasks/:id   | Retrieves a task of a specific user   |
|   7   | tasks/get/tasks       | Retrieves tasks of a specific user    |

# Usage
You can use tools like **APIDOG** or **POSTMAN** to interact with the API Endpoints.

# Contributions
Any contributions are welcome to the repository through raising pull requests.