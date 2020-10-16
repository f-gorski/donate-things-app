import React from 'react';

const OrganisationsList = (props) => {
    const listToRender = props.orgData.map((element, idx) => {
        return (
            <div key={idx} className="org__item">
                <div className="org__headers">
                    <h3 className="org__header">{element.header}</h3>
                    <h3 className="org__subheader">{element.subheader}</h3>
                </div>
                <div className="org__desc">
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