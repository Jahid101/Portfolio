import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light p-2 bg-success m-1 rounded">
                <div class="container-fluid">

                    <Link class="navbar-brand d-flex justify-content-center" to="/">
                    <strong>Md Jahid Hasan Anik</strong>
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul style={{ fontSize: '17px' }} class="navbar-nav ms-auto">
                        <li class="nav-item ms-3">
                            <Link class="nav-link active text-light" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ms-3">
                            <Link class="nav-link active text-light" to="/project">Projects</Link>
                        </li>
                        <li class="nav-item ms-3">
                            <Link class="nav-link active text-light" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item ms-3">
                            <Link class="nav-link active text-light" to="/blog">Blogs</Link>
                        </li>
                        <li class="nav-item ms-3">
                            <Link class="nav-link active text-light" to="/contact">Contact</Link>
                        </li>

                        <li style={{ marginRight: '150px' }} class="nav-item ms-4">
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