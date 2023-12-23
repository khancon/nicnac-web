// src/components/NavBar.js

import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import CustomButton from './Button';
import '../styles/globals.css'; // Import global styles


const NavBar = () => {
    const [showLogin, setShowLogin] = useState(true); // State to toggle components

    const toggleComponent = () => {
        setShowLogin(!showLogin);
    };

    return (
        <nav className="navbar">
            <div className='navbar-content'>
                <div className="navbar-brand">NicNac</div>
                <div className="navbar-nav">
                    {/* <ul className="navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> */}
                    {/* <Button className= {`custom-button`} style={{ backgroundColor: '#13c2c2', borderColor: '#13c2c2', color: 'white'}}>
                        Log In
                    </Button> */}
                    {showLogin ? (
                        <CustomButton text="Log In" onClick={toggleComponent} />
                    ) : (
                        <FaUserCircle size="2em" onClick={toggleComponent} />
                    )}
                </div>
            </div>
        </nav>
        
    );
};

export default NavBar;

// src/components/NavBar.js

// import React from 'react';
// import { FaUserCircle } from 'react-icons/fa'; // Import a profile icon from react-icons

// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">NicNac</div>
//             <div className="navbar-profile">
//                 <FaUserCircle size="2em" /> {/* Profile Icon */}
//             </div>
//         </nav>
//     );
// };

// export default NavBar;

