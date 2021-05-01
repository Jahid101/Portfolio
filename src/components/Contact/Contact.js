import { faFacebookSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Email from '../Email/Email';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#2c003f' }} className="text-center p-5 text-light mt-5 mb-4 m-2 rounded row">
            <h1>Contact Me</h1>

            <div className="col-md-6">
                <strong>
                    <div className="mt-5">
                        <p>Matikata, Dhaka Cantonment</p>
                        <p>Dhaka 1206, Bangladesh</p>
                        <p>Phone: +8801744722883</p>
                    </div>
                </strong>
            </div>

            <div className=" mt-5 col-md-6">
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
            </div>

            <div>
                <Email></Email>
            </div>
        </div>
    );
};

export default Contact;
