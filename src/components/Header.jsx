import React from 'react';
import logo from '../images/logo-adri.png';
import '../css/portfolio.css';

function Header() {
    return (
        <div className="header">
            <div className="header_menu">
                <a href="/"><img src={logo} className="logo-style" alt="logo1" /></a>

                <div className="header_nav">
                    <nav>
                        <a href="/contacto">Contacto</a>
                        <a href="/#proyectos">Proyectos</a>
                        <a href="https://github.com/adrianaccz">Github</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
