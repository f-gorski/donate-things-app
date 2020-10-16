import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { AuthContext } from '../../context/AuthContext';


const Nav = () => {
    return (
        <header className="header">
            <div className='container'>
                <nav className="navigation">
                    <NavTop />
                    <NavBottom />
                </nav>
            </div >
        </header >

    )
}

const NavTop = (props) => {
    const { userAuth } = useContext(AuthContext);
    const notLoggedIn =
        <div className="navigation">
            <ul className="navigation__links">
                <li><NavLink to="/logowanie" className="navigation__top navigation__link" activeClassName="navigation__link--active">Zaloguj</NavLink></li>
                <li><NavLink to="/rejestracja" className="navigation__top navigation__link" activeClassName="navigation__link--active">Załóż konto</NavLink></li>
            </ul>
        </div>;
    const loggedIn =
        <div className="navigation navigation__top">
            <ul className="navigation__links">
                <li>Cześć {userAuth ? userAuth.authUser.email : null}!</li>
                <li><NavLink to="/oddaj-rzeczy" className="navigation__top navigation__link" activeClassName="navigation__link--active">Oddaj rzeczy</NavLink></li>
                <li><NavLink to="/wylogowanie" className="navigation__top navigation__link" activeClassName="navigation__link--active">Wyloguj się</NavLink></li>
            </ul>
        </div>
    return userAuth ? loggedIn : notLoggedIn;
}

const NavBottom = () => {
    return (
        <div className=" navigation">
            <ul className="navigation__links">
                <li><NavLink to="/" className="navigation__link--start">Start</NavLink></li>
                <li><LinkScroll to="desc" smooth={true} className="navigation__link">O co chodzi?</LinkScroll></li>
                <li><LinkScroll to="about" smooth={true} className="navigation__link">O nas</LinkScroll></li>
                <li><LinkScroll to="orgs" smooth={true} className="navigation__link">Fundacje i organizacje</LinkScroll></li>
                <li><LinkScroll to="contact" smooth={true} className="navigation__link">Kontakt</LinkScroll></li>
            </ul>
        </div>
    )
}

export default Nav;
