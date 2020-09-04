import React from 'react';

import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';

const Description = (props) => {
    
    return (
        <>
        <section id={props.id} className="section section__desc">
            <div className="container">
                <ThreeColumns className={"section__three-columns"} />
            </div>
            
        </section>
        <section className="section steps">
            <SimpleSteps className={"steps__simple-steps"} />
        </section>
        </>
    )
    
}

export default Description;
