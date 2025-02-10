
# E-commerce Website Admin Dashboard

This is a **React + TypeScript** e-commerce web application that allows users to browse products, manage their cart, and allow the admin to perform **admin CRUD operations** for product management. The project implements **state management, RESTful API integration, authentication, and analytics** using modern React best practices.


## Features

- **Landing Page**
  ![Screenshot 2025-02-09 223759](https://github.com/user-attachments/assets/dc01c6f1-99c8-4409-8c6c-dcae3cb4e79e)
  ![Screenshot 2025-02-09 225038](https://github.com/user-attachments/assets/a4e2d714-798c-45bd-9d71-a7351b7b5dfd)
  ![Screenshot 2025-02-09 225105](https://github.com/user-attachments/assets/af1aba39-3568-4af5-a6ad-d66b69d6d812)
  ![Screenshot 2025-02-09 225120](https://github.com/user-attachments/assets/dfb83489-95a9-45fd-a562-287bacc3743e)
  
- **ProductsPage**
  <img width="1261" alt="image" src="https://github.com/user-attachments/assets/5ee999c9-568b-49a3-ba29-b58043f6e6e4" />
  
- **ProductsDetailPage**
  <img width="1267" alt="image" src="https://github.com/user-attachments/assets/1a5a70f3-0961-4dee-870f-79ab1bc049cb" />
  
- **Cart Integration**
  <img width="1273" alt="image" src="https://github.com/user-attachments/assets/a6cebb3f-d00d-4c1d-a984-6885e9916563" />
  
- **Admin Authentication**
  <img width="1271" alt="image" src="https://github.com/user-attachments/assets/011572cb-e920-48df-bd9c-b6660fad270f" />
  
- **Admin Dashboard**
  <img width="1263" alt="image" src="https://github.com/user-attachments/assets/67b75731-faff-48e3-95bf-fbbcb83feb5e" />
  
- **Product Management**
  <img width="1247" alt="image" src="https://github.com/user-attachments/assets/3fe558b5-f56b-4092-99d7-f2e09d281d89" />



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
```

## Environment Variables
Create a .env file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
VITE_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
VITE_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
VITE_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
VITE_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_MEASUREMENT_ID>

VITE_API_URL=<YOUR_BACKEND_URL>
VITE_CLOUDINARY_URL=<YOUR_CLOUDINARY_URL>
VITE_CLOUDINARY_UPLOAD_PRESET=<YOUR_UPLOAD_PRESET>

##Run the Development Server
npm run dev

## Logging to Admin dashboard use
email: example@gmail.com
password: 123456
```

## Contact
- Email: phionadev@gmail.com
- GitHub: https://github.com/phiona-b3

## Important Links
- GitHub Repository: https://github.com/phiona-b3/Ecommerce_Website
- Live Frontend: https://p-ecommerce-dashboard.netlify.app/
- Live Backend: https://ecommerce-backend-l061.onrender.com/api/products
