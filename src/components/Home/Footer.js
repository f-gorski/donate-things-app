import React from 'react';

const ContactUs = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id={props.id} className="section section__contact">
            <div className="filter-wrapper">
                <div className="container">
                    <div className="section__contact-form">
                        <h2 className="contact-form__header">Skontaktuj się z nami</h2>
                        <img src={require('../../assets/Decoration.svg')} className="decoration" />
                        <form onSubmit={handleSubmit}>
                            <div className="contact-form__credentials">
                                <label className="contact-form__label">
                                    Wpisz swoje imię
                                <input type="text" name="firstName" placeholder="Imię" className="contact-form__input contact-form__input--focused" />
                                </label>

                                <label className="contact-form__label">
                                    Wpisz swój email
                                <input type="email" name="email" placeholder="Email" className="contact-form__input contact-form__input--focused" />
                                </label>
                            </div>

                            <div className="contact-form__message">
                                <label className="contact-form__label textarea">
                                    Wpisz swoją wiadomość
                                <input type="textarea" name="message" placeholder="Treść wiadomości" className="contact-form__input contact-form__input--focused" />
                                </label>
                            </div>
                            <div className="btn-wrapper">
                                <button className="form__btn" type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__copyright">
                            Copyright by Coders Lab
                    </div>
                        <div className="footer-bottom__social-links">
                            <a className="social-links__facebook" href="#"><img src={require('../../assets/Facebook.png')} /></a>
                            <a className="social-links__insta" href="#"><img src={require('../../assets/Instagram.png')} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactUs;
