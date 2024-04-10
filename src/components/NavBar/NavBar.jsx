import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContest } from "../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';
import { RxAvatar } from "react-icons/rx";

const Nav = () => {
    const {user, logOut} = useContext(AuthContest);

    const handleSignOut = () =>{
        logOut()
          .then(() => {
            toast.success('Sign-out successful!')
          }).catch(() => {
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
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-gray-500'
        }
        to="/">Home</NavLink></li>
        <li><NavLink 
        className={({ isActive }) => isActive
        ? 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-orange-500' 
        : 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-gray-500'
        }
        to="/faqs">FAQs</NavLink></li>
        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-orange-500' 
        : 
        'btn hover:bg-blue-100 bg-white border-0 font-bold text-gray-500'
        }
        to="/testimonials">Testimonials</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-100 sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 font-bold text-gray-500">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="normal-case sm:text-2xl  lg:text-3xl font-bold p-0">
                  <span className="text-orange-500">Industrial</span><span className="text-blue-500">Plaza</span> 
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 border-1 font-bold text-gray-500">
                    {links}
                </ul>
            </div>
            {/* Login / LogOut Button */}
            <div className="navbar-end gap-2">
                {
                    user? 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user.photoURL ?
                                    <img src={user?.photoURL} />
                                    :
                                    <div className="flex justify-center text-2xl my-auto py-2 text-orange-500"><RxAvatar/></div>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm bg-orange-500 text-white  btn-ghost">{user?.displayName ||'Reload required'}</button>
                            </li>
                            <li>
                                <button onClick={handleSignOut}  className="btn btn-sm text-white bg-orange-500 btn-ghost">Logout</button>
                            </li>
                        </ul>
                        </div>
                    :
                    <Link to="/login" className="btn bg-orange-500 hover:bg-blue-500 border-0 text-white">Login</Link>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default Nav;