import React from 'react'

const UserAddForm = () => {
    return (
        <div >
            <section className="bg-white dark:bg-gray-900 2xl:h-screen">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add new User</h2>
                    <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type full name" required=""/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Country
                                </label>
                                <input type="text" name="brand" id="brand"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Product brand" required=""/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="price"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Contact Number
                                </label>
                                <input type="number" name="price" id="price"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Enter Number" required=""/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="price"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Gender
                                </label>
                                <select id="price"
                                       className="bg-gray-50  text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                                       h-10"
                                        required="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="item-weight"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Date of Birth</label>
                                <input type="date" name="item-weight" id="item-weight"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                        dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""/>
                            </div>
                            <div>
                                <label htmlFor="item-weight"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                </label>
                                <input type="email" name="item-weight" id="item-weight"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                        dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""/>
                            </div>
                            <div>
                                <label htmlFor="item-weight"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                </label>
                                <input type="password" name="item-weight" id="item-weight"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                       rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                        dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Description
                                </label>
                                <textarea id="description" rows="8"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                                           border border-gray-300 focus:ring-primary-500 focus:border-primary-500
                                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm bg-blue-700 font-medium
                                 text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200
                                  dark:focus:ring-primary-900 hover:bg-primary-800">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default UserAddForm
