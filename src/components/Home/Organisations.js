import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';

import OrganisationsList from './OrganisationsList';


const Organisations = (props) => {
    const {getData} = useContext(AppContext);

    const [items, setItems] = useState(false);
    const [type, setType] = useState('fundacjom');

    useEffect( () => {
        getData(type)
            .then((data) => data.filter((element) => {
                return element.name.toLowerCase() === type
            }))
            .then((data) => {
                setItems([...data[0].items]);
            })
    }, [type])

    const handleClick = (e) => {
        setType(e.target.name);
        console.log(items)
    }

    return (
        <section id={props.id}>
            <h2>Komu pomagamy?</h2>
            <hr style={{height: "1px", width: "15%"}}/>
            <div>
                <div>
                    <button name="fundacjom" onClick={handleClick}>Fundacjom</button>
                    <button name="organizacjom" onClick={handleClick}>Organizacjom pozarządowym</button>
                    <button name="zbiórkom" onClick={handleClick}>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem ipsum</p>
            </div>

            {items ? <OrganisationsList items={items} /> : null}
        </section>
    )
}

export default Organisations;
