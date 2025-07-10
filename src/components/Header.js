import React, { useState, useEffect } from 'react'; // Importing React and useState hook
import { LOGO_URL } from '../utils/constants'; // Importing the constant for logo URL
import { Link } from 'react-router'; // Importing Link for navigation

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
    // useEffect(() => {
    //     console.log("Header component mounted");
    // }); // Everytime the component renders, this will log a message to the console

    // useEffect(() => {
    //     console.log("Header component mounted");
    // }, []); // This will run only once when the component mounts

    useEffect(() => {
        console.log("Header component mounted");
    }, [isLoggedIn]); // This will run when the component mounts and whenever the isLoggedIn state changes
    return (
        <div className="header">
            <div>
                <img className='logo' src={`${LOGO_URL}`} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li> {/** page will reloads by using anchor tag */}
                    <li><Link to="/contact">Contact</Link></li> {/** page will not reloads by using Link tag */}
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        setIsLoggedIn(!isLoggedIn);
                        // setIsLoggedIn1(!isLoggedIn1);
                    }}>{isLoggedIn ? 'Logout' : 'Login'}</button>
                </ul>
            </div>
        </div>
    )
}

export { Header };