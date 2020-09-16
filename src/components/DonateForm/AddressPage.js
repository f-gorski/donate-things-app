import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const AddressPage = () => {

    const inputAddressItems = [
        { id: 1, type: "text", label: "Ulica", name: "street" },
        { id: 2, type: "text", label: "Miasto", name: "city" },
        { id: 3, type: "text", label: "Kod pocztowy", name: "code" },
        { id: 4, type: "text", label: "Numer", name: "number" }
    ]

    const inputDateItems = [
        { id: 5, type: "text", label: "Data", name: "date" },
        { id: 6, type: "text", label: "Godzina", name: "hour" },
        { id: 7, type: "textarea", label: "Uwagi dla kuriera", name: "comments" }
    ]

    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors } = useForm({
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
        <div className="donate-form__stepFour">
            <div className="donate-form__important">
                <h3 className="donate-form__important-header">Ważne</h3>
                <p className="donate-form__important-text">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <h3 className="donate-form__step-count">Krok 4/4</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="donate-form__box">
                    <h3 className="donate-form__header">Podaj adres oraz termin odbioru przez kuriera</h3>
                    <h4 className="donate-form__subheader">Lokalizacja</h4>
                    <ul>
                        <li>
                            <label>Ulica</label>
                            <input name="street" ref={register({ required: "Pole wymagane" })} />
                            <ErrorMessage errors={errors} name="street" as="p" />
                        </li>
                        <li>
                            <label>Miasto</label>
                            <input ref={register({ required: "Pole wymagane" })} name="city" />
                            <ErrorMessage errors={errors} name="city" as="p" />
                        </li>
                        <li>
                            <label>Kod pocztowy</label>
                            <input ref={register({ required: "Pole wymagane" })} name="code" />
                            <ErrorMessage errors={errors} name="code" as="p" />
                        </li>
                        <li>
                            <label>Numer</label>
                            <input ref={register({ required: "Pole wymagane" })} name="number" />
                            <ErrorMessage errors={errors} name="number" as="p" />
                        </li>
                    </ul>
                </div>
                <div className="donate-form__box">
                    <h4 className="donate-form__subheader">Termin odbioru</h4>

                    <ul>
                        <li>
                            <label className="donate-form__label">Data</label>
                            <input className="donate-form__input" ref={register({ required: "Pole wymagane" })} name="date" />
                            <ErrorMessage errors={errors} name="date" as="p" />
                        </li>
                        <li>
                            <label className="donate-form__label">Godzina</label>
                            <input className="donate-form__input" ref={register({ required: "Pole wymagane" })} name="hour" />
                            <ErrorMessage errors={errors} name="hour" as="p" />
                        </li>
                        <li>
                            <label className="donate-form__label">Uwagi dla kuriera</label>
                            <input className="donate-form__input" ref={register({ required: "Pole wymagane" })} type="textarea" name="comments" />
                            <ErrorMessage errors={errors} name="comments" as="p" />
                        </li>
                    </ul>
                </div>
                <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                <button className="donate-form__btn" type="submit">Dalej</button>
            </form>
        </div>
    )
}

export default AddressPage;