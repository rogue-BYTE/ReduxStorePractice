# Redux Implementation with Thunk Middleware

This repository demonstrates a basic implementation of Redux with Redux Thunk middleware for handling asynchronous operations in a React application.

## 🚀 Features
- State management using Redux
- Asynchronous API calls with Redux Thunk
- Multiple reducers combined in a single store
- Basic counter and user data fetching functionalities

---

## 🛠️ Installation

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/redux-thunk-example.git
cd redux-thunk-example
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the Development Server**
```bash
npm start
```

---

## 📂 Project Structure

```
redux-thunk-example/
├── src/
│   ├── store/
│   │   ├── actions/
│   │   │   ├── counter.actions.js
│   │   │   └── user.actions.js
│   │   ├── reducers/
│   │   │   ├── counter.reducer.js
│   │   │   └── user.reducer.js
│   │   └── store.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🧩 Usage

### Counter Functionality
- Increment or decrement the counter by clicking the respective buttons.

### User Data Fetching
- When the count is greater than 0, it fetches user with the id as count


## ✅ Dependencies
- React
- Redux
- React-Redux
- Redux-Thunk

---

## 🧑‍💻 Author
- Vedant Anand

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute, raise issues, or suggest improvements!

Happy Coding! 🚀

