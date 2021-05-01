import React from 'react';
import pic from '../../../image/20201214_122719.jpg';

const About = () => {

    return (
        <div className="row p-5 mt-5 bg-dark text-light" id="about">
            <div className="col-md-6">
                <img className="w-25" src={pic} alt="" />
            </div>

            <div className="col-md-6">
                <strong>
                    <p>Who am I ?</p>
                </strong>
                <h1>ABOUT ME</h1>
                <p className="mt-4">I have been building web sites and <br/><span style={{color: 'purple', fontSize: '20px'}}><strong>tried</strong></span> to build according to the best trends.</p>
                <p>My main goal is how to create <span style={{color: 'purple', fontSize: '20px'}}><strong>project timely.</strong><br/></span>I prioritize the Frontend most though I can work <br/> with Frontend and Backend both.</p>
            </div>
        </div>
    );
};

export default About;
