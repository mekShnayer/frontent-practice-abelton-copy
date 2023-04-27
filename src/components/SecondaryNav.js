import React from "react";
import '../styles/SecondaryHeader.css'
const SecondaryNav = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <li className="li-item orange"><a>About</a></li>
                <li className="li-item"><a>Jobs</a></li>
                <li className="li-item"><a>Apprenticeships</a></li>
            </ul>
        </nav>
    )
}
export default SecondaryNav;