import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const LocationPage = () => {

    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: formState.page3
    });

    const onSubmit = (data) => {
        setFormState(newState => {
            newState.page3 = data;
            return newState;
        });
        console.log(formState);
        setPage((currPage) => currPage + 1);
    }

    const handlePrev = () => setPage((currPage) => currPage - 1);

    return (
        <div className="donate-form__stepThree">
            <div className="donate-form__important">
                <div className="container">
                    <h3 className="donate-form__important-header">Ważne</h3>
                    <p className="donate-form__important-text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
            </div>

            <div className="donate-form__form-wrapper">
                <div className="container">
                    <h3 className="donate-form__step-count">Krok 3/4</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="donate-form__header">Lokalizacja:</h1>
                        <div className="donate-form__group">
                            <div className="donate-form__item">
                                <select className="donate-form__input--select" ref={register({ required: "Pole wymagane" })} name="localization" id="localization" >
                                    <option value="" disabled>— wybierz —</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                </select>
                                <ErrorMessage errors={errors} name="localization" as="p" />
                            </div>
                        </div>

                        <div className="donate-form__group">
                            <h3 className="donate-form__subheader">Komu chcesz pomóc?</h3>

                            <div className="donate-form__row">
                                <div className="donate-form__item">
                                    <input className="donate-form__input--checkbox" name="children" id="children" type="checkbox" ref={register} />
                                    <label className="donate-form__label" htmlFor="children">dzieciom</label>
                                </div>

                                <div className="donate-form__item">
                                    <input className="donate-form__input--checkbox" name="mothers" id="mothers" type="checkbox" ref={register} />
                                    <label className="donate-form__label" htmlFor="mothers">samotnym matkom</label>
                                </div>

                                <div className="donate-form__item">
                                    <input className="donate-form__input--checkbox" name="homeless" id="homeless" type="checkbox" ref={register} />
                                    <label className="donate-form__label"
                                        htmlFor="homeless">bezdomnym</label>
                                </div>

                            </div>

                            <div className="donate-form__row">
                                <div className="donate-form__item">
                                    <input className="donate-form__input--checkbox" name="disabled" id="disabled" type="checkbox" ref={register} />
                                    <label className="donate-form__label" htmlFor="disabled">niepełnosprawnym</label>
                                </div>

                                <div className="donate-form__item">
                                    <input className="donate-form__input--checkbox" name="elder" id="elder" type="checkbox" ref={register} />
                                    <label className="donate-form__label" htmlFor="elder">osobom starszym</label>
                                </div>
                            </div>
                        </div>

                        <div className="donate-form__group">
                            <h3 className="donate-form__subheader">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            <input className="donate-form__input--text" name="localizationSpecifics" type="text" ref={register()} />
                        </div>

                        <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                        <button className="donate-form__btn" type="submit">Dalej</button>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default LocationPage;