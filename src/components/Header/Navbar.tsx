import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaSearch, FaShoppingCart, FaUser, FaTruck } from "react-icons/fa";
import { MdFileCopy } from "react-icons/md";
import logo from "../../assets/logo.png"; // Replace with your logo path
import ToastSuccess from "../ui/ToastSuccess"; // Replace with your toast component if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("OFFER10");
    ToastSuccess({ children: "Coupon code copied!" });
  };

  return (
    <header className="bg-blue-500 text-white fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-200 text-gray-800 px-4 py-2">
        <div className="mx-auto flex justify-center items-center lg:space-x-2">
          <p className="font-semibold">
            Get 10% Discount! Use the coupon code{" "}
          </p>
          <button
            onClick={handleCopy}
            className="lg:font-semibold flex items-center space-x-1 lg:text-lg"
          >
            <strong className="underline lg:font-medium">OFFER10</strong>
            <MdFileCopy 
            className="lg:text-xl" />
          </button>
        </div>
      </div>

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
        <div className="hidden lg:flex items-center space-x-4 my-2">
          <FaTruck className="text-2xl cursor-pointer" />
          <Link to="/login">
            <FaUser className="text-2xl cursor-pointer" />
          </Link>
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex justify-center bg-blue-500 text-white space-x-6">
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Fresh Vegetables
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Fresh Fruits
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Eggs & Dairy Products
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Spices & Herbs
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Rice & Lentils
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl "
        >
          Dry Fish
        </a>
        <a
          href="#"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl"
        >
          Tea & Beverages
        </a>
      </nav>

      {/* Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-10 left-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden w-64 overflow-y-auto`}
      >
        <div className="flex justify-between items-center bg-blue-500 text-white p-6">
          {/* Logo */}
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
          {/* Close Icon */}
          <button onClick={toggleSidebar}>
            <HiX className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Fresh Vegetables
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Fresh Fruits
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Eggs & Dairy Products
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Spices & Herbs
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Rice & Lentils
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Dry Fish
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Tea & Beverages
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Fresh Fruits
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Eggs & Dairy Products
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Spices & Herbs
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Rice & Lentils
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Dry Fish
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Tea & Beverages
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
