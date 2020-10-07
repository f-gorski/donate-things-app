import React, { useContext, useState, useEffect } from 'react';
import { getOrgsData } from '../../firebase';

import OrganisationsList from './OrganisationsList';


const Organisations = (props) => {
    const [orgData, setOrgData] = useState(false);
    const [type, setType] = useState('fundacjom');

    useEffect(() => {
        getOrgsData(type)
            .then((data) => data.filter((element) => {
                return element.name.toLowerCase() === type
            }))
            .then((data) => {
                setOrgData({...data[0]});
            })
    }, [type])

    const handleClick = (e) => {
        setType(e.target.name);
        console.log(orgData)
    }

    return (
        <section id={props.id} className="section section__orgs">
            <h2 className="orgs__header">Komu pomagamy?</h2>
            <img src={require('../../assets/Decoration.svg')} className="decoration"/>
            <div className="orgs_btns-wrapper">
                <div className="orgs__btns">
                    <button name="fundacjom" onClick={handleClick} className="orgs__btn">Fundacjom</button>
                    <button name="organizacjom" onClick={handleClick} className="orgs__btn">Organizacjom</button>
                    <button name="zbiórkom" onClick={handleClick} className="orgs__btn"> Zbiórkom</button>
                </div>
            </div>
            <div className="orgs__text">
                <p className="orgs__text-paragraph">{orgData.desc}</p>
            </div>


            {orgData ? <OrganisationsList orgData={orgData} /> : null}
        </section>
    )
}

export default Organisations;
