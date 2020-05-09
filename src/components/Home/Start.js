import React from 'react';

import { Link } from 'react-router-dom';

const Start = (props) => {
    return (
        <section id={props.id}>
            <div className="img-wrapper"></div>
            <header>
                <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div>
                    <Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link>
                    <Link to={'/logowanie'}>Zorganizuj zbiórkę</Link>
                </div>
            </header>
        </section>
    )
}

export default Start;