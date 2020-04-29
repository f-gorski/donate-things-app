import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

const Nav = () => {
    return (
        <nav>
            <NavTop />
            <NavBottom />
        </nav>
    )
}

const NavTop = () => {
    return (
            <ul>
                <li><Link to="/logowanie">Zaloguj się</Link></li>
                <li><Link to="/rejestracja">Zarejestruj się</Link></li>
            </ul>
    )
}

const NavBottom = () => {
    return (
            <ul>
                <li><LinkScroll to="start" smooth={true}><Link>Start</Link></LinkScroll></li>
                <li><LinkScroll to="desc" smooth={true}><Link>O co chodzi></Link></LinkScroll></li>
                <li><LinkScroll to="about" smooth={true}><Link>O nas</Link></LinkScroll></li>
                <li><LinkScroll to="orgs" smooth={true}><Link>Fundacje i organizacje</Link></LinkScroll></li>
                <li><LinkScroll to="contact" smooth={true}><Link>Kontakt</Link></LinkScroll></li>
            </ul>
    )
}

export default Nav;
