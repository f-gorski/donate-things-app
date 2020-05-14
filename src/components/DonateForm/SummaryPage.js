import React, { useContext, useState } from 'react';
import { FormContext } from './Donate';

const SummaryPage = () => {

    const { formState, setFormState, page, setPage } = useContext(FormContext);

    const { page1, page2, page3, page4 } = formState;

    const handlePrev = () => setPage((currPage) => currPage - 1);

    const handleAccept = () => {
        //TODO
    }

    return (
        <>
        <h3>Podsumowanie Twojej darowizny</h3>
        <div>
            <h5>Oddajesz:</h5>
            <ul>
                <li>{page2.quantity} worków, {page1.itemType}</li>
                <li>W lokalizacji {page3.localization}</li>
            </ul>
        </div>

        <div>
            <h5>Adres odbioru:</h5>
            <ul>
                <li>Ulica {page4.street}</li>
                <li>Miasto {page4.city}</li>
                <li>Kod pocztowy {page4.code}</li>
                <li>Numer {page4.number}</li>
            </ul>
        </div>

        <div>
            <h5>Termin odbioru:</h5>
            <ul>
                <li>Data {page4.date}</li>
                <li>Godzina {page4.hour}</li>
                <li>Uwagi dla kuriera {page4.comments}</li>
            </ul>
        </div>

        <div>
        <button type="button" onClick={handlePrev}>Wstecz</button>
        <button type="button" onClick={handleAccept}>Potwierdzam</button>
        </div>
        </>
    )
}

export default SummaryPage;