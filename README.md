# FitFusion

## 📌 Overview
**FitFusion** is a full-stack fitness web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It is designed to help users manage their fitness journey with features like customized workout plans, diet recommendations, a BMI calculator, and separate cardio and strength training routines.

## 🚀 Features
- 🏋️ **Strength & Cardio Workouts** - Dedicated sections for both cardio and strength training exercises.
- 📅 **Workout Plans** - Customizable fitness plans tailored to user needs.
- 🥗 **Diet Plans** - Nutritional guidance to complement fitness routines.
- 📊 **BMI Calculator** - Helps users track their fitness progress.
- 🔐 **Authentication & Authorization** - Secure login/signup using JWT.
- 📈 **Progress Tracking** - Logs and monitors workout history.

## 🛠 Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **State Management:** Redux

## 🏗️ Installation & Setup
Follow these steps to set up the project locally:

### 🔧 Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (Local or Atlas instance)
- **npm** or **yarn**

### 📥 Clone the Repository
```sh
git clone https://github.com/Ashu-1586/fitfusion
cd FitFusion
```

### 🔨 Install Dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 🏃‍♂️ Run the Application
#### Backend
```sh
cd server
npm start
```
#### Frontend
```sh
cd client
npm start
```

## 🛠️ Environment Variables
Create a `.env` file in the `server` directory and configure the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 🖥️ Deployment
To deploy the app, use:
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Heroku

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository, open an issue, or submit a pull request.

**Stay Fit, Stay Healthy with FitFusion!**
