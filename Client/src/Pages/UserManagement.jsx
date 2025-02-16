import React, { useEffect, useState } from 'react';
import Dashboard from "../components/Dashboard.jsx";
import Table from "../components/Table.jsx";
import axios from "axios";




const UserManagement = () => {

    const URL = 'http://localhost:3000/v1/user/';

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(URL);
                const userList = response.data;  // API response object

                console.log("API Response:", userList);
                console.log("Is Array (userList.data):", Array.isArray(userList.data)); // Should be true

                if (userList && Array.isArray(userList.data)) {
                    setUsers(userList.data); // ✅ Extract only the `data` array
                } else {
                    console.error("Expected an object with a 'data' array but got:", userList);
                    setUsers([]); // Fallback for empty state
                }
            } catch (e) {
                console.error("Fetch error:", e);
            }
        };

        fetchUsers();
    }, []);



    return (
        <div className="w-full h-screen flex">
            <Dashboard/>
            <div className="w-full h-screen">
                <div className="w-full h-full p-10">
                    <div className="w-full h-full flex-col p-10">
                        <div className="flex mb-5">
                            <form className="max-w-md w-full">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Search
                                    </button>
                                </div>
                            </form>
                            <div className="flex w-full h-full items-center justify-end space-x-4">
                                <button className="text-white h-[40px] w-[100px] mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Download
                                </button>
                                <button className="text-white h-[40px] w-[80px] mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add
                                </button>
                            </div>
                        </div>
                        <div>
                            {/* ✅ Pass fetched users data to Table component */}
                             <Table users={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
