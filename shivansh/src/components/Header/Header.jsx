import React, { useState } from "react";
import "./Header.css";

function Header()
{
    const [menuShown,showMenu]=useState(false);

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Shivansh</a>
                <div className={ menuShown?"nav__menu show-menu":"nav__menu" }>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link"> 
                                <i className="uil uil-estate nav__icon" ></i> Home
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link"> 
                                <i className="uil uil-user nav__icon" ></i> About
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#skills" className="nav__link"> 
                                <i className="uil uil-file-alt nav__icon" ></i> Skills
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#services" className="nav__link"> 
                                <i className="uil uil-briefcase-alt nav__icon" ></i> Services
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link"> 
                                <i className="uil uil-scenery nav__icon" ></i> Portfolio
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#contact" className="nav__link"> 
                                <i className="uil uil-message nav__icon" ></i> Contact
                            </a>
                        </li>
                    </ul>

                    <div className="nav__close" onClick={()=>{ showMenu(!menuShown) }}>
                        <i className="uil uil-times" ></i>
                    </div>
                    
                </div>

                <div className="nav__toggle" onClick={()=>{ showMenu(!menuShown) }}>
                    <i className="uil uil-apps" />
                </div>
            </nav>
        </header>
    )
}

export default Header;