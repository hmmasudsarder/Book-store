import { useEffect, useState } from 'react';
import { FaAddressBook, FaBookReader, FaHome, FaUsers, FaBars } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdPublish } from "react-icons/md";
import { useSelector } from 'react-redux';
import { FaBagShopping } from 'react-icons/fa6';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';

const Dashboard = () => {

    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useSelector(selectCurrentUser);
    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        if (isAdmin) {
            navigate('/dashboard/adminHome');
        } else {
            navigate('/dashboard/userHome');
        }
    }, [isAdmin, navigate]);

    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className={`absolute  md:relative z-10 max-w-52 min-h-screen bg-blue-500 text-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <button className='md:hidden p-4' onClick={() => setIsSidebarOpen(false)}>
                    ✖
                </button>
                <ul className="menu p-8 mt-10">
                    {isAdmin ? (
                        <>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-white focus:!text-white">
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-white focus:!text-white">
                                <NavLink to="/dashboard/allUser">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/getAllProductByAdmin">
                                    <FaBookReader /> All Products
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/addProduct">
                                    <MdPublish /> Add Product
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/adminProfile">
                                    <FaAddressBook /> Admin Profile
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/adminOrderDeltas">
                                    <FaBagShopping /> Order Deltas
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/userHome">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/dashboard/profile">
                                    <FaAddressBook /> My Profile
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-between gap-4 font-bold hover:text-black focus:!text-black">
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>

            </div>

            {/* Content Area */}
            <div className='flex-1 p-4 md:p-8'>
                <button className='md:hidden p-2' onClick={() => setIsSidebarOpen(true)}>
                    <FaBars size={24} />
                </button>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
