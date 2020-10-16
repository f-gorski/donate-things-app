import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ContactUs = (props) => {

    const { handleSubmit, register, errors } = useForm();

    const TEXTAREA_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat";

    //When form is not submitted yet, sendSuccess is null, at submit is set to either true or false in resultSubmit function depending on the outcome 
    const [sendSuccess, setSendSuccess] = useState(null);

    const onSubmit = (data, e) => {
        e.preventDefault();

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    setSendSuccess(true);
                    e.target.reset();
                } else {
                    setSendSuccess(false);
                }
            })
    }

    const resultSubmit = () => {
        if(sendSuccess === true) {
            return <p className="contact-form__successMsg">{"Wiadomość została wysłana! Wkrótce się skontaktujemy."}</p>
        } else if(sendSuccess === false) {
            return <p className="contact-form__failMsg">{"Błąd przy wysyłaniu wiadomości"}</p>
        }
    }

    return (
        <section id={props.id} className="section section__contact">
            <div className="filter-wrapper">
                <div className="container">
                    <div className="section__contact-form">
                        <h2 className="contact-form__header">Skontaktuj się z nami</h2>
                        <img src={require('../../assets/Decoration.svg')} className="decoration" alt=""/>

                        {resultSubmit()}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="contact-form__credentials">
                                <label htmlFor="name" className="contact-form__label">
                                    Wpisz swoje imię
                                <input type="text" name="name" id="name" placeholder="Imię" autoComplete="off" className="contact-form__input contact-form__input--focused" ref={register({ required: true, pattern: /^[A-Za-z]+$/ })} />
                                    {errors.name?.type === 'required' && 
                                    <p className="contact-form__error-msg">Pole wymagane</p>}

                                    {errors.name?.type === 'pattern' && 
                                    <p className="contact-form__error-msg">Podane imię jest nieprawidłowe!</p>}
                                </label>

                                <label htmlFor="email" className="contact-form__label">
                                    Wpisz swój email
                                <input type="text" inputMode="email" name="email" id="email" placeholder="Email" autoComplete="off" className="contact-form__input contact-form__input--focused" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                                    {errors.email?.type === 'required' && 
                                    <p className="contact-form__error-msg">Pole wymagane</p>}

                                    {errors.email?.type === 'pattern' && 
                                    <p className="contact-form__error-msg">Podany email jest nieprawidłowy!</p>}
                                </label>

                            </div>

                            <div className="contact-form__message">
                                <label className="contact-form__label textarea">
                                    Wpisz swoją wiadomość
                                <textarea cols="10" rows="5" name="message" placeholder={TEXTAREA_PLACEHOLDER} className="contact-form__input contact-form__input--focused" ref={register({ required: true, minLength: 120 })} />
                                    {errors.message?.type === 'required' && 
                                    <p className="contact-form__error-msg">Pole wymagane</p>}

                                    {errors.message?.type === 'minLength' && 
                                    <p className="contact-form__error-msg">Wiadomość musi mieć co najmniej 120 znaków!</p>}
                                </label>
                            </div>
                            <div className="btn-wrapper">
                                <button className="form__btn" type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactUs;