import React from 'react';

import Start from './Start';
import Description from './Description';
import About from './About';
import Organisations from './Organisations';
import Footer from './Footer';

const Home = () => {
    
    return (
        <>
            <Start id="start"/>
            <Description id="desc"/>
            <About id="about"/>
            <Organisations id="orgs"/>
            <Footer id="contact"/>
        </>
    )
}

export default Home;