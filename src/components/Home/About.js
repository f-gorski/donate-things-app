import React from 'react';

const About = (props) => {
    return (
        <section id={props.id}>
            <>
            <div>
                <h2>O nas</h2>
                <hr style={{height: "1px", width: "15%"}}/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>
            <div className="img-wrapper about"></div>
            </>
        </section>
    ) 
}

export default About;