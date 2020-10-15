import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FormContext } from './Donate';

const QuantityPage = () => {
    const { formState, setFormState, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: formState.page2
    });

    const onSubmit = (data) => {
        setFormState(newState => {
            newState.page2.quantity = data.quantity;
            return newState;
        });
        console.log(formState);
        setPage((currPage) => currPage + 1);
    }

    const handlePrev = () => setPage((currPage) => currPage - 1);

    return (
        <div className="donate-form__stepTwo">
            <div className="donate-form__important">
                <div className="container">
                    <h3 className="donate-form__important-header">Ważne</h3>
                    <p className="donate-form__important-text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <Link to="#" className="donate-form__link">TUTAJ</Link>.</p>
                </div>
            </div>

            <div className="donate-form__form-wrapper">
                <div className="container">
                    <h3 className="donate-form__step-count">Krok 2/4</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="donate-form__header">Podaj liczbę worków 60l, w które spakowałeś/aś rzeczy:</h1>
                        <div className="donate-form__item">
                            <label className="donate-form__label" htmlFor="quantity">Liczba 60l worków:</label>
                            <select className="donate-form__input" ref={register({ required: "Wybierz liczbę" })} name="quantity" id="quantity">
                                <option value="" disabled>— wybierz —</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        
                        {errors.quantity && <p className="donate-form__error-msg">{errors.quantity.message}</p>}

                        <button type="button" className="donate-form__btn" onClick={handlePrev}>Wstecz</button>
                        <button type="submit" className="donate-form__btn">Dalej</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuantityPage;