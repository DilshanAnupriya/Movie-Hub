import React from 'react'
import Table from "./Table.jsx";
import Search from "./Search.jsx";
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="w-full h-screen flex  ">
                <div className="w-[440px] h-full  bg-blue-950 rounded-br-2xl rounded-tr-2xl">
                    <div className="pt-6 pl-5 font-bold space-x-3 flex justify-center ">
                        <img
                            src="logo.png"
                            alt="Logo"
                            className="w-[40px] h-[30px] "/>
                        <h2>Movie Hub</h2>
                     <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                        rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer ml-[40px]">
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

                    </div>
                    <div className="text-[18px] font-semibold w-full flex-col text-start mt-[40px] pl-[65px]
                    text-white">
                        < ul className="space-y-[30px] ">
                            <li >
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <Link to="/users">User Management</Link>
                            </li>
                            <li>
                                <a href="#">Films Management</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Dashboard
