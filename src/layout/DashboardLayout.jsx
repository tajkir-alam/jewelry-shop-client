import React, { useContext, useState } from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const DashboardLayout = () => {
    const [drawer, setDrawer] = useState(true);
    const { user, logOut, loader, setLoader } = useContext(AuthContext);

    const handleDrawer = () => {
        setDrawer(!drawer);
    }

    const signOut = () => {
        setLoader(true)
        setTimeout(logOut, 1000)
    }

    return (
        <div className={`drawer ${drawer && 'lg:drawer-open'} dark:bg-slate-800 max-w-[1536px] mx-auto`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex items-center py-2 pl-1 pr-5 shadow dark:shadow-white/50">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button" onClick={handleDrawer}>
                        <FaBars className='text-2xl text-black/70 dark:text-slate-300' />
                    </label>
                    <h2 className='text-2xl flex-1 text-center'>
                        Welcome To The Dashboard
                    </h2>

                    {user &&
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <div className="group">
                                        <img src={user.photoURL} />
                                        <p className='opacity-0 group-hover:opacity-100 absolute text-2xl text-error font-semibold z-30 duration-300'>{user.displayName}</p>
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><a>Settings</a></li>
                                <li><button onClick={signOut}>Logout</button></li>
                            </ul>
                        </div>
                    }
                </div>
                <div className='px-5 my-3'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-slate-900 text-white text-lg tracking-widest gap-4 ">
                    {/* Sidebar content here */}
                    <h2 className='text-4xl text-center font-semibold mt-5 mb-12'>
                        <span className="text-orange-300">
                            The</span> Jewelry <span className="text-sky-300">Army
                        </span>
                    </h2>

                    {/* Task list and particular route */}
                    <li>
                        <NavLink to='/dashboard' className={({isActive}) => isActive ? 'text-yellow-300 flex gap-3 items-center text-xl font-medium hover:text-white hover:bg-slate-800' : 'flex gap-3 items-center text-xl font-medium hover:text-white hover:bg-slate-800'}>
                            <FaCartPlus />
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/purchase-items' className={({isActive}) => isActive ? 'text-yellow-300 flex gap-3 items-center text-xl font-medium hover:text-white hover:bg-slate-800' : 'flex gap-3 items-center text-xl font-medium hover:text-white hover:bg-slate-800'}>
                            <FaCartPlus />
                            Purchase History
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;