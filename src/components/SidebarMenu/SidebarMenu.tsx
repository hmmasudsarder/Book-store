
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GoDot } from "react-icons/go";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { menuData } from "./Menu";

// interface SidebarMenuProps {
//     isMenuOpen: boolean;
//     setIsMenuOpen: (isOpen: boolean) => void;
//     isdesktopSidebarOpen: boolean;
// }

// In SidebarMenu.tsx
interface SidebarMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    isdesktopSidebarOpen: boolean;
    setIsdesktopSidebarOpen: (isOpen: boolean) => void;
}

interface ProfileLink {
    name: string;
    path: string;
    icon: React.ComponentType;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    isMenuOpen,
    setIsMenuOpen,
    isdesktopSidebarOpen
}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedMenu, setExpandedMenu] = useState<number | null>(null);
    const [activeMainItem, setActiveMainItem] = useState<number | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<number | null>(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef(null);

    useEffect(() => {
        // Set the active menu item based on the current path
        menuData.menu.forEach((item, index) => {
            if (item.path === location.pathname) {
                setActiveMainItem(index);
                setExpandedMenu(index);
                setActiveSubItem(null);
            } else if ((item.subItems ?? []).length > 0) {
                item.subItems?.forEach((subItem, subIndex) => {
                    if (subItem.path === location.pathname) {
                        setActiveMainItem(index);
                        setExpandedMenu(index);
                        setActiveSubItem(subIndex);
                    }
                });
            }
        });
    }, [location.pathname]);

    const handleMainItemClick = (index: number, path: string) => {
        if ((menuData.menu[index].subItems?.length ?? 0) === 0) {
            setIsMenuOpen(false); // Close sidebar if no sub-items
            navigate(path); // Navigate to the clicked menu item
        } else {
            // Check if we're collapsing the expanded menu
            const isCollapsing = expandedMenu === index;
            // Toggle the expansion of the menu
            setExpandedMenu((prev) => (prev === index ? null : index));
            setActiveMainItem(index);
            setActiveSubItem(null);
            // Only navigate if we're expanding the menu, not collapsing
            if (!isCollapsing) {
                // Navigate to the main item path if it exists, or the first sub-item
                if (path) {
                    navigate(path);
                } else if (menuData.menu[index]?.subItems && menuData.menu[index].subItems.length > 0) {
                    if (menuData.menu[index].subItems?.[0]?.path) {
                        navigate(menuData.menu[index].subItems[0].path);
                    }
                }
            }
        }
    };

    const handleSubItemClick = (
        mainIndex: number,
        subIndex: number,
        e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
    ) => {
        e.stopPropagation(); // Prevent event propagation to avoid closing the sidebar
        setActiveMainItem(mainIndex);
        setActiveSubItem(subIndex);
        setIsMenuOpen(false);
    };

    const handleProfileClick = () => {
        setIsPopoverOpen((prev) => !prev);
    };

    const handleProfileLinkClick = (path: string) => {
        setIsMenuOpen(false); // Close sidebar
        setIsPopoverOpen(false); // Close profile popover
        navigate(path); // Navigate to the profile page
    };

    const sidebarVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const menuVariants = {
        initial: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.3,
                delay: 0.2,
            },
        },
        animate: {
            opacity: 1,
            x: 0,
            height: "auto",
            transition: {
                duration: 0.3,
                delay: 0.2,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            x: -20,
            transition: {
                duration: 0.3,
            },
        },
    };

    const submenuVariants = {
        initial: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.3,
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            height: "auto",
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
            },
        },
    };

    const profilePopoverVariants = {
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

    return (
        <>
            {/* Desktop version sidebar */}
            <AnimatePresence>
                {isdesktopSidebarOpen && (
                    <motion.div
                        className="hidden lg:flex flex-col min-h-screen  bg-primary text-white font-poppins  text-[16px]  font-light sticky top-0 z-50 p-4 min-w-[250px] "
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sidebarVariants}
                    >
                        <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={menuVariants}
                                className="flex flex-col gap-5"
                            >
                                {menuData.menu.map((item, index) => (
                                    <div key={index}>
                                        <div
                                            onClick={() => handleMainItemClick(index, item.path)}
                                            className={`flex items-center gap-[10px] !text-[16px]  font-light cursor-pointer hover:text-secondary  transition-all duration-300  font-poppins ${activeMainItem === index
                                                ? "text-secondary  text-[18px] "
                                                : ""
                                                }`}
                                        >
                                            <span>{<item.icon />}</span>
                                            {item.name}
                                            {(item.subItems?.length ?? 0) > 0 && (
                                                <span>
                                                    {expandedMenu === index ? (
                                                        <MdOutlineKeyboardArrowDown className="text-[20px]  font-light" />
                                                    ) : (
                                                        <MdOutlineKeyboardArrowRight className="text-[20px]  font-light" />
                                                    )}
                                                </span>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {expandedMenu === index && (item.subItems?.length ?? 0) > 0 && (
                                                <motion.div
                                                    className="flex flex-col gap-3 pl-[22px] mt-3"
                                                    variants={submenuVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                >
                                                    {item.subItems?.map((subItem, subIndex) => (
                                                        <Link
                                                            to={subItem.path}
                                                            key={subIndex}
                                                            onClick={(e) =>
                                                                handleSubItemClick(index, subIndex, e)
                                                            }
                                                            className={`flex items-center gap-2 whitespace-nowrap rounded-md  text-[16px]  font-normal hover:text-secondary transition-all duration-500 ${activeMainItem === index &&
                                                                activeSubItem === subIndex
                                                                ? "text-secondary   "
                                                                : ""
                                                                }`}
                                                        >
                                                            <span>
                                                                <GoDot className="text-[12px]" />
                                                            </span>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile version sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed lg:hidden top-0 left-0 min-h-screen bg-primary text-white font-poppins z-50 p-4 w-[80%] max-w-[300px] "
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sidebarVariants}
                    >
                        <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={menuVariants}
                                className="flex flex-col gap-5"
                            >
                                {menuData.menu.map((item, index) => (
                                    <div key={index}>
                                        <div
                                            onClick={() => handleMainItemClick(index, item.path)}
                                            className={`flex items-center gap-[10px] !text-[16px]  font-light cursor-pointer hover:text-secondary  transition-all duration-300  font-poppins ${activeMainItem === index
                                                ? "text-secondary  text-[18px] font-semibold"
                                                : ""
                                                }`}
                                        >
                                            <span>{<item.icon />}</span>
                                            {item.name}
                                            {(item.subItems?.length ?? 0) > 0 && (
                                                <span>
                                                    {expandedMenu === index ? (
                                                        <MdOutlineKeyboardArrowDown className="text-[20px]  font-light" />
                                                    ) : (
                                                        <MdOutlineKeyboardArrowRight className="text-[20px]  font-light" />
                                                    )}
                                                </span>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {expandedMenu === index && (item.subItems?.length ?? 0) > 0 && (
                                                <motion.div
                                                    className="flex flex-col gap-3 pl-[22px] mt-3"
                                                    variants={submenuVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                >
                                                    {item.subItems?.map((subItem, subIndex) => (
                                                        <Link
                                                            to={subItem.path}
                                                            key={subIndex}
                                                            onClick={(e) =>
                                                                handleSubItemClick(index, subIndex, e)
                                                            }
                                                            className={`flex items-center gap-2  rounded-md  text-[16px]  font-normal ${activeMainItem === index &&
                                                                activeSubItem === subIndex
                                                                ? "text-secondary  font-medium"
                                                                : ""
                                                                }`}
                                                        >
                                                            <span>
                                                                <GoDot className="text-[12px]" />
                                                            </span>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Mobile Profile Icon */}
                        <div
                            className="relative mt-auto flex items-center cursor-pointer"
                            ref={popoverRef}
                        >
                            <FaRegUser
                                onClick={handleProfileClick}
                                className="text-secondary text-[20px]"
                            />
                            <AnimatePresence>
                                {isPopoverOpen && (
                                    <motion.div
                                        className="absolute bottom-[50px] left-0 w-[200px] bg-primary p-4 shadow-md rounded-md"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={profilePopoverVariants}
                                    >
                                        {menuData?.profileLinks?.map((link: ProfileLink, index: number) => (
                                            <div
                                                key={index}
                                                onClick={() => handleProfileLinkClick(link.path)}
                                                className="flex items-center gap-2 cursor-pointer hover:text-secondary transition-all duration-300"
                                            >
                                                <span>{<link.icon />}</span>
                                                {link.name}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SidebarMenu;