import React from 'react'
import Home from "./Pages/Home.jsx";
import {Route,Routes} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";

import Dashboard from "./Pages/Dashboard.jsx";
import UserAddForm from "./components/UserAddForm.jsx";
import Landing from "./Pages/Landing.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";


const App = () => {
    return (
        <div>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    {/*<Route path="/Landing" element={< />} />*/}
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Routes>
            </React.Fragment>
        </div>
    )
}
export default App
