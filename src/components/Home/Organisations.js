import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

import Foundations from './Foundations';
import NonGov from './NonGov';
import Collects from './Collects';


const Organisations = (props) => {
    const stateContext = useContext(AppContext);

    // getOrgData = (id) => {
    //     const organisationsRef = Firebase.database().ref(`organisations/${id}`);
    //     organisationsRef.on("value", snapshot => {
    //       const newState = snapshot.val();
    //       update({organisation: newState})
    //     });
    //   };

    //nie ma to być w switchu
    const switchRender = (type) => {
        let typeToRender = null;
        switch(type) {
            case "foundations":
                typeToRender = <Foundations />;
                break;
            case "nonGov":
                typeToRender = <NonGov />;
                break;
            case "collects":
                typeToRender = <Collects />;
                break;
        }
        return typeToRender;
    }

    //alternatywny sposób
    useEffect( () => {
        console.log("zmienił się stateContext.state.type")
    }, [stateContext.state.type])

    return (
        <section id={props.id}>
            <h2>Komu pomagamy?</h2>
            <hr style={{height: "1px", width: "15%"}}/>
            <div>
                <div>
                    {
                    //na kliku ma się odpalić useEffect i w callbacku ma mieć filter na całej liście pobranej z bazy danych wg 'name' i ma zwrócić do state zawartość items które idą do propsów generycznego komponentu który to renderuje
                    }
                    <button onClick={() => stateContext.update({type: "foundations"})}>Fundacjom</button>
                    <button onClick={() => stateContext.update({type: "nonGov"})}>Organizacjom pozarządowym</button>
                    <button onClick={() => stateContext.update({type: "collects"})}>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem ipsum</p>
            </div>
            {switchRender(stateContext.state.type)}
        </section>
    )
}

export default Organisations;
