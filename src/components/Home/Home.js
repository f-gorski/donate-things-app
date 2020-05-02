import React from 'react';

import Start from './Start';
import Description from './Description';
import About from './About';
import Organisations from './Organisations'

const Home = () => {
    
    return (
        <>
            <Start id="start"/>
            <Description id="desc"/>
            <About id="about"/>
            <Organisations id="orgs"/>
        </>
    )
}

export default Home;