# UserDesk

UserDesk is a simple and responsive user interface built with **HTML**, **CSS (BEM methodology)**, and **JavaScript**. It provides basic functionality for users to sign up and log in to the UserDesk platform for profile management.

## 🖥️ Project Structure

<pre>
root/
│
├── index.html      # Login page
├── pages/
│ └── signup.html   # Sign up page
├── styles/
│ ├── index.css     # Styles for login page
│ └── signup.css    # Styles for signup page
├── scripts/
│ ├── login.js      # Handles login functionality
│ └── signup.js     # Handles signup functionality
└── README.md
</pre>

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Torroune/userdesk-frontend.git
cd app-userdesk
```

### 2. Open in Browser

You can open `index.html` or `pages/signup.html` directly in your browser using Live Server or double-click.

> ⚠️ This frontend is designed to interact with the backend API running on http://localhost:3000/api/users.

Make sure your backend server is running locally before testing the forms.

## 🧪 API Endpoints Used

| Method | Endpoint           | Description  |
| ------ | ------------------ | ------------ |
| POST   | `/api/users/login` | Login User   |
| POST   | `/api/users`       | Sign Up User |

## 📄 License

This project is licensed under the MIT license.  
See the [License](./LICENSE) file for details.
