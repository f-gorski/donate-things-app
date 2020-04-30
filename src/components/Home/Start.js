import React from 'react';

const Start = (props) => {
    return (
        <section id={props.id}>
            <div className="img-wrapper"></div>
            <header>
                <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div>
                    <button>Oddaj rzeczy</button>
                    <button>Zorganizuj zbiórkę</button>
                </div>
            </header>
            
        </section>
    )
}

export default Start;