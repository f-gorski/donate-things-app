import React from 'react';

const Column = (props) => {
    return (
        <div className="description__column">
            <h3 className="column__header">{props.data.counter}</h3>
            <h4 className="column__subheader">{props.data.header}</h4>
            <p className="column__text">{props.data.desc}</p>
        </div>
    )
}

export default Column;