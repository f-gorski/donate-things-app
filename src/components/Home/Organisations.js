import React, { useContext, useState, useEffect } from 'react';
import { getOrgsData } from '../../firebase';

import OrganisationsList from './OrganisationsList';
import Pagination from './Pagination';


const Organisations = (props) => {
    const [orgDesc, setOrgDesc] = useState("");
    const [orgData, setOrgData] = useState([]);
    const [type, setType] = useState('fundacjom');

    const [page, setPage] = useState(1);
    const [orgsPerPage] = useState(3);


    useEffect(() => {
        getOrgsData(type)
            .then((data) => data.filter((element) => {
                return element.name.toLowerCase() === type
            }))
            .then((data) => {
                setOrgData(data[0].items);
                setOrgDesc(data[0].desc);
                setPage(1);
            })
    }, [type])

    const handleClick = (e) => {
        setType(e.target.name);
        console.log(orgData, orgDesc);
    }

    //Get organistaions data for current page
    const idxOfLastOrg = page * orgsPerPage;
    const idxOfFirstOrg = idxOfLastOrg - orgsPerPage;
    const currentOrgData = orgData.slice(idxOfFirstOrg, idxOfLastOrg);

    const paginate = (pageNumber) => setPage(pageNumber);

    return (
        <section id={props.id} className="section section__orgs">
            <div className="container">
                <h2 className="orgs__header">Komu pomagamy?</h2>
                <img src={require('../../assets/Decoration.svg')} className="decoration" />
                <div className="orgs_btns-wrapper">
                    <div className="orgs__btns">
                        <button name="fundacjom" onClick={handleClick} className="orgs__btn">Fundacjom</button>
                        <button name="organizacjom" onClick={handleClick} className="orgs__btn">Organizacjom</button>
                        <button name="zbiórkom" onClick={handleClick} className="orgs__btn"> Zbiórkom</button>
                    </div>
                </div>
                <div className="orgs__text">
                    <p className="orgs__text-paragraph">{orgDesc}</p>
                </div>

                <OrganisationsList orgData={currentOrgData} />
                <Pagination currentPage={page} itemsPerPage={orgsPerPage} totalItems={orgData.length} paginate={paginate} />
            </div>
        </section>
    )
}

export default Organisations;
