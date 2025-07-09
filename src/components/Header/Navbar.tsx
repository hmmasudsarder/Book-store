import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Apple", price: 1.99, quantity: 2 },
    { id: 2, name: "Banana", price: 0.99, quantity: 3 },
  ]; // Replace with Redux state or props

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const increaseQty = (id: number) => {
    console.log(`Increase quantity for item ${id}`);
    // dispatch logic here
  };

  const decreaseQty = (id: number) => {
    console.log(`Decrease quantity for item ${id}`);
    // dispatch logic here
  };
  

  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <header className="bg-blue-500 text-white fixed top-0 left-0 right-0 z-50">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 py-4 container mx-auto">
          {/* Mobile Hamburger Menu */}
          <button onClick={toggleSidebar} className="text-2xl lg:hidden">
            {sidebarOpen ? <HiX /> : <HiOutlineMenu />}
          </button>

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
          </Link>

          {/* Search Bar (Desktop Only) */}
          <div className="hidden lg:flex flex-grow max-w-lg items-center bg-white rounded-full px-6">
            <button>
              <FaSearch className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Search Product..."
              className="w-full px-3 py-[10px] focus:outline-none text-black"
            />
          </div>

          {/* Icons (Desktop Only) */}
          <div onClick={toggleCart} className="hidden lg:flex items-center space-x-4 my-2 cursor-pointer">
            <div className="relative">
              <FaShoppingCart
                className="text-2xl cursor-pointer"
                onClick={toggleCart}
              />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex justify-center bg-blue-500 text-white space-x-6">
          <Link
            to="/"
            className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
            onClick={toggleCart}
          >
            Cards
          </Link>
        </nav>

        {/* Sidebar (Mobile Navigation) */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden w-64 overflow-y-auto`}
        >
          <div className="flex justify-between items-center bg-blue-500 text-white p-6">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            </div>
            <button onClick={toggleSidebar}>
              <HiX className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
              onClick={toggleCart}
            >
              Cards
            </Link>
          </nav>
        </div>
      </header>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={toggleCart}>
            <HiX className="text-2xl" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-180px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold">${totalAmount}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
