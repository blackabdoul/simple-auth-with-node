# Secrets Project 🔐

_A simple authentication-based Node.js & Express application_

## 📌 Overview

This project is a beginner-friendly backend application built with **Node.js** and **Express.js** to understand how basic authentication logic works on the server side.

Users are asked to enter a password.  
If the password is correct, they gain access to a protected **Secrets** page.  
If not, they are redirected back to the login page.

This project focuses on **server-side logic**, not frontend security.

## 🧠 What I Learned

- Handling **POST requests** using Express
- Parsing form data with **body-parser**
- Serving static HTML files
- Implementing basic conditional logic on the server
- Understanding the request–response lifecycle
- Using **nodemon** for faster development

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **body-parser**
- **HTML**
- **nodemon**

## ⚙️ How It Works

1. The server serves a login page (`index.html`)
2. The user enters a password in a form
3. The form sends a **POST request** to `/check`
4. The server compares the entered password with a predefined value
5. If correct → user is redirected to `secret.html`
6. If incorrect → user is redirected back to the login page

> ⚠️ This project does **not** use encryption or databases.  
> It is strictly for learning backend fundamentals.

## 📂 Project Structure

3.5 Secrets Project/  
│  
├── public/  
│ ├── index.html  
│ └── secret.html  
│  
├── index.js  
├── package.json  
├── package-lock.json  
└── node_modules/

## ▶️ How to Run the Project

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the server:
   nodemon index.js
4. Open your browser and visit:
   http://localhost:4000
5. 🧪 Sample Password Logic
   const pw = "iLoveProgramming";
   Only this password grants access to the secrets page.

## 📸 Screenshots

Codebase (Express Server)
![Server Code](./screenshots/Screenshot%202025-12-15%20082804.png)

Login Page
![Server Code](./screenshots/Screenshot%202025-12-15%20082733.png)

Secrets Page
![Server Code](./screenshots/Screenshot%202025-12-15%20082748.png)

## 🚀 Next Improvements

Hash passwords using bcrypt

Store users in a database

Implement sessions & cookies

Build a proper authentication system

## ⭐️ Support

If you find this useful:

Star the repository ⭐

Fork it 🍴

Or use it to practice on your own
