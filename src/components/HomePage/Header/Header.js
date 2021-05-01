import React from 'react';

const Header = () => {
    return (
        <div class="mt-3" data-bs-interval="10000">

            <img style={{ height: '525px', opacity: '0.7' }} src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..." />

            <div style={{ marginBottom: '160px' }} class="carousel-caption d-none d-md-block">
                <strong>
                    <h5 style={{ color: 'teal' }}>Hi,
                    <span style={{ color: 'blue' }}> I am</span></h5>
                    <h1 style={{ fontSize: '60px', color: 'purple' }}>Md Jahid Hasan Anik</h1>
                    <h4 style={{ color: 'black' }}>"Full Stack Web Developer"</h4>
                    <br />
                    <a href="#about">
                        <button className="btn btn-success">About me</button>
                    </a>
                    <a href="#skill">
                        <button className="btn btn-primary ms-5">My Skills</button>
                    </a>
                </strong>
            </div>
        </div>
    );
};

export default Header;
