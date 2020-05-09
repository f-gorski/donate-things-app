import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { AppContext } from '../../App';


const Nav = () => {
    return (
        <nav>
            <NavTop />
            <NavBottom />
        </nav>
    )
}

const NavTop = (props) => {
    const {userAuth} = useContext(AppContext);
    console.log(userAuth)
    const notLoggedIn =  
        <ul>
            <li><Link to="/logowanie">Zaloguj się</Link></li>
            <li><Link to="/rejestracja">Zarejestruj się</Link></li>
        </ul>;
    const loggedIn = 
        <ul>
            <li>Witaj {userAuth ? userAuth.authUser.email : null}</li>
            <li><Link to="/oddaj-rzeczy">Zaloguj się</Link></li>
            <li><Link to="/wylogowanie">Wyloguj się</Link></li>
        </ul>
    return  userAuth ? loggedIn : notLoggedIn;
}

const NavBottom = () => {
    return (
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><LinkScroll to="desc" smooth={true}>O co chodzi></LinkScroll></li>
                <li><LinkScroll to="about" smooth={true}>O nas</LinkScroll></li>
                <li><LinkScroll to="orgs" smooth={true}>Fundacje i organizacje</LinkScroll></li>
                <li><LinkScroll to="contact" smooth={true}>Kontakt</LinkScroll></li>
            </ul>
    )
}

export default Nav;
