
## 💬 Mini WhatsApp Chat App

A simple chat web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** where users can send, view, edit, and delete chat messages.
This project demonstrates CRUD operations and dynamic rendering using the MVC architecture.

---

### 🚀 Features

* 📨 Create new chats between users
* 👀 View all chats in a list
* ✏️ Edit existing chat messages
* ❌ Delete unwanted messages
* 📅 Stores chat date and time automatically
* 🎨 Uses EJS templates for dynamic pages

---

### 🧩 Tech Stack

* **Frontend:** EJS, HTML, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Templating Engine:** EJS
* **Middleware:** Method-Override (for PUT & DELETE support)

---

### 📁 Folder Structure

```
Mini-Whatsapp/
│
├── models/
│   └── chat.js          # Mongoose schema/model
│
├── views/
│   ├── index.ejs        # Display all chats
│   ├── new.ejs          # Form to add new chat
│   └── edit.ejs         # Edit existing chat
│
├── public/
│   └── style.css        # Stylesheet
│
├── app.js               # Main Express server file
├── package.json
└── README.md
```

---

### ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mini-whatsapp.git
   cd mini-whatsapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start MongoDB locally**
   Ensure MongoDB is running on your system:

   ```bash
   mongod
   ```

4. **Run the application**

   ```bash
   node app.js
   ```

5. **Open in browser**

   ```
   http://localhost:8080/chats
   ```

---

### 🧠 How It Works

* **GET /chats** → Fetches and displays all chat messages
* **GET /chat/new** → Renders form to create a new chat
* **POST /chats** → Creates and saves a new chat in MongoDB
* **GET /chats/:id/edit** → Renders form to edit a message
* **PUT /chats/:id** → Updates an existing message
* **DELETE /chats/:id** → Deletes a chat from the database

---

### 🛠️ Dependencies

```json
"dependencies": {
  "express": "^4.x",
  "ejs": "^3.x",
  "mongoose": "^8.x",
  "method-override": "^3.x",
  "path": "^0.12.x"
}
```

---

### 🧾 License

This project is for learning purposes. Feel free to use or modify it.

---

