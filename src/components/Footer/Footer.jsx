import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Enmanuel Bayen'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/enmanuelbayen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/enmanuelbayen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/boosteddude/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);