import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const LogOut = () => {
    const { firebase } = useContext(AppContext);

    useEffect(() => {
        firebase.auth().signOut();
    }, [])

    return (
        <div className="logout">
            <div className="container">
                <div className="logout__statement">
                    <h1 className="logout__header">Wylogowanie nastąpiło pomyślnie!</h1>
                    <img className="decoration" src={require('../assets/Decoration.svg')} />
                    <Link to="/" className="logout__link">Strona główna</Link>
                </div>
            </div>
        </div>
    )
}

export default LogOut;