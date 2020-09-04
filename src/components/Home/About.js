import React from 'react';

const About = (props) => {
    return (
        <section id={props.id} className="section section__about">
            <>
                <div className="about__wrapper">
                    <div className="about--text">
                        <h2>O nas</h2>
                        <hr style={{ height: "1px", width: "15%" }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                </div>
                <div className="about__img-wrapper"></div>
            </>
        </section>
    )
}

export default About;