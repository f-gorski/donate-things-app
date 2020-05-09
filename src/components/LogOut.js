import React, { useContext } from 'react';
import { AppContext } from '../App';

const LogOut = () => {
    const { firebase } = useContext(AppContext);

    const handleClick = () => {
        firebase.auth().signOut();
    }
    return (
        <div>
            <h3>Wylogowanie</h3>
            <button onClick={handleClick}>Wyloguj się</button>
        </div>
    )
}

export default LogOut;