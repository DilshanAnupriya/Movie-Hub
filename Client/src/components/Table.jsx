import React from 'react'
<<<<<<< Updated upstream

const Table = () => {
=======
import log from "eslint-plugin-react/lib/util/log.js";

const Table = ({users}) =>{
>>>>>>> Stashed changes
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
                dark:text-gray-400"
                >
                <tr>
                    <th scope="col" className="px-6 py-3">
<<<<<<< Updated upstream
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
=======
                        User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Options
>>>>>>> Stashed changes
                    </th>
                </tr>
                </thead>
                <tbody>
<<<<<<< Updated upstream
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap
                    dark:text-white"
                    >
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-600">

                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        White
                    </td>
                    <td className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                    <td className="px-6 py-4">
                        $99
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-600">

                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple Watch
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Watches
                    </td>
                    <td className="px-6 py-4">
                        $199
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap
                    dark:text-white"
                    >
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-600">

                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        White
                    </td>
                    <td className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                    <td className="px-6 py-4">
                        $99
                    </td>
                    <td className="px-6 py-4 space-x-4">
                        <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                    </td>
                </tr>
=======

                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">{user._id}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.fullName}</td>
                            <td className="px-6 py-4">{user.isActive}</td>
                            <td className="px-6 py-4">{user.createdAt}</td>
                            <td className="px-6 py-4 space-x-4">
                                <a href="#" className="font-medium text-yellow-500  hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center py-4">No users found</td>
                    </tr>
                )}
>>>>>>> Stashed changes

                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                 aria-label="Table navigation">
                <span
                    className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full
                     md:inline md:w-auto">Showing <span
                    className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500
                           bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
                           dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                           dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
                            bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                             dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
                           bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                           dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                            dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page"
                           className="flex items-center justify-center px-3 h-8 text-blue-600 border
                           border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700
                           dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
                            bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                             dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
                            bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                            dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500
                           bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700
                           dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                           dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default Table
