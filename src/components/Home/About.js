import React from 'react';

const About = (props) => {
    return (
        <section id={props.id} className="section section__about">
            <div className="about__wrapper">
                <div className="about__text">
                    <h2 className="about__header">O nas</h2>
                    <img src={require('../../assets/Decoration.svg')} className="decoration" alt="" />
                    <p className="about__paragraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={require('../../assets/Signature.png')} className="signature" alt="podpis" />
                </div>
            </div>
            <div className="about__img-wrapper"></div>
        </section>
    )
}

export default About;