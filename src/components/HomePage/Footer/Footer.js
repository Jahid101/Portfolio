import { faFacebookSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor: '#00022e'}} className="text-center p-5 text-light mt-5 mb-4 m-2 rounded">
                <h1>Address</h1>

                <strong>
                    <div className="mt-5">
                        <p>Matikata, Dhaka Cantonment</p>
                        <p>Dhaka 1206, Bangladesh</p>
                    </div>
                </strong>
                <div>
                    <>
                        <a href="https://www.facebook.com/jahed.anik/" target="_blank" rel="noopener noreferrer">
                            <span className="btn">
                                <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebookSquare} /><span className="ms-2">Facebook</span></button>
                            </span>
                        </a>
                        <a href="https://github.com/Jahid101" target="_blank" rel="noopener noreferrer">
                            <span className="btn">
                                <button className="btn btn-info"><FontAwesomeIcon icon={faGithubSquare} /><span className="ms-2">GitHub</span></button>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/md-jahid-hasan-anik/" target="_blank" rel="noopener noreferrer">
                            <span className="btn">
                                <button className="btn btn-success"><FontAwesomeIcon icon={faLinkedinIn} /><span className="ms-2">LinkedIn</span></button>
                            </span>
                        </a>
                    </>
                </div>
            </div>

            <footer className="text-center mb-3">
                <strong>© Md Jahid Hasan Anik {(new Date()).getFullYear()}</strong>
            </footer>
        </>
    );
};

export default Footer;
