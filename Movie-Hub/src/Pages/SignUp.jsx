import React from 'react'
import LoginCard from "../components/loginCard.jsx";
import SignUpCard from "../components/SignUpCard.jsx";

const SignUp = () => {
    return (
        <mein>
            <div className="w-full h-[600px] flex flex-col lg:flex-row ">
                <div className="w-full h-screen  lg:w-1/2 md:w-1/2 ">
                    <SignUpCard/>
                </div>
                <div className="w-full h-screen flex justify-center lg:w-1/2 md:w-1/2 ">
                    <form className="w-3/4 h-[500px] p-[100px]  pt-[20px] lg:mt-[0px] xl:mt-[20px] 2xl:mt-[100px]
                    rounded-lg bg-transparent backdrop-blur-md">
                        <h1 className="text-gradient flex justify-center pb-[70px]">Signup</h1>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                dark:shadow-xs-light"
                                placeholder="Enter Full Name"
                                required
                            />
                        </div>    <div className="mb-5">
                            <label
                                htmlFor="Dob"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="Dob"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                required
                            />
                        </div>    <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                  dark:shadow-xs-light"
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
                                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900
                                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                required
                            />
                        </div>
                        <div className="flex items-start  mt-7">

                            <label
                                htmlFor="terms"
                                className="ms-2 text-sm  font-medium text-gray-900 dark:text-gray-300"
                            >
                                Already have an &nbsp;
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    account?
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white w-full mt-10 bg-purple-500 hover:bg-purple-900 focus:ring-4
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                             text-center  "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </mein>

    )
}
export default SignUp
