import React, { createContext, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../App';

import TypePage from './TypePage';
import QuantityPage from './QuantityPage';
import LocationPage from './LocationPage';
import AddressPage from './AddressPage';
import SummaryPage from './SummaryPage';

const Donate = () => {
    const {userAuth} = useContext(AppContext);
    console.log(userAuth);
    return (
        userAuth ? <DonateForm /> : <Redirect to='/logowanie' /> 
    )
}

export const FormContext = createContext({});

const DonateForm = () => {
    
    const [formState, setFormState] = useState({
        page1: {},
        page2: {quantity: 0},
        page3: {localization: "", 
                localizationSpecifics: ""},
        page4: {
            street: "",
            city: "",
            code: "",
            number: "",
            date: "",
            hour: "",
            comments: ""
        }
    });
    const [page, setPage] = useState(1);

    const pageToRender = (currentPage) => {
        switch(currentPage) {
            case 1:
                return <TypePage />
            case 2: 
                return <QuantityPage />
            case 3: 
                return <LocationPage />
            case 4:
                return <AddressPage />
            case 5:
                return <SummaryPage />
            default:
                return null;
        }
    }

    return (
        <FormContext.Provider value={{formState, setFormState, page, setPage}} >
            <div>
                <h3>Formularz oddaj rzeczy</h3>
                {pageToRender(page)}
            </div>  
        </FormContext.Provider>
    )
    
}

export default Donate;
