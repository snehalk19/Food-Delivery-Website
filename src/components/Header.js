import { LOGO_URL } from "../utils/constants"; // named import

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"    
                    src={LOGO_URL}>

                </img>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;