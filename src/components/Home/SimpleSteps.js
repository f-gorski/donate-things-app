import React from 'react';
import { Link } from 'react-router-dom';

import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';

import Step from './Step';

const STEPS_DATA = [
    {
        icon: {
            src: Icon1,
            alt: "ikona ubranie"
        },
        header: "Wybierz rzeczy",
        text: "ubrania, zabawki, sprzęt i inne"
    },
    {
        icon: {
            src: Icon2,
            alt: "ikona torba"
        },
        header: "Spakuj je",
        text: "Skorzystaj z worków na śmieci"
    },
    {
        icon: {
            src: Icon3,
            alt: "ikona lupa"
        },
        header: "Zdecyduj komu chcesz pomóc",
        text: "wybierz zaufane miejsce"
    },
    {
        icon: {
            src: Icon4,
            alt: "ikona transfer"
        },
        header: "Zamów kuriera",
        text: "kurier przyjedzie w dogodnym terminie"
    }
]

const SimpleSteps = (props) => {
    const stepsToRender = STEPS_DATA.map( (step, idx) => <Step data={step} key={idx} />)

    return (
        <>
        <div className="steps__header">
            <h3 className="header__text">Wystarczą 4 proste kroki</h3>
            <img src={require('../../assets/Decoration.svg')} className="decoration" alt=""/>
        </div>
        <div className={props.className}>
            <div className="container">
                <div className="steps__bar">
                    {stepsToRender}
                </div>
            
            </div>
        </div>
        <div className="steps__btn-wrapper">
            <button className="steps__button">
                <Link to='/oddaj-rzeczy' className="steps__link">ODDAJ RZECZY</Link>
            </button>
        </div>
        </>
    )
}

export default SimpleSteps;
