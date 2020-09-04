import React, { useContext, useState, useEffect } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const TypePage = () => {
    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors} = useForm({
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
        <div>Wypełnianie formularza - Krok 1/4</div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <input type="submit" value="Dalej" />
        </form>
        </>
    )
}

export default TypePage;