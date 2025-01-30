import React from 'react'
import Table from "../components/Table.jsx";
import Search from "../components/Search.jsx";

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
                                <a href="#">User Management</a>
                            </li>
                            <li>
                                <a href="#">Films Management</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full  p-10">
                    <div className="w-full h-full flex-col  p-10 ">
                        <div className="flex   mb-5 ">
                            <form className="max-w-md w-full ">
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900
                                 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3
                                    pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm
                                     text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                     dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search Mockups, Logos..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5
                                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                     focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Search</button>
                                </div>
                            </form>
                            <div className="flex w-full h-full items-center justify-end space-x-4 ">
                                <button className="text-white h-[40px] w-[100px] mt-2
                                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                     focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Download
                                </button>
                                <button className="text-white h-[40px] w-[80px] mt-2
                                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                     focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add
                                </button>
                            </div>
                        </div>
                        <div>
                            <Table/>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dashboard
