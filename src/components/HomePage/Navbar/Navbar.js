import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success m-2 rounded">
            <div class="container-fluid">
                <Link class="navbar-brand text-light" to="/home"><strong>Md Jahid Hasan Anik</strong></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul style={{ fontSize: '17px' }} class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active text-light" to="/project">Projects</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active text-light" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active text-light" to="/blog">Blogs</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active text-light" to="/contact">Contact</Link>
                        </li>

                        <li style={{ marginLeft: '200px', marginRight: '150px' }}>
                            <a href="https://www.facebook.com/jahed.anik/" target="_blank" rel="noopener noreferrer">
                                <span className="btn bg-light rounded">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </span>
                            </a>
                            <a href="https://github.com/Jahid101" target="_blank" rel="noopener noreferrer">
                                <span className="btn bg-light rounded ms-2">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/md-jahid-hasan-anik/" target="_blank" rel="noopener noreferrer">
                                <span className="btn bg-light rounded ms-2">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;