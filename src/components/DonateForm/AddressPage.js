import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const AddressPage = () => {

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
                                    <input className="donate-form__input" name="street" id="street" ref={register({ required: true, pattern: /^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ /.[0-9]+$/ })} />
                                </div>

                                {errors.street?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.street?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podany adres jest nieprawidłowy</p>
                                }

                                {errors.street && <p className="donate-form__error-msg">{errors.street.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="city">Miasto</label>
                                    <input className="donate-form__input" name="city" id="city" ref={register({ required: true, pattern: /^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ [-]+$/ })} />
                                </div>

                                {errors.city?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.city?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podana nazwa miasta jest nieprawidłowa</p>
                                }

                                {errors.city && <p className="donate-form__error-msg">{errors.city.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="code">Kod pocztowy</label>
                                    <input className="donate-form__input" name="code" id="code" placeholder="np. 30-300" ref={register({ required: true, pattern: /^\d{2}-\d{3}$/ })} />
                                </div>

                                {errors.code?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.code?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podany kod pocztowy jest nieprawidłowy</p>
                                }

                                {errors.code && <p className="donate-form__error-msg">{errors.code.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="number">Numer telefonu</label>
                                    <input className="donate-form__input" name="number" id="number" placeholder="np. 123456789" ref={register({ required: true, pattern: /^[0-9\+]{8,13}$/ })} />
                                </div>

                                {errors.number?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.number?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podany numer telefonu jest nieprawidłowy</p>
                                }

                                {errors.number && <p className="donate-form__error-msg">{errors.number.message}</p>}

                            </div>

                            <div className="donate-form__group">
                                <h3 className="donate-form__subheader">Termin odbioru:</h3>
                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="date">Data</label>
                                    <input className="donate-form__input" name="date" id="date" placeholder="np. 01-01-2021" ref={register({ required: true, pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/ })} />
                                </div>

                                {errors.date?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.date?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podana data jest nieprawidłowa</p>
                                }

                                {errors.date && <p className="donate-form__error-msg">{errors.date.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="hour">Godzina</label>
                                    <input className="donate-form__input" name="hour" id="hour" placeholder="np. 09:59" ref={register({ required: true, pattern: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ })} />
                                </div>

                                {errors.hour?.type === 'required' &&
                                    <p className="donate-form__error-msg">Pole wymagane</p>}

                                {errors.hour?.type === 'pattern' &&
                                    <p className="donate-form__error-msg">Podana godzina jest nieprawidłowa</p>
                                }

                                {errors.hour && <p className="donate-form__error-msg">{errors.hour.message}</p>}

                                <div className="donate-form__item">
                                    <label className="donate-form__label" htmlFor="comments">Uwagi dla kuriera</label>
                                    <input className="donate-form__input" name="comments" id="comments" ref={register({ maxLength: 120 })} />
                                </div>


                                {errors.comments?.type === 'maxLength' &&
                                    <p className="donate-form__error-msg">Przekroczono limit 120 znaków</p>
                                }

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