import React from 'react';

const Step = (props) => {
    return (
        <div>
            <img src={props.data.icon.src} alt={props.data.icon.alt} />
            <h4>{props.data.header}</h4>
            <hr style={{height: "1px", width: "15%"}}/>
            <p>{props.data.text}</p>
        </div>
    )
}

export default Step;