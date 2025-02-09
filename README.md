
# E-commerce Website Admin Dashboard

This is a **React + TypeScript** e-commerce web application that allows users to browse products, manage their cart, and perform **admin CRUD operations** for product management. The project implements **state management, RESTful API integration, authentication, and analytics** using modern React best practices.


## Features

- **Landing Page**
- **Product Management**
- **Cart Integration**
- **Admin Authentication**
- **Admin Dashboard**


## Tech Stack

- **Frontend:** React (TypeScript), TailwindCSS  
- **State Management:** Zustand  
- **Backend:** Node.js, Express.js, MongoDB (Deployed on Render)  
- **Image Uploads:** Cloudinary  
- **Deployment:** Netlify (Frontend), Render (Backend)  

## Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/phiona-b3/Ecommerce_Website
cd Ecommerce_Website

## Run to install dependencies
npm install

## Environment Variables
Create a .env file in the root directory and add:

VITE_FIREBASE_API_KEY=AIzaSyAZVJQ_1aaZBap2K2vAHM4lkYU_hM33hBc
VITE_FIREBASE_AUTH_DOMAIN=ecommerce-website-dashboard.firebaseapp.com
VITE_FIREBASE_PROJECT_1D=ecommerce-website-dashboard
VITE_FIREBASE_STORAGE_BUCKET=ecommerce-website-dashboard.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1015081360188
VITE_FIREBASE_APP_ID=1:1015081360188:web:4ff5b51fd40db8d7711c39
VITE_FIREBASE_MEASUREMENT_ID=G-01BF3FEXZF
VITE_API_URL=https://ecommerce-backend-l061.onrender.com/api/products
VITE_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/djfyejzhz/image/upload
VITE_CLOUDINARY_UPLOAD_PRESET=products_images

##Run the Development Server
npm run dev


## Contact
- Email: phionadev@gmail.com
- GitHub: https://github.com/phiona-b3

## Important Links
- GitHub Repository: https://github.com/phiona-b3/Ecommerce_Website
- Live Frontend: https://p-ecommerce-dashboard.netlify.app/
- Live Backend: https://ecommerce-backend-l061.onrender.com/api/products