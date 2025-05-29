
import { LOGO_URL } from '../utils/constants'; // Importing the constant for logo URL

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export { Header };