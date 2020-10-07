import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppProvider = (props) => {

    //set initial user data as empty
    const USER_INITIAL = {
        email: '',
        passwordOne: "",
        passwordTwo: "",
        error: null
    }

    const [userForm, setUserForm] = useState(USER_INITIAL);

    return <AppContext.Provider value={{ userForm, setUserForm, USER_INITIAL }}>
        {props.children}
    </AppContext.Provider>
}