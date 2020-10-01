import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

import OrganisationsList from './OrganisationsList';


const Organisations = (props) => {
    const { getData } = useContext(AppContext);

    const [items, setItems] = useState(false);
    const [type, setType] = useState('fundacjom');

    useEffect(() => {
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
                <p className="orgs__text-paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
            </div>


            {items ? <OrganisationsList items={items} /> : null}
        </section>
    )
}

export default Organisations;
