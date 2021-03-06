import React from 'react';
import pic from '../../../image/I.PNG';

const About = () => {

    return (
        <div className="row p-5 mt-5 bg-dark text-light m-1" id="about">
            <div className="col-md-6">
                <img style={{height: "400px"}} src={pic} alt="" />
            </div>

            <div className="col-md-6">
                <strong>
                    <p>Who am I ?</p>
                </strong>
                <h1>ABOUT ME</h1>
                <p className="mt-4">I have been building web sites and <br /><span style={{ color: 'purple', fontSize: '20px' }}><strong>tried</strong></span> to build according to the best trends.</p>

                <p>My main goal is how to create <span style={{ color: 'purple', fontSize: '20px' }}><strong>project timely.</strong><br /></span>I prioritize the Frontend most though I can work <br /> with Frontend and Backend both.</p>

                <p><span style={{ color: 'purple' }}>
                    <strong>
                        Name:
                    </strong>
                </span> Md Jahid Hasan Anik.</p>

                <p><span style={{ color: 'purple' }}>
                    <strong>
                        Email:
                    </strong>
                </span> jahidhasananik.official@gmail.com</p>

                <a href="https://drive.google.com/uc?export=download&id=1BYA3TLxjxPbJCfaviOGbLrdBkkae8tuC" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-info">Download CV</button>
                </a>

                <a href="https://drive.google.com/uc?export=download&id=1zma6Bl-Hzr_2cPCiRvi-CAwaMiWiofof" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-info ms-3">Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default About;
