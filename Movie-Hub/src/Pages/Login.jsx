import React from 'react';
import LoginCard from "../components/loginCard.jsx";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <mein>
            <div className="loginPattern1 w-full h-screen flex flex-col lg:flex-row ">
                <div className="w-full h-screen  lg:w-1/2 md:w-1/2 ">
                    <LoginCard/>
                </div>
                <div className="w-full h-screen flex justify-center lg:w-1/2 md:w-1/2 ">
                    <form className="w-3/4 h-[600px] p-[100px]  pt-[50px] mt-[100px]
                     rounded-4xl 2xl:mt-[180px]

                         ">
                        <h1 className="text-gradient flex justify-center pb-[70px]">Login</h1>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                placeholder="name@gmail.com"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                required
                            />
                        </div>
                        <div className="flex items-start  mt-7">
                            <label
                                htmlFor="terms"
                                className="ms-2 text-sm  font-medium text-gray-900 dark:text-gray-300"
                            >
                                Do not have an &nbsp;
                                <Link
                                    to="/SignUp"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    account?
                                </Link>
                            </label>
                        </div>
                        <Link to='/Home'>
                            <button
                                type="submit"
                                className="text-white w-full mt-10  bg-purple-500 hover:bg-purple-900
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                                 text-sm px-5 py-2.5
                                 text-center  "
                                 >
                                Login
                            </button>
                        </Link>

                    </form>
                </div>
            </div>

        </mein>

    );
};

export default Login;
