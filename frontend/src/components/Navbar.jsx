import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { logoutUser } from '../controllers/auth/login';
import { getUser } from '../controllers/auth/auth';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem('user') !== null
      );
    let user = getUser();
    console.log(user);
    return (
        <nav>
            <Link to="/" className='title'>
                MuscleTracker
            </Link>
            <div
                className='menu'
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                {authenticated ? (    //logged in view
                    <li>
                        <NavLink onClick={logoutUser}>Logout</NavLink>
                    </li>
                ) : (  //no user view
                    <>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
