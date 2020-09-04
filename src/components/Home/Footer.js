import React from 'react';

const ContactUs = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id={props.id} className="section section__contact">
            <div className="filter-wrapper">
            <div className="container">
                <div className="section__contact--form">
                    <h2>Skontaktuj się z nami</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div>
                        <div>
                            <label>
                                Wpisz swoje imię
                                <input type="text" name="firstName" placeholder="Imię" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Wpisz swój email
                                <input type="email" name="email" placeholder="Email" />
                            </label>
                        </div>
                        </div>
                        <div className="textarea">
                            <label>
                                Wpisz swoją wiadomość
                                <input type="textarea" name="message" placeholder="Treść wiadomości" />
                            </label>
                        </div>
                        <div className="btn-wrapper">
                            <button className="form__btn" type="submit">Wyślij</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
            <div className="footer--bottom">
                <div className="container">
                    <div className="footer--copyright">
                        Copyright by Coders Lab
                    </div>
                    <div className="footer--social-links">
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
                </div>
        </div>
    )

}

export default ContactUs;
