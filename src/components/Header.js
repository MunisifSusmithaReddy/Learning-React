import React, { useState } from 'react'; // Importing React and useState hook
import { LOGO_URL } from '../utils/constants'; // Importing the constant for logo URL

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
    return (
        <div className="header">
            <div>
                <img className='logo' src={`${LOGO_URL}`} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        setIsLoggedIn(!isLoggedIn);
                    }}>{isLoggedIn ? 'Logout' : 'Login' }</button>
                </ul>
            </div>
        </div>
    )
}

export { Header };