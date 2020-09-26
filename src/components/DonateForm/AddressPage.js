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
                <div className="container">
                    <h3 className="donate-form__important-header">Ważne!</h3>
                    <p className="donate-form__important-text">Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
            </div>

            <div className="donate-form__form-wrapper">
                <div className="container">
                    <h3 className="donate-form__step-count">Krok 4/4</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="donate-form__header">Podaj adres oraz termin odbioru przez kuriera:</h1>

                        <div className="donate-form__row">
                            <div className="donate-form__group">
                                <h3 className="donate-form__subheader">Adres odbioru:</h3>
                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="street">Ulica</label>
                                    <input className="donate-form__input" name="street" id="street" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.street && <p className="donate-form__error-msg">{errors.street.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="city">Miasto</label>
                                    <input className="donate-form__input" name="city" id="city" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.city && <p className="donate-form__error-msg">{errors.city.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="code">Kod pocztowy</label>
                                    <input className="donate-form__input" name="code" id="code" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.code && <p className="donate-form__error-msg">{errors.code.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="number">Numer telefonu</label>
                                    <input className="donate-form__input" name="number" id="number" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.number && <p className="donate-form__error-msg">{errors.number.message}</p>}

                            </div>

                            <div className="donate-form__group">
                                <h3 className="donate-form__subheader">Termin odbioru:</h3>
                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="date">Data</label>
                                    <input className="donate-form__input" name="date" id="date" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.date && <p className="donate-form__error-msg">{errors.date.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="hour">Godzina</label>
                                    <input className="donate-form__input" name="hour" id="hour" ref={register({ required: "Pole wymagane" })} />
                                </div>

                                {errors.hour && <p className="donate-form__error-msg">{errors.hour.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="comments">Uwagi dla kuriera</label>
                                    <input className="donate-form__input" name="comments" id="code" ref={register()} />
                                </div>

                            </div>
                        </div>

                        <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                        <button className="donate-form__btn" type="submit">Dalej</button>

                    </form>
                </div>
            </div >
        </div>
    )
}

export default AddressPage;