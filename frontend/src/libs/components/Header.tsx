import 'libs/styles/bin/Header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

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

    function toHome() {
        navigate('/');
    }

    return (  
        <header className="Header">
            <div className="Header_logo" onClick={toHome}>
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

            <div className="Header_auth">
                <button className="Header_auth-buttons active">
                    <Link to="/signup" reloadDocument>SignUp</Link>
                </button>
                <button className="Header_auth-buttons">
                    <Link to="/signin" reloadDocument>SignIn</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;