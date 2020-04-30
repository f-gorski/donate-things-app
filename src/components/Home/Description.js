import React from 'react';

import ThreeColumns from './ThreeColumns';

const Description = (props) => {
    return (
        <section id={props.id}>
            <ThreeColumns className={"three-columns"} />
        </section>
    )
    
}

export default Description;
