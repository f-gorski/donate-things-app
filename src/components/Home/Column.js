import React from 'react';

const Column = (props) => {
    return (
        <div className="column">
            <h3>{props.data.counter}</h3>
            <h4>{props.data.header}</h4>
            <p>{props.data.text}</p>
        </div>
    )
}

export default Column;