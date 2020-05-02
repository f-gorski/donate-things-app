import React from 'react';

import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';

const Description = (props) => {
    
    return (
        <>
        <section id={props.id}>
            <ThreeColumns className={"three-columns"} />
        </section>
        <section>
            <SimpleSteps className={"simple-steps"} />
        </section>
        </>
    )
    
}

export default Description;
