import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { FormContext } from './Donate';

const LocationPage = () => {

    const { formState, setFormState, page, setPage } = useContext(FormContext);
    const { handleSubmit, register, errors} = useForm({
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
        <>
        <div>Krok 3/4</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Lokalizacja</label>
            <select ref={register({required: "Pole wymagane"})} name="localization" >
                <option >--Wybierz--</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
            </select>
            <ErrorMessage errors={errors} name="localization" as="p"/>
            </div>

            <div>
            <ul>
                <li>
                    <label>bezdomnym</label>
                    <input name="homeless" type="checkbox" ref={register}  />
                </li>
                <li>
                    <label>samotnym matkom</label>
                    <input name="mothers" type="checkbox" ref={register}  />
                </li>
                <li>
                    <label>dzieciom</label>
                    <input name="children" type="checkbox" ref={register}  />
                </li>
            </ul>
            </div>

            <div>
            <input name="localizationSpecifics" type="text" ref={register({required: "Pole wymagane"})}/>
            <ErrorMessage errors={errors} name="localization" as="p"/>
            </div>

            <div>
            <input type="button" onClick={handlePrev} value="Wstecz" />
            <input type="submit" value="Dalej" />
            </div>
        </form>
        </>
    )
}

export default LocationPage;