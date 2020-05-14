import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const QuantityPage = () => {
    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors} = useForm({
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
        <div>Strona 2/4 formularza</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Podaj liczbę worków 60l, w które spakowałeś/aś rzeczy:
          <select ref={register({required: "Pole wymagane"})} name="quantity">
            <option value="0">Wybierz</option>
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
        </>
    )
}

export default QuantityPage;