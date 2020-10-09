import React from 'react';

const FooterLinks = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__copyright">
                    Copyright&copy; {new Date().getFullYear()}
                </div>
                <div className="footer__social-links">
                    <a className="social-links__facebook" href="#"><img src={require('../../assets/Facebook.png')} /></a>
                    <a className="social-links__insta" href="#"><img src={require('../../assets/Instagram.png')} /></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterLinks;