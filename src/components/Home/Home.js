import React from 'react';

import Start from './Start';
import Description from './Description';
import About from './About';

const Home = () => {
    return (
        <>
            <Start id="start"/>
            <Description id="desc"/>
            <About id="about"/>
            {/* <Organisations id="orgs"/> */}
        </>
    )
}

export default Home;