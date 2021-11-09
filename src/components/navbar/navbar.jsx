import React from "react";

import Logo from "../../assets/Logo";
import "./navbar.scss";
const navbar = () => {
    return (
        <div className="navbar" id="navbar">
            <Logo color="#fff" />

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default navbar;
