import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import delevary from "../../assets/bg/delevary1.png";
import delevary1 from "../../assets/bg/delevary2.png";
const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-start px-4">
        {/* Left Section - Logo & Contact */}
        <div className="flex flex-col md:flex-row lg:gap-36 md:gap-8 w-full justify-center">
          <div className="mx-auto md:mx-0 my-5 text-center md:text-left">
            <div className="ml-7 -mt-[18px]">
              <img src={logo} alt="Shera Jhuri" className="w-24 mx-auto md:mx-0" />
              <h2 className="font-bold text-lg">
                Book <span className="text-blue-500">Shop</span>
              </h2>
              <p className="text-gray-600 text-base">Uttar Badda, Dhaka</p>
              <p className="text-gray-600 text-base">018360496492</p>
              <p className="text-gray-600 text-base">
                hmmasudsarder1@gmail.com
              </p>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="flex lg:space-x-32 space-x-12">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-md mb-2">USEFUL LINK</h3>
              <ul className="text-gray-600 text-base space-y-1">
                <li>
                  <a href="#">Refund & Return Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-md mb-2 ">CUSTOMER LINK</h3>
              <ul className="text-gray-600 text-base space-y-1">
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Forgot Password?</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media & Partners */}
          <div className="w-1/4 lg:-mr-12 mx-auto md:mx-0 text-center md:text-left my-8 lg:my-0">
            <h3 className="font-bold text-md mb-2 text-center md:text-left">FOLLOW US</h3>
            <div className="flex space-x-2 mb-4 mx-auto md:mx-0 text-center md:text-left">
              <a href="#" className="bg-blue-500 p-2 rounded text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded text-white">
                <FaGoogle />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded text-white">
                <FaLinkedinIn />
              </a>
            </div>

            <h3 className="font-bold text-md mb-2 mx-auto md:mx-0 text-center md:text-start">DELIVERY PARTNER</h3>
            <div className="flex items-center gap-3">
              <img src={delevary} alt="SteadFast" className=" h-12" />
              <img src={delevary1} alt="Pathao" className="w-2/6 h-20" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
