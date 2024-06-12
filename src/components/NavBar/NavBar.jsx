import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContest } from "../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';
import { RxAvatar } from "react-icons/rx";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {
    const {user, logOut} = useContext(AuthContest);

    const handleSignOut = () =>{
        logOut()
          .then(() => {
            toast.success('Logout successful!')
          })
          .catch(() => {
            toast.error('An error happened!')
        });  
    }

    const links = 
    <>
        <li><NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-orange-500' 
        : 
        'btn hover:bg-orange-100 bg-white border-0 font-bold text-blue-400'
        }
        to="/">Home</NavLink></li>
        <li><NavLink 
        className={({ isActive }) => isActive
        ? 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-orange-500' 
        : 
        'btn hover:bg-orange-100 bg-white border-0 font-bold text-blue-400'
        }
        to="/faqs">FAQs</NavLink></li>
        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-orange-500' 
        : 
        'btn hover:bg-orange-100 bg-white border-0 font-bold text-blue-400'
        }
        to="/testimonials">Testimonials</NavLink></li>
    </>

    return (
        <div className="navbar sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 font-bold ">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="p-0 font-bold normal-case sm:text-2xl lg:text-3xl">
                  <span className="text-orange-500">Industrial</span><span className="text-blue-500">Plaza</span> 
                </Link>
            </div>
            
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-1 px-1 font-bold  menu menu-horizontal border-1 ">
                    {links}
                </ul>
            </div>
            
            <div className="gap-2 navbar-end">
                {/* Login / LogOut Button */}
                {
                    user
                    ? 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user.photoURL 
                                    ?
                                    <img src={user?.photoURL} />
                                    :
                                    <div className="flex justify-center py-2 my-auto text-2xl text-orange-500"><RxAvatar/></div>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="text-white bg-orange-500 btn hover:bg-blue-500 btn-ghost">
                                    {
                                        user.displayName
                                        ?
                                        <div>
                                            <p>User Name:</p>
                                            <p>{user.displayName}</p>
                                        </div>
                                        :
                                        'User name not found'
                                    }
                                </button>
                            </li>
                            <li>
                                <button onClick={handleSignOut}  className="text-white bg-orange-500 btn btn-sm hover:bg-blue-500 btn-ghost">Logout</button>
                            </li>
                            <li>
                                <Link to="/userProfile" className="text-white bg-orange-500 btn btn-sm hover:bg-blue-500 btn-ghost">User Profile</Link>
                            </li>
                            <li>
                                <Link to="/updateProfile" className="text-white bg-orange-500 btn btn-sm hover:bg-blue-500 btn-ghost">Update Profile</Link>
                            </li>
                        </ul>
                    </div>
                    :
                    <Link to="/login" className="text-white bg-orange-500 border-0 btn hover:bg-blue-500">Login</Link>
                }
                
                {/* toggle button */}
                <ThemeToggle />
            </div>
            <Toaster />
        </div>
    );
};

export default Nav;