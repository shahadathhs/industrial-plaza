import { Link, NavLink } from "react-router-dom";

const Nav = () => {

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
                <Link to="/login" className="btn bg-orange-500 hover:bg-blue-500 border-0 text-white">Login</Link>
            </div>
        </div>
    );
};

export default Nav;