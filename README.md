#  📚 Book Store – Mini E-Commerce SPA

## 📌 Project Overview
A responsive and modern Single Page Application (SPA) for buying and selling books online. This project was built as part of a frontend developer assessment task, featuring product listing, cart management, checkout, and role-based dashboards. No authentication is required for core shopping features.

🔗 Live Links
🚀 Frontend: https://ts-book-store.vercel.app/

🚀 Backend API: https://github.com/hmmasudsarder/Book-Shop-Server

🛠 GitHub Repository: GitHub Repo https://github.com/hmmasudsarder/Book-store


🧪 Assessment Objective
This app satisfies the following key requirements:

✅ SPA with React.js and TypeScript

✅ Product listing with “Add to Cart” functionality

✅ Product detail pages

✅ Slide-in/out cart sidebar

✅ Checkout modal with form

✅ Responsive UI with clean card layout

✅ Version control with Git (hosted on GitHub)

✅ Deployed on Vercel



## 🛠️ Technologies Used
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit
- **Deployment:** Vercel (Backend), (front)



#### 🏠📄 Application Pages
####  🏠 Home Page
Lists at least 6 products (books)

Each product shows: image, title, price, and "Add to Cart" button

Products are clickable to view details

📘 Product Detail Page
Shows full product info: image, title, description, price, etc.

Includes "Add to Cart" button

🛒 Cart Sidebar
Slide-in/out sidebar

Quantity controls (+ / -)

Displays total amount

"Checkout" button

💳 Checkout Modal
Triggered by "Checkout" in the cart

Includes form fields:

Name

Email

Address

Submits mock order (no real API used for order placement)


#### 📦 Product Details Page
- Displays **product image and full details** 🏷️
- **"Buy Now" button** redirects to checkout page



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

⚙️ Getting Started
📦 Backend Setup
bash
Copy code
# Clone the repository
git clone https://github.com/your-username/book-store.git
cd book-store/backend

# Install dependencies
npm install

# Set up environment variables
touch .env
# Add the following
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_api_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret

# Start the backend server
npm run dev
🌐 Frontend Setup
bash
Copy code
cd ../frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev

📦 Add-to-cart and cart sidebar experience

🧾 Checkout modal with validation




🎯 Future Enhancements
Wishlist functionality

Product reviews and ratings

Email notifications

Order tracking system

👨‍💻 Developed By
Masud Sarder
📫✨ Frontend Developer | React & Next.js

## ✨ Developed By
🚀 **Masud Sarder**  

