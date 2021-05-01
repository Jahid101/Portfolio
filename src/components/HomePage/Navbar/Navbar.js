import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active" to="#about">About</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active" to="/project">Projects</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active" to="/blog">Blogs</Link>
                        </li>
                        <li class="nav-item ms-4">
                            <Link class="nav-link active" to="/contact">Contact</Link>
                        </li>

                        <li style={{marginLeft: '250px', marginRight: '150px'}}>
                            <a href="https://www.facebook.com/jahed.anik/" target="_blank" rel="noopener noreferrer">
                                <span className="btn">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </span>
                            </a>
                            <a href="https://github.com/Jahid101" target="_blank" rel="noopener noreferrer">
                                <span className="btn">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/md-jahid-hasan-anik/" target="_blank" rel="noopener noreferrer">
                                <span className="btn">
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