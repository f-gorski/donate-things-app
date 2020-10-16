import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {

    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(authUser => {
        authUser
            ? setUserAuth({ authUser })
            : setUserAuth(null);
        })
    }, []);

    return <AuthContext.Provider value={{userAuth, setUserAuth}}>
                {props.children}
            </AuthContext.Provider>
}