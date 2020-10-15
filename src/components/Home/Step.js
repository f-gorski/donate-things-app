import React from 'react';

const Step = (props) => {
    return (
        <div className="steps__step">
            <img src={props.data.icon.src} alt={props.data.icon.alt} className="step__icon" alt="ikona krok"/>
            <h4 className="step__header">{props.data.header}</h4>
            <hr className="decoration-line"/>
            <p className="step__text">{props.data.text}</p>
        </div>
    )
}

export default Step;