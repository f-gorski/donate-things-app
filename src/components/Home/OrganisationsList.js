import React from 'react';

const OrganisationsList = (props) => {
    const listToRender = props.items.map((element, idx) => {
        return (
            <div key={idx} className="orgs__item">
                <div className="orgs__headers">
                    <h3 className="orgs__header">{element.header}</h3>
                    <h3 classname="orgs__subheader">{element.subheader}</h3>
                </div>
                <div className="orgs__desc">
                    <p>{element.desc}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="orgs__list">
            {listToRender}
        </div>
    )
}

export default OrganisationsList;