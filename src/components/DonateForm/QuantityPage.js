import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const QuantityPage = () => {
    const { formState, setFormState, page, setPage } = useContext(FormContext);
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
        <>
            <div className="donate-form__stepTwo">
                <div className="donate-form__important">
                    <h3 className="donate-form__important-header">Ważne</h3>
                    <p className="donate-form__important-text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <Link to="#">TUTAJ</Link>.</p>
                </div>
                <h3 className="donate-form__step-count">Krok 2/4</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="donate-form__header">Podaj liczbę worków 60l, w które spakowałeś/aś rzeczy:</h1>
                    <label>
                        Liczba 60l worków:
                    <select ref={register({ required: "Pole wymagane" })} name="quantity">
                            <option value="0">--wybierz--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <ErrorMessage errors={errors} name="quantity" />
                    </label>
                    <input type="button" onClick={handlePrev} value="Wstecz" />
                    <input type="submit" value="Dalej" />
                </form>
            </div>
        </>
    )
}

export default QuantityPage;