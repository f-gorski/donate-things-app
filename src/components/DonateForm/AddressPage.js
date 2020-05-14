import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const AddressPage = () => {

    const inputAddressItems = [
        {id: 1, type: "text", label: "Ulica", name: "street"},
        {id: 2, type: "text", label: "Miasto", name: "city"},
        {id: 3, type: "text", label: "Kod pocztowy", name: "code"},
        {id: 4, type: "text", label: "Numer", name: "number"}
    ]

    const inputDateItems = [
        {id: 5, type: "text", label: "Data", name: "date"},
        {id: 6, type: "text", label: "Godzina", name: "hour"},
        {id: 7, type: "textarea", label: "Uwagi dla kuriera", name: "comments"}
    ]

    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors} = useForm({
        defaultValues: formState.page4
    });

    const onSubmit = (data) => {
        setFormState(newState => {
            newState.page4 = data;
            return newState;
        });
        console.log(formState);
        data ? setPage((currPage) => currPage + 1) : alert("Wpisz dane");
    }

    const handlePrev = () => setPage((currPage) => currPage - 1);

    return (
        <>
        <div>Krok 4/4</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Podaj adres oraz termin odbioru przez kuriera</h3>
                <h4>Lokalizacja</h4>
                <ul>
                    <li>
                        <label>Ulica</label>
                        <input name="street" ref={register({required: "Pole wymagane"})} />
                        <ErrorMessage errors={errors} name="street" as="p" />
                    </li>
                    <li>    
                        <label>Miasto</label>
                        <input ref={register({required: "Pole wymagane"})} name="city" />
                        <ErrorMessage errors={errors} name="city" as="p" />
                    </li>
                    <li>
                        <label>Kod pocztowy</label>
                        <input ref={register({required: "Pole wymagane"})} name="code" />
                        <ErrorMessage errors={errors} name="code" as="p" />
                    </li>
                    <li>
                        <label>Numer</label>
                        <input ref={register({required: "Pole wymagane"})} name="number"  />
                        <ErrorMessage errors={errors} name="number" as="p" />
                    </li> 
                </ul>
            </div>
            <div>
                <h4>Termin odbioru</h4>

                <ul>
                    <li>
                        <label>Data</label>
                        <input ref={register({required: "Pole wymagane"})} name="date" />
                        <ErrorMessage errors={errors} name="date" as="p" />
                    </li>
                    <li>
                        <label>Godzina</label>
                        <input ref={register({required: "Pole wymagane"})} name="hour" />
                        <ErrorMessage errors={errors} name="hour" as="p" />
                    </li>
                    <li>
                        <label>Uwagi dla kuriera</label>
                        <input ref={register({required: "Pole wymagane"})} type="textarea" name="comments" />
                        <ErrorMessage errors={errors} name="comments" as="p" />
                    </li>
                </ul>
            </div>
            <input type="button" onClick={handlePrev} value="Wstecz" />
            <input type="submit" value="Dalej" />
        </form>
        </>
    )
}

export default AddressPage;