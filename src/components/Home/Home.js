import React, { useContext } from 'react';

import { AppContext } from '../../App';

import Start from './Start';
import Description from './Description';
import About from './About';

const Home = () => {
    const state = useContext(AppContext);
    console.log(state);
    state.update({dupa: "sdasd"})
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