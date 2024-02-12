import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-indigo-400'>
                <Link to={'/home'} className='hover:bg-lime-300 p-3'>Home</Link>
                <Link to={'/irrigation'} className='hover:bg-lime-300 p-3'>Monitor Irrigation</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
