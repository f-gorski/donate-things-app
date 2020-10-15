import React from 'react';

import { Link } from 'react-router-dom';

const Start = (props) => {
    return (
        
            <section id={props.id} className="section section__start">
                <div className="container">
                <div className="img-wrapper"></div>
                <div className="call-to-action">
                    <h1 className="call-to-action__header">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={require('../../assets/Decoration.svg')} className="decoration" alt=""/>
                    <div className="call-to-action__links">
                        <button className="call-to-action__button donate">
                            <Link to={'/oddaj-rzeczy'} className="call-to-action__link">ODDAJ RZECZY</Link>
                        </button>
                        <button className="call-to-action__button organize">
                            <Link to={'/logowanie'} className="call-to-action__link">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </button>
                    </div>
                </div>
                </div>
            </section>
        
    )
}

export default Start;