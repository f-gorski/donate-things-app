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
                <li><LinkScroll to="start" smooth={true}>Start</LinkScroll></li>
                <li><LinkScroll to="desc" smooth={true}>O co chodzi></LinkScroll></li>
                <li><LinkScroll to="about" smooth={true}>O nas</LinkScroll></li>
                <li><LinkScroll to="orgs" smooth={true}>Fundacje i organizacje</LinkScroll></li>
                <li><LinkScroll to="contact" smooth={true}>Kontakt</LinkScroll></li>
            </ul>
    )
}

export default Nav;
