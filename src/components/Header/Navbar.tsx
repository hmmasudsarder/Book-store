import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaSearch, FaShoppingCart, FaTruck, FaUser, } from "react-icons/fa";
import { MdFileCopy } from "react-icons/md";
import logo from "../../assets/logo.png"; // Replace with your logo path
import ToastSuccess from "../ui/ToastSuccess"; // Replace with your toast component if needed
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);



  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());

    // Show toast notification
    toast.success('Logout successful!');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleMegaMenu = (state: boolean) => setIsMegaMenuOpen(state);

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
          <div className="relative">
            {/* User Icon */}
            <FaUser
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">

                <div className="">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  {user ? <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    LogOut
                  </button> : <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </Link>}

                </div>

              </div>
            )}
          </div>
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex justify-center bg-blue-500 text-white space-x-6" >
        {/* <a
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
        </a> */}
        <Link
          to="/"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
          onMouseLeave={() => toggleMegaMenu(false)}>
          Home
        </Link>
        <Link
          to="/allProduct"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
          onMouseLeave={() => toggleMegaMenu(false)}>
          All Products
        </Link>
        <Link
          to="/aboutUs"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
          onMouseLeave={() => toggleMegaMenu(false)}>
          About US
        </Link>
        <div className="relative" onMouseEnter={() => toggleMegaMenu(true)} >
          <button className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl">Categories</button>
          {isMegaMenuOpen && (
            <div className="absolute -left-96 mt-2 w-[800px] bg-white shadow-lg p-4 border border-gray-300 z-20"  onMouseLeave={() => toggleMegaMenu(false)}>
              <div className="grid grid-cols-3 gap-6 text-black">
                <div>
                  <h3 className="font-bold mb-2">শ্রেণি</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-secondary"><Link to="/">ষষ্ঠ শ্রেণি</Link></li>
                    <li className="hover:text-secondary"><Link to="/">সপ্তম শ্রেণি</Link></li>
                    <li className="hover:text-secondary"><Link to="/">অষ্টম শ্রেণি</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">নবম ও দশম</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-secondary"><Link to="/">জীববিজ্ঞান পাঠ সহায়িকা</Link></li>
                    <li className="hover:text-secondary"><Link to="/">রসায়ন পাঠ সহায়িকা</Link></li>
                    <li className="hover:text-secondary"><Link to="/">গণিত পাঠ সহায়িকা</Link></li>
                    <li className="hover:text-secondary"><Link to="/">ইংরেজি পাঠ সহায়িকা</Link></li>
                    <li className="hover:text-secondary"><Link to="/">উচ্চতর গণিত পাঠ সহায়িকা</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">এইচএসসি</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-secondary"><Link to="/">উচ্চতর গণিত</Link></li>
                    <li className="hover:text-secondary"><Link to="/">জীববিজ্ঞান পাঠ</Link> সহায়িকা</li>
                    <li className="hover:text-secondary"><Link to="/">পদার্থবিজ্ঞান পাঠ</Link> সহায়িকা</li>
                    <li className="hover:text-secondary"><Link to="/">রসায়ন পাঠ</Link> সহায়িকা</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/blogs"
          className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl focus:!bg-blue-600"
          onMouseLeave={() => toggleMegaMenu(false)}>
          Blogs
        </Link>
      </nav>

      {/* Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-10 left-0 h-full bg-white shadow-lg z-50 transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
          {/* <a
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
          </a> */}
          <Link
            to="/"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/allProduct"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            All Products
          </Link>
          <Link
            to="/aboutUs"
            className="text-black hover:text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold"
          >
            About US
          </Link>
          {/* <a
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
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
