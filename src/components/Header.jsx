import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

// nav items
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Category', path: '/category' },
    { name: 'Tour', path: '/tour' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Blogs', path: '/blogs' }
]

const NavItemShow = ({handleMenuToggle}) => {
    return (
        <ul className='flex flex-col items-center justify-center md:flex-row space-x-4 lg:space-x-8 gap-2'>
            {
                navItems.map((item, index) => {
                    return (
                        <li key={index} onClick={handleMenuToggle}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                `${isActive ? "text-primary" : "text-white"} hover:text-primary`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
} 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen (prevState => !prevState)
    }
    return (
        // logo
        <header className='bg-blue-400 bg-opacity-80 px-4 md:px-0 shadow-sm fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out'>
            <nav className='container mx-auto flex justify-between items-center pt-3 pb-3 md:px-4 lg:px-0'>
                {/* logo */}
                <Link to="/" className='text-white text-xl md:text-2xl font-bold'>Logo</Link>
                {/* humburger menu */}
                <button onClick={handleMenuToggle} className='flex md:hidden text-xl cursor-pointer hover:text-primary'>
                    {
                        isMenuOpen ? '' : <RxHamburgerMenu className='text-white'/>
                    }
                </button>

                {/* mobile menu items */}
                <div className={`fixed top-0 left-0 bottom-0 w-full min-h-screen bg-black bg-opacity-80 flex flex-col space-y-4 items-center justify-center text-white transition-transform transform' ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                    <div className='cursor-pointer text-xl absolute top-4 right-4' onClick={handleMenuToggle}>
                        <LiaTimesSolid />
                    </div>
                    <NavItemShow toggleMenu={handleMenuToggle}/>
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    {/* nav item */}
                    <div>
                        <NavItemShow />
                    </div>
                    {/* action buttons */}
                    <div className='flex items-center space-x-2 lg:space-x-8'>
                        <button className='border border-primary text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300 block w-max hover:color-white hover:bg-primary'>Log In</button>
                        <button className='bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300 block w-max'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;