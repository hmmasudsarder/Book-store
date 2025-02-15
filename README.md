# 🚴‍♂️ Book Store - Book Shop Application

## 📌 Project Overview
Book Store is a full-featured e-commerce application designed for buying and selling books. It includes user-friendly features, secure authentication, smooth product management, and a responsive UI for an optimal shopping experience.

## 🛠️ Technologies Used
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Payment Gateway:** SurjoPay
- **State Management:** Redux Toolkit
- **Deployment:** Vercel (Backend), (front)

## 🔑 Main Features
### 👥 User Registration & Authentication (Role-Based)
- Secure Registration & Login
  - Users register with **name, email, and password**
  - Default role: **Customer**
  - Admin role manually assigned (no Super Admin needed)
  - Passwords securely hashed 🔒
- **JWT Token Authentication**
  - Generates a secure token on login
  - Stores the token in local storage for session management
- **Logout**
  - Clears token and redirects user to login page

### 🌍 Public Routes
#### 🏠 Home Page

#### 🚴 All Products Page
- **Search & Filter**
  - Search by **author, book name, or category** 🔍
  - Filters for **price range, category, and availability**
  - Dynamic results updating in real-time
- **Product Cards**
  - Name, author, price, category
  - "View Details" button for each product

#### 📦 Product Details Page
- Displays **product image and full details** 🏷️
- **"Buy Now" button** redirects to checkout page

#### ℹ️ About Page
- Information about Book shop, mission, and other details

### 🔒 Private Routes
#### 💳 Checkout Page
- Users can place orders with a **secure checkout process**
- Ensures **stock availability** before confirming orders
- **Order Form**
  - Product details
  - User details
  - Total price calculation
  - Payment method selection
- **Payment Integration**
  - Implemented **SurjoPay** as the payment gateway ✅
  - "Order Now" button to confirm purchase

#### 📊 Dashboard (Role-Based Access)
- **Admin Dashboard** 🛠️
  - Manage Users (e.g., Deactivate Accounts)
  - Manage Products (**CRUD**)
  - Manage Orders (**CRUD**)
- **User Dashboard** 👤
  - View Orders
  - Manage Profile Settings


## 🚀 Installation & Setup
### 💻 Backend Setup
```sh
# Clone the repository

# Install dependencies
npm install

# Set up environment variables (.env)
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_api_key
JWT_REFRESH_SECRET=your_jwt_secret

# Start the backend server
npm run dev
```

### 🌐 Frontend Setup
```sh
cd ../frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev
```

## 🎯 Future Enhancements
- 📦 Implement Wishlist & Cart functionality
- 🌟 Add user reviews & ratings for products
- 📅 Order tracking system
- 📢 Email notifications for order updates


## 🎯 Live Project Front End Link : https://book-shop-theta-bay.vercel.app/
## 🎯 Live Project back End Link : https://book-shop-server-kohl.vercel.app/api/products

## ✨ Developed By
🚀 **Masud Sarder**  

