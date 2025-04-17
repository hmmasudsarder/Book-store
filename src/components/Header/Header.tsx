import { FaBars, FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    isdesktopSidebarOpen: boolean;
    toogleDesktopSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
    isMenuOpen,
    toggleMenu,
    isdesktopSidebarOpen,
    toogleDesktopSidebar,
}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef(null);
    const navigate = useNavigate();
    // const [logout] = useLogoutMutation();

    // const handleLogout = async () => {
    //   const res = await logout();
    //   if (res?.data?.msg) {
    //     toast.success(res?.data?.msg);
    //     navigate("/login");
    //   }
    // };

    const togglePopover = () => {
        setIsPopoverOpen((prev) => !prev);
    };

    const handleProfileLinkClick = () => {
        setIsPopoverOpen(false);
        navigate("/profile");
    };

    const popoverVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.3,
            },
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    // // Custom hook to close the popover when clicking outside
    // useClickOutside(popoverRef, () => {
    //   setTimeout(() => {
    //     setIsPopoverOpen(false);
    //   }, 0);
    // });

    return (
        <div className="bg-white border-b-2 border-b-primary/10 py-4 flex items-center justify-between sticky top-0 z-50 lg:pe-8 lg:ps-8 px-3 transition-shadow duration-300">
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex">
                    {isdesktopSidebarOpen ? (
                        <FaBars
                            className="text-[17px] cursor-pointer"
                            onClick={toogleDesktopSidebar}
                        />
                    ) : (
                        <IoClose
                            className="text-[28px] cursor-pointer font-semibold"
                            onClick={toogleDesktopSidebar}
                        />
                    )}
                </div>
                {/* <Logo /> */}
            </div>
            <div className="lg:hidden flex items-center gap-4">
                {isMenuOpen ? (
                    <IoClose
                        className="text-[30px] cursor-pointer font-semibold"
                        onClick={toggleMenu}
                    />
                ) : (
                    <FaBars className="text-[24px] cursor-pointer" onClick={toggleMenu} />
                )}
            </div>
            <div className="hidden lg:flex items-center gap-4">
                <LuShoppingCart className="text-xl" />
                <IoNotificationsOutline className="text-xl" />
                <div
                    className="flex items-center gap-4 cursor-pointer relative"
                    onClick={togglePopover}
                >
                    <img
                        src="../../../public/assets/avatar.png"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full p-2 bg-primary/10"
                    />
                    <h2 className="font-poppins font-normal text-[16px] flex items-center gap-2">
                        Admin{" "}
                        <span>
                            <IoIosArrowForward className="text-[16px]" />
                        </span>
                    </h2>
                </div>
            </div>
            <AnimatePresence>
                {isPopoverOpen && (
                    <motion.div
                        ref={popoverRef}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={popoverVariants}
                        className="absolute mt-[175px] w-48 bg-white border-2 right-[35px] border-primary/10 rounded-lg shadow-lg z-10"
                    >
                        <div className="flex flex-col gap-2 p-4 font-poppins font-normal text-base">
                            <button
                                className="flex items-center gap-3"
                                onClick={handleProfileLinkClick}
                            >
                                <FaRegUser /> <span>Profile</span>
                            </button>
                            <button
                                className="flex items-center gap-3"
                            //   onClick={handleLogout}
                            >
                                <MdLogout /> <span>Logout</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;