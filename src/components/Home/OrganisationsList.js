import React from 'react';

const OrganisationsList = (props) => {
    const listToRender = props.items.map((element, idx) => {
        return(
            <div key={idx}>
            <h3>{element.header}</h3>
            <h3>{element.subheader}</h3>
            <p>{element.desc}</p>
        </div>
        )
    })
    return (
       listToRender
    )
}

export default OrganisationsList;