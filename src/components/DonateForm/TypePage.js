import React, { useContext, useState, useEffect } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const TypePage = () => {
    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: formState.page1
    });

    const onSubmit = (data) => {
        console.log(data)
        setFormState(newState => {
            newState.page1 = data;
            return newState;
        });
        console.log(formState);
        setPage((currPage) => currPage + 1);
    }

    return (
        <>
            <div className="donate-form__stepOne">
                <div className="donate-form__important">
                    <h3 className="donate-form__important-header">Ważne</h3>
                    <p className="donate-form__important-text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
                <h3 className="donate-form__step-count">Krok 1/4</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="donate-form__header">Zaznacz co chcesz oddać:</h1>
                    <div>
                        <label>ubrania, które nadają się do ponownego użycia</label>
                        <input type="radio" name="itemType" ref={register} value="ubrania dobre" />
                    </div>
                    <div>
                        <label>ubrania do wyrzucenia</label>
                        <input type="radio" name="itemType" ref={register} value="ubrania do wyrzucenia" />
                    </div>
                    <div>
                        <label>zabawki</label>
                        <input type="radio" name="itemType" ref={register} value="zabawki" />
                    </div>
                    <div>
                        <label>książki</label>
                        <input type="radio" name="itemType" ref={register} value="książki" />
                    </div>

                    <div>
                        <label>inne</label>
                        <input type="radio" name="itemType" ref={register} value="inne" />
                    </div>

                    <button type="submit">Dalej</button>
                </form>
            </div>
        </>
    )
}

export default TypePage;