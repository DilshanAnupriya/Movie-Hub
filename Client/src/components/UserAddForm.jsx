import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";

const UserAddForm = () => {
    const history = useNavigate();

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
        email:"",
        fullName:"",
        role:[],
        createdAt: new Date()

    });

    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/users'))
    };

    const sendRequest = async () => {
        try {
            const response = await axios.post("http://localhost:3000/v1/user/signup", {
                username: inputs.username,
                password: inputs.password,
                email: inputs.email,
                fullName: inputs.fullName,
                role: [inputs.role],
        });
            console.log("User added successfully:", response.data);
        } catch (error) {
            console.error("Error adding user:", error.response ? error.response.data : error.message);
        }
    };


    return (
        <div >
            <section className="bg-white dark:bg-gray-900 w-full h-screen 2xl:h-screen">
                <div className="py-8 px-4  w-full  mx-auto max-w-2xl lg:py-16 xl:pt-[100px] 2xl:pt-[200px]">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add new User</h2>
                    <form onSubmit={handleSubmit} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    User Name
                                </label>
                                <input type="text" name="username"  value={inputs.username} onChange={handleChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type user name" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="Fullname"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Full Name
                                </label>
                                <input type="text" name="fullName" value={inputs.fullName} onChange={handleChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type full name" required/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input type="text" name="email"  value={inputs.email} onChange={handleChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Example@gmail.com" required/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input type="password" name="password" value={inputs.password} onChange={handleChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Enter your password" required/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="role"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Role
                                </label>
                                <select id="role" name="role" value={inputs.role} onChange={handleChange}
                                        className="bg-gray-50  text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                                       h-10"
                                        required>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="status"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Status
                                </label>
                                <select name="status" value={inputs.status} onChange={handleChange}
                                        className="bg-gray-50  text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                                       h-10"
                                        required>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit"
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-blue-700 font-medium
                                 text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200
                                  dark:focus:ring-primary-900 hover:bg-primary-500">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default UserAddForm
