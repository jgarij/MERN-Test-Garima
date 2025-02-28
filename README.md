Mern-Stack-Garima
Task 1.1 – Multiple Choice (5 mins)

Question:
Which React hook is used to manage component state?

Options:

a) useEffect

b) useState ✅

c) useContext

d) useReducer

Answer: The correct answer is useState.


Task 1.2 – Problem Solving (10 mins)

Scenario:
You need to fetch data from https://api.example.com/users and display it in a list.

Solution:

To solve this, I created a component named Task1 inside the frontend/src/components folder.

Component Structure:

Used useState to manage state for storing fetched data, loading status, and error handling.

Used useEffect to trigger data fetching when the component mounts.

Implemented loading and error handling to ensure smooth user expereience.
Hooks Used:

useState – To manage the state of user data, loading state, and errors.

useEffect – To fetch data when the component mounts.

Task 1.3 – Coding (15 mins)
Solution:

To implement this, I created a component named Counter inside the frontend/src/components folder.


Task 2.1 -– Multiple Choice 
Question:
What does app.use(express.json()) do in Express?
a) Parses HTML forms
b) Parses JSON request bodies
c) Serves static files
d) Handles cookies
The correct answer is:

b) Parses JSON request bodies


Task 2.2

API Design - Delete User by ID

Scenario

This document outlines the REST API endpoint to delete a user by their unique ID.

Endpoint Details
HTTP Method: DELETE
Route Structure: /api/users/{id}
Request

Task 2.3
For this, I have created server on port 4000 which can be seen in server.js file


Task 3.1
Question:
In MongoDB, what is a document?
a) A table
b) A row in a table
c) A JSON-like data structure
d) A schema validator
Correct answer  c) A JSON-like data structure


Task 3.2 Schema Design
For this i  have backend/models/Blogpost.js

Section 4 Full Stack Integration
I have components TodoList,Todoform for frontend
Db- mongodb connection
Backend Routes is created



Steps to run project
 1.git clone https://github.com/jgarij/MERN-Test-Garima.git
 
2.cd MERN-Test-Garima

You shooul use two terminals one for frontend  and one for backend
<!-- For backend -->
3.cd backend
4.npm i
5.nodemon backend/server.js
<!-- For frontend -->
6.cd frontend
7.npm run dev

