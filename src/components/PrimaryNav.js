import React from "react";
import '../styles/PrimaryHeader.css'
const PrimaryNav = () => {
    return (
        <nav className="nav-primary-header-container">
            <a className="main-nav__logo" href="/en/">
                <svg role="img" aria-labelledby="logo" className="main-nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
                    <title id="logo">Ableton Homepage</title>
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
                </svg>
            </a>
            <div className="links-ul-container">
                <ul className="links-list-container">
                    <div className="flex-start">
                        <li className="links-li"><a>Live</a></li>
                        <li className="links-li"><a>Push</a></li>
                        <li className="links-li"><a>Note</a></li>
                        <li className="links-li"><a>Link</a></li>
                        <li className="links-li"><a>Shop</a></li>
                        <li className="links-li"><a>Packs</a></li>
                        <li className="links-li"><a>Help</a></li>
                        <li className="links-li"><a><button id="more-button" className="orange">More +</button></a></li>
                    </div>
                    <div className="flex-end">
                        <li className="links-li blue" id="link-margin"><a>Try Live for free</a></li>
                        <li className="links-li no-margin-right"><a>Log in or register</a></li>

                    </div>
                </ul>
            </div>
        </nav>
    )
}
export default PrimaryNav;