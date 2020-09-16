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
        <>
            <div className="donate-form__stepThree">
                <div className="donate-form__important">
                    <h3 className="donate-form__important-header">Ważne</h3>
                    <p className="donate-form__important-text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
                <h3 className="donate-form__step-count">Krok 3/4</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="donate-form__header">Lokalizacja:</h1>
                    <div>
                        <label>Lokalizacja</label>
                        <select ref={register({ required: "Pole wymagane" })} name="localization" >
                            <option >--wybierz--</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                        </select>
                        <ErrorMessage errors={errors} name="localization" as="p" />
                    </div>

                    <div>
                        <h3 className="donate-form__subheader">Komu chcesz pomóc?</h3>
                        <ul>
                            <li>
                                <label>bezdomnym</label>
                                <input name="homeless" type="checkbox" ref={register} />
                            </li>
                            <li>
                                <label>samotnym matkom</label>
                                <input name="mothers" type="checkbox" ref={register} />
                            </li>
                            <li>
                                <label>dzieciom</label>
                                <input name="children" type="checkbox" ref={register} />
                            </li>
                            <li>
                                <label>niepełnosprawnym</label>
                                <input name="disabled" type="checkbox" ref={register} />
                            </li>
                            <li>
                                <label>osobom starszym</label>
                                <input name="elder" type="checkbox" ref={register} />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <input name="localizationSpecifics" type="text" ref={register()} />
                        <ErrorMessage errors={errors} name="localization" as="p" />
                    </div>

                    <div>
                        <button className="donate-form__btn" type="button" onClick={handlePrev}>Wstecz</button>
                        <button className="donate-form__btn" type="submit">Dalej</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LocationPage;