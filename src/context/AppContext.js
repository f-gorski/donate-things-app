import React, { createContext, useState } from 'react';
import { firebase } from '../firebase/firebase';

export const AppContext = createContext({});

export const AppProvider = (props) => {

    //Firebase database
    const organisationsRef = firebase.database().ref('organisations');

    const getData = async (type) => {
        let data = await organisationsRef.orderByChild(type).once('value')
        return data.val();
    }

    const sendData = data => console.log(data)

    //set initial user data as empty
    const USER_INITIAL = {
        email: '',
        passwordOne: "",
        passwordTwo: "",
        error: null
    }

    const [userForm, setUserForm] = useState(USER_INITIAL);

    return <AppContext.Provider value={{ userForm, setUserForm, USER_INITIAL, getData, sendData }}>
        {props.children}
    </AppContext.Provider>
}