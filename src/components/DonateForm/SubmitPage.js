import React from 'react';

const SubmitPage = () => {


    return (
        <div className="donate-form__stepSubmit">
                <div className="container">
                    <div className="donate-form__submitSuccess">
                        <h1 className="donate-form__header">Dziękujemy za przesłanie formularza <br/> Na maila prześlemy wszelkie <br/> informacje o odbiorze.</h1>
                        <img className="decoration" src={require('../../assets/Decoration.svg')} />
                    </div>
                </div>        
        </div>
    )
}

export default SubmitPage;