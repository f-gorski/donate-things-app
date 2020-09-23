import React, { useContext, useState } from 'react';
import { FormContext } from './Donate';

const SummaryPage = () => {

    const { formState, setFormState, page, setPage } = useContext(FormContext);

    const { page1, page2, page3, page4 } = formState;

    const handlePrev = () => setPage((currPage) => currPage - 1);

    const handleAccept = () => {
        setPage((currPage) => currPage + 1)
    }

    return (
        <div className="donate-form__stepSummary">

            <div className="donate-form__form-wrapper">
                <div className="container">
                    <h1 className="donate-form__header">Podsumowanie Twojej darowizny:</h1>

                    <div className="donate-form__row">
                        <div className="donate-form__group">
                            <h3 className="donate-form__subheader">Oddajesz:</h3>

                            <div className="donate-form__item">
                                <img className="donate-form__icon" src={require("../../assets/Icon-1.svg")} />
                                <p className="donate-form__donationSpecs">{page2.quantity} worków, {page1.itemType}</p>
                            </div>

                            <div className="donate-form__item">
                                <img className="donate-form__icon" src={require("../../assets/Icon-4.svg")} />
                                <p className="donate-form__donationSpecs">dla lokalizacji: {page3.localization}</p>
                            </div>
                        </div>
                    </div>

                    <div className="donate-form__row">
                        <div className="donate-form__group">
                            <h3 className="donate-form__subheader">Adres odbioru:</h3>
                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Ulica</p>
                                <p className="donate-form__deliveryData">{page4.street}</p>
                            </div>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Miasto</p>
                                <p className="donate-form__deliveryData">{page4.city}</p>
                            </div>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Kod pocztowy</p>
                                <p className="donate-form__deliveryData">{page4.code}</p>
                            </div>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Numer telefonu</p>
                                <p className="donate-form__deliveryData">{page4.number}</p>
                            </div>

                        </div>

                        <div className="donate-form__group">
                            <h3 className="donate-form__subheader">Termin odbioru:</h3>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Data</p>
                                <p className="donate-form__deliveryData">{page4.date}</p>
                            </div>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Godzina</p>
                                <p className="donate-form__deliveryData">{page4.hour}</p>
                            </div>

                            <div className="donate-form__item">
                                <p className="donate-form__deliveryData">Uwagi dla&nbsp;kuriera</p>
                                <p className="donate-form__deliveryData">{page4.comments}</p>
                            </div>
                        </div>
                    </div>

                    <div className="donate-form__btn-wrapper">
                        <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                        <button className="donate-form__btn" type="button" onClick={handleAccept}>Potwierdzam</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryPage;