import React, { useContext, useState } from 'react';
import { FormContext } from './Donate';

const SummaryPage = () => {

    const { formState, setFormState, page, setPage } = useContext(FormContext);

    const { page1, page2, page3, page4 } = formState;

    const handlePrev = () => setPage((currPage) => currPage - 1);

    const handleAccept = () => {
        alert("Formularz wysłany, dziekujemy!");
    }

    return (
        <>
            <h3 className="donate-form__header">Podsumowanie Twojej darowizny</h3>
            <div className="donate-form__typeDetails">
                <h4 className="donate-form__subheader">Oddajesz:</h4>
                <ul>
                    <li className="donate-form__list-item">
                        <p className="list-item__paragraph">{page2.quantity} worków, {page1.itemType}</p>
                    </li>

                    <li className="donate-form__list-item">
                        <p className="list-item__paragraph">W lokalizacji {page3.localization}</p>
                    </li>
                </ul>
            </div>

            <div className="donate-form__deliveryDetails">
                <div className="donate-form__address">
                    <h4 className="donate-form__subheader">Adres odbioru:</h4>
                    <ul className="donate-form__list">
                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Ulica</p>
                            <p className="list-item__paragraph">{page4.street}</p>
                        </li>

                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Miasto</p>
                            <p className="list-item__paragraph">{page4.city}</p>
                        </li>

                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Kod pocztowy</p>
                            <p className="list-item__paragraph">{page4.code}</p>
                        </li>

                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Numer</p>
                            <p className="list-item__paragraph">{page4.number}</p>
                        </li>
                    </ul>
                </div>

                <div className="donate-form__date">
                    <h4 className="donate-form__subheader">Termin odbioru:</h4>
                    <ul>
                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Data</p>
                            <p className="list-item__paragraph">{page4.date}</p>
                        </li>

                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Godzina</p>
                            <p className="list-item__paragraph">{page4.hour}</p>
                        </li>

                        <li className="donate-form__list-item">
                            <p className="list-item__paragraph">Uwagi dla kuriera</p>
                            <p className="list-item__paragraph">{page4.comments}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                <button className="donate-form__btn" type="button" onClick={handleAccept}>Potwierdzam</button>
            </div>
        </>
    )
}

export default SummaryPage;