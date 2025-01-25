import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaTruck,
} from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import ToastSuccess from "../ui/ToastSuccess";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("OFFER10");
    ToastSuccess({ children: "Coupon code copied!" });
    
  };

  return (
    <header className="bg-blue-500 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-800">
        <div className="mx-auto flex items-center space-x-2">
          <p>
            Get 10 Tk Discount use the coupon code {""}
            <strong className="underline">OFFER10</strong>
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="text-gray-600 flex items-center space-x-1"
            >
              <IoMdCopy />
            </button>
            {/* {copied && <span className="text-green-500 text-sm">Copied!</span>} */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4 ">
          <HiOutlineMenu
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="h-10 justify-end"
          />
        </div>

        {/* Search Bar */}
        <div className="lg:flex flex-grow max-w-lg items-center bg-white rounded-full overflow-hidden px-4 hidden">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full px-2 py-1 focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <FaTruck className="text-2xl cursor-pointer" />
          <FaUser className="text-2xl cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } bg-blue-500 text-white lg:flex lg:justify-center lg:space-x-6 lg:items-center lg:relative mx-auto container`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700 rounded-xl">Fresh Vegetables</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Fresh Fruits</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Eggs & Dairy Products</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Spices & Herbs</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Rice & Lentils</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700"><p>Dry Fish</p></li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Tea & Beverages</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">Sweets</li>
          <li className="flex items-center justify-center py-2 px-4 hover:bg-blue-700">
            Puffed Rice & Grain Product
          </li>
          <li className="py-2 px-4 hover:bg-blue-700">Honey</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
