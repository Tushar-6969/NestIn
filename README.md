# 🏡 NestIn

### An Airbnb-Inspired Home Listing Platform

🔗 **Live Demo:** [https://nestin-lftl.onrender.com/signup](https://nestin-lftl.onrender.com/signup)

---

## 📌 Project Overview

NestIn is a full-stack web application inspired by Airbnb that allows users to list, explore, and search rental homes. Users can upload images of their properties, set prices, leave comments, and browse available homes with location-based support.

This project demonstrates real-world backend development using Node.js, Express, MongoDB, authentication, cloud-based image storage, and RESTful design.

---

## 🚀 Key Features

• User Authentication (Signup / Login / Logout)
• Home Listings CRUD Operations
• Image Upload using Cloudinary
• Comment & Review System
• Price Management for Listings
• Search Homes by Location
• Map Integration (Mapbox)
• Server-side Validation using Joi
• Flash Messages & Sessions
• RESTful Routing

---

## 🛠️ Tech Stack

### Backend

• Node.js (v22.13.1)
• Express.js
• MongoDB & Mongoose

### Frontend

• EJS
• EJS-Mate
• HTML, CSS, Bootstrap

### Authentication & Security

• Passport.js
• passport-local
• passport-local-mongoose
• express-session
• connect-mongo

### File Upload & Media

• Multer
• Cloudinary
• multer-storage-cloudinary

### Utilities

• dotenv
• method-override
• connect-flash
• cookie-parser
• Joi

---

## 📂 Project Structure

NestIn/
│
├── models/        → Mongoose Schemas
├── routes/        → Express Routes
├── controllers/   → Business Logic
├── views/         → EJS Templates
├── public/        → Static Assets
├── utils/         → Helper Functions
├── app.js         → Express Configuration
└── index.js       → Server Entry Point

---

## ⚙️ Installation & Setup

### 1. Clone Repository

git clone [https://github.com/Tushar-6969/NestIn](https://github.com/Tushar-6969/NestIn)
cd NestIn

### 2. Install Dependencies

npm install

### 3. Environment Variables

Create a `.env` file and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection
SESSION_SECRET=your_secret

### 4. Run Application

node index.js

Server runs on:
[http://localhost:3000](http://localhost:3000)

---

## 📦 Node Configuration

Node Version:
22.13.1

---

## 🌟 Application Flow

• Users register and log in securely
• Hosts can add, edit, and delete home listings
• Images are uploaded and stored on Cloudinary
• Guests can browse homes, search by location, and leave comments
• Interactive maps enhance location-based browsing

---

## 📸 Image Handling

All property images are stored and served via Cloudinary, ensuring optimized performance and scalability.

---

## 🎯 Learning Outcomes

• Full-stack web development
• Authentication & Authorization
• REST API design
• MongoDB schema design
• Cloud-based image management
• MVC architecture

---

## 👨‍💻 Author

**Tushar Rathor**
B.Tech CSE (AI & ML)
Aspiring Software Engineer

---

## 📄 License

This project is licensed under the ISC License.
