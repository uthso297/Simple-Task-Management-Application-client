import { CiMenuFries } from "react-icons/ci";
import { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Successfully Logout",
                    icon: "success",
                    draggable: true,
                });
                navigate('/');
            });
    };

    const mobileOption = () => {
        setMobileMenu(!mobileMenu);
    };

    useEffect(() => {
        setMobileMenu(false);
    }, [location]);

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
                                {
                                    user ? <> <NavLink to="/workspace" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                        <li className='text-[#9fabdc]'>Work Space</li>
                                    </NavLink></> : <Link to='/login'> <li className="text-[#9fabdc]">Work Space</li> </Link>
                                }
                                {
                                    user ? (<>
                                        <img className="w-8 h-8 rounded-full z-10 relative" src={user?.photoURL} alt="user" />
                                        <button onClick={handleLogout} className="bg-[#9fabdc] px-3 py-2 rounded-lg cursor-pointer">Logout</button></>) : (
                                        <>
                                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                                <li className='text-[#9fabdc]'>Login</li>
                                            </NavLink>
                                            <NavLink to="/register" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                                <li className='text-[#9fabdc]'>Register</li>
                                            </NavLink>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div onClick={mobileOption} className='md:hidden text-white'>
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
                            {
                                user ? <NavLink onClick={() => setMobileMenu(false)} to="/workspace" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                    <li className='text-[#9fabdc]'>Work Space</li>
                                </NavLink> :
                                    <Link to='/login'> <li className='text-[#9fabdc]'>Work Space</li> </Link>
                            }
                            {
                                user ? <>
                                    <img className="w-8 h-8 rounded-full z-10 relative" src={user?.photoURL} alt="user" />
                                    <button onClick={handleLogout} className="bg-[#9fabdc] px-3 py-2 rounded-lg cursor-pointer">Logout</button>
                                </> :
                                    <>
                                        <NavLink onClick={() => setMobileMenu(false)} to="/login" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                            <li className='text-[#9fabdc]'>Login</li>
                                        </NavLink>
                                        <NavLink onClick={() => setMobileMenu(false)} to="/register" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                                            <li className='text-[#9fabdc]'>Register</li>
                                        </NavLink>
                                    </>
                            }
                        </ul>
                    </div>
                </>
            }
        </>
    );
};

export default Navbar;
