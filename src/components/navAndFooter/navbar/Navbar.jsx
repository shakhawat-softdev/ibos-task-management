import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
   const { user, logout } = useAuth();

   console.log("Navbar", user)

   const navItems = <>
      <Link to={'/'}> <li><a>Home</a></li></Link>
      <Link><li><a>Profile</a></li></Link>
      <Link><li><a>Dashboard</a></li></Link>

      <Link to={'/signin'}><li><a>Sign Up</a></li></Link>

   </>
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">ibos-Task Management</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navItems}
            </ul>
         </div>
         <div className="navbar-end">
            {!user ? <Link to={'/login'}><a className="btn btn-sm">Login</a></Link> : <a className="btn btn-sm" onClick={logout}>Logout</a>}


         </div>

      </div>
   );
};

export default Navbar;