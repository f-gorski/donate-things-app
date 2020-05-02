import React from 'react';
import { Link } from 'react-router-dom';

import Step from './Step';

const stepsData = [
    {
        icon: {
            src: null,
            alt: "ikona ubranie"
        },
        header: "Wybierz rzeczy",
        text: "ubrania, zabawki, sprzęt i inne"
    },
    {
        icon: {
            src: null,
            alt: "ikona torba"
        },
        header: "Spakuj je",
        text: "Skorzystaj z worków na śmieci"
    },
    {
        icon: {
            src: null,
            alt: "ikona lupa"
        },
        header: "Zdecyduj komu chcesz pomóc",
        text: "wybierz zaufane miejsce"
    },
    {
        icon: {
            src: null,
            alt: "ikona transfer"
        },
        header: "Zamów kuriera",
        text: "kurier przyjedzie w dogodnym terminie"
    }
]

const SimpleSteps = (props) => {
    const stepsToRender = stepsData.map( (step) => <Step data={step} />)

    return (
        <>
        <div>
            <h3>Wystarczą 4 proste kroki</h3>
            <hr style={{height: "1px", width: "15%"}}/>
        </div>
        <div className={props.className}>
            {stepsToRender}
        </div>
        <Link to='/logowanie'>
            ODDAJ RZECZY
        </Link>
        </>
    )
}

export default SimpleSteps;
