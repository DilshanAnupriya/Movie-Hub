import React from 'react'
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <div className="loginPattern" >
                <div className="w-full h-screen flex flex-col items-center justify-center  ">
                    <img src="./logo.png" alt="star" className='w-[200px] h-[200px] -mt-[100px] pb-7'/>
                    <h1>Find<span className='text-gradient '>&nbsp;Movies</span> You'll Enjoy
                        Without the Hassle</h1>
                    <div className="mt-15 ">
                        <Link to='/Login'>
                            <button className="text-purple-500 font-bold text-[22px] bg-transparent border-2
                             border-purple-500 rounded-2xl w-[200px] h-[50px] cursor-pointer hover:text-white
                              hover:bg-purple-900" >
                                Get Start
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Landing
