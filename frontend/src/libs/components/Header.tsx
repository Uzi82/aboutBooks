import 'libs/styles/bin/Header.scss';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";


const patternForShowSearcher = /^(\/signup)|(\/signin)/;

function Header() {
    const location = useLocation();
    const navigate = useNavigate();     
    const [isActiveSearcher, setSearcher] = useState<string>("");

    function toggleSearcher() {
        switch(isActiveSearcher) {
            case "active": setSearcher(""); break;
            case "":  setSearcher("active"); break;
        }
    }

    function getToHome() {
        navigate('/');
    }

    function toLogoutUser() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (  
        <header className="Header">
            <div className="Header_logo" onClick={getToHome}>
                <img src="/book.svg" alt="AboutBooks is logo" />
                <h4>About<strong>Books</strong></h4>
            </div>

            {   
                !patternForShowSearcher.test(location.pathname) && (
                    <div className="wrapper">
                        <FaSearch className='Header_iconForm' onClick={toggleSearcher}/>
                        <form className={`Header_form ${isActiveSearcher}`} method="get" >
                            <input
                                type="text"
                                className="Header_form-input"
                                aria-label="search books"
                                placeholder='search books'
                            />
                            <button className="Header_form_button">
                                <FaSearch className='Header_form_button-icon'/>
                                <span className='Header_form_button-text'>search</span>
                            </button>
                        </form>
                    </div>
                )
                
            }
            {
                localStorage.getItem('token') === null
                ? (
                    <div className="Header_auth">
                        <button className="Header_auth-buttons active">
                            <Link to="/signup" reloadDocument>SignUp</Link>
                        </button>
                        <button className="Header_auth-buttons">
                            <Link to="/signin" reloadDocument>SignIn</Link>
                        </button>
                    </div>
                )
                : ( 
                    <div className='Header_user'>
                        <IoNotifications className='Header_user_notification'/>
                        <details className="wrapper">
                            <summary>
                                <div className="Header_user_avatar">
                                    <img src="" alt="" />
                                </div>
                            </summary>
                            <ul className='Header_user_contextMenu'>
                                <li className="Header_user_contextMenu_item">settings</li>
                                <li className="Header_user_contextMenu_item" onClick={toLogoutUser}>logout</li>
                            </ul>
                        </details>
                    </div>
                )
            }
            
        </header>
    );
}

export default Header;