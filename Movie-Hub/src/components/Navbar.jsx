import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <nav className="relative bg-white/5 backdrop-blur-md border border-b-white/10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Movie Hub
                    </span>
                </Link>
                {/* Navigation and Buttons */}
                <div className="flex items-center space-x-6">
                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link
                                to="/Home"
                                className="py-2 px-3 md:p-0 text-white bg-blue-500 rounded-sm md:bg-transparent
                                md:text-purple-500 md:dark:purple-500"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/About"
                                className="py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100
                                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-purple-500
                                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                                md:dark:hover:bg-transparent"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                className="py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100
                                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-purple-500
                                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                                md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Log Out Button */}
                    <Link to="/Dashboard">
                        <button
                            type="button"
                            className="text-white bg-purple-500 hover:bg-purple-500 focus:ring-4
                        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                        text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:ring-purple-700"
                        >
                            Log Out
                        </button>
                    </Link>


                    {/* Hamburger Menu for Mobile */}<button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                    rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
                    aria-controls="navbar-cta"
                    aria-expanded={isToggle}
                    onClick={() => setIsToggle(!isToggle)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                    <div
                        className={`${isToggle ? 'flex' : 'hidden'} absolute top-16 left-0 items-center justify-center w-full 
                        bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md xl:hidden`}
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col font-medium p-4 mt-4 space-y-2 md:p-0 md:mt-0">
                            <li>
                                <Link to="/Home" className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-200
                                 dark:hover:bg-gray-700 dark:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-200
                                  dark:hover:bg-gray-700 dark:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-200
                                   dark:hover:bg-gray-700 dark:text-white">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
