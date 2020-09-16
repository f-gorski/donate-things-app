import React, { createContext, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../App';

import TypePage from './TypePage';
import QuantityPage from './QuantityPage';
import LocationPage from './LocationPage';
import AddressPage from './AddressPage';
import SummaryPage from './SummaryPage';
import Footer from '../Home/Footer';

const Donate = () => {
    const { userAuth } = useContext(AppContext);
    console.log(userAuth);
    return (
        userAuth ? <DonateForm /> : <Redirect to='/logowanie' />
    )
}

export const FormContext = createContext({});

const DonateForm = () => {

    const [formState, setFormState] = useState({
        page1: {},
        page2: { quantity: 0 },
        page3: {
            localization: "",
            localizationSpecifics: ""
        },
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
        switch (currentPage) {
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
        <>
            <section className="section section__donate">
                <div className="container">
                    <div className="img-wrapper"></div>
                    <div className="donate">
                        <h1 className="donate__header">Oddaj rzeczy których już nie chcesz <br /> POTRZEBUJĄCYM</h1>
                        <img className="decoration" />
                        <h2 className="donate__subheader">Wystarczą 4 proste kroki:</h2>
                        <div className="donate__steps">
                            <div>
                                <h3 className="donate__steps-header">1</h3>
                                <p className="donate__steps-text">Wybierz rzeczy</p>
                            </div>
                            <div>
                                <h3 className="donate__steps-header">2</h3>
                                <p className="donate__steps-text">Spakuj je w worki</p>
                            </div>
                            <div>
                                <h3 className="donate__steps-header">3</h3>
                                <p className="donate__steps-text">Wybierz fundację</p>
                            </div>
                            <div>
                                <h3 className="donate__steps-header">4</h3>
                                <p className="donate__steps-text">Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section__donate-form">
                <div className="container">
                <FormContext.Provider value={{ formState, setFormState, page, setPage }} >
                        {pageToRender(page)}
                </FormContext.Provider>
                </div>
            </section>
            
            <Footer />
        </>
    )

}

export default Donate;
