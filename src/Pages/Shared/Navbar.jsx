import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const mobileOption = () => {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu);
    }
    return (
        <>
            {/* tab and larger */}
            <div className="p-5 bg-[#1d2025]">
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-[#9fabdc] font-bold text-xl lg:text-4xl'>TaskSphere</h1>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-6'>
                            <ul className='flex items-center gap-10'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li className='text-[#9fabdc]'>Home</li>
                                </NavLink>
                                <NavLink to="/workspace" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li className='text-[#9fabdc]'>Work Space</li>
                                </NavLink>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li className='text-[#9fabdc]'>Login</li>
                                </NavLink>
                                <NavLink to="/register" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li className='text-[#9fabdc]'>Register</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div onClick={mobileOption} className='md:hidden text-white'>
                        {/* <img className='h-10'  alt="" /> */}
                        {/* src={menu} */}
                        <CiMenuFries />
                    </div>
                </div>
            </div>

            {/* mobile */}
            {
                mobileMenu && <>
                    <div className='min-h-screen bg-[#1d2025]'>
                        <ul className='flex flex-col items-center space-y-5 p-4'>
                            <NavLink onClick={() => setMobileMenu(false)} to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li className='text-[#9fabdc]'>Home</li>
                            </NavLink>
                            <NavLink onClick={() => setMobileMenu(false)} to="/workspace" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li className='text-[#9fabdc]'>Work Space</li>
                            </NavLink>
                            <NavLink onClick={() => setMobileMenu(false)} to="/login" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li className='text-[#9fabdc]'>Login</li>
                            </NavLink>
                            <NavLink onClick={() => setMobileMenu(false)} to="/register" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                <li className='text-[#9fabdc]'>Register</li>
                            </NavLink>
                        </ul>
                    </div>

                </>
            }
        </>
    );
};

export default Navbar;