import React from 'react';

const Column = (props) => {
    return (
        <div className="column">
            <h1>{props.data.counter}</h1>
            <h2>{props.data.header}</h2>
            <p>{props.data.text}</p>
        </div>
    )
}

export default Column;