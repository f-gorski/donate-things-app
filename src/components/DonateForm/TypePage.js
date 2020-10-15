import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FormContext } from './Donate';

const TypePage = () => {
    const { formState, setFormState, setPage } = useContext(FormContext);
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
                    <div className="container">
                        <h3 className="donate-form__important-header">Ważne</h3>
                        <p className="donate-form__important-text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>
                </div>
                <div className="donate-form__form-wrapper">
                    <div className="container">
                        <h3 className="donate-form__step-count">Krok 1/4</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="donate-form__header">Zaznacz co chcesz oddać:</h1>
                            <div className="donate-form__item">
                                <input className="donate-form__input" type="radio" name="itemType" ref={register({required: "Zaznacz jedno z pól"})} value="ubrania dobre" id="clotheGood" />
                                <label className="donate-form__label" htmlFor="clothesGood">ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className="donate-form__item">
                                <input className="donate-form__input" type="radio" name="itemType" ref={register({required: "Zaznacz jedno z pól"})} value="ubrania do wyrzucenia" id="clothesBad" />
                                <label className="donate-form__label" htmlFor="clothesBad">ubrania do wyrzucenia</label>
                            </div>
                            <div className="donate-form__item">
                                <input className="donate-form__input" type="radio" name="itemType" ref={register({required: "Zaznacz jedno z pól"})} value="zabawki" id="toys" />
                                <label className="donate-form__label" htmlFor="toys">zabawki</label>
                            </div>
                            <div className="donate-form__item">
                                <input className="donate-form__input" type="radio" name="itemType" ref={register({required: "Zaznacz jedno z pól"})} value="książki" id="books" />
                                <label className="donate-form__label" htmlFor="books">książki</label>
                            </div>

                            <div className="donate-form__item">
                                <input className="donate-form__input" type="radio" name="itemType" ref={register({required: "Zaznacz jedno z pól"})} value="inne" id="other" />
                                <label className="donate-form__label" htmlFor="other">inne</label>
                            </div>

                            {errors.itemType && <p className="donate-form__error-msg">{errors.itemType.message}</p>}

                            <button className="donate-form__btn" type="submit">Dalej</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypePage;