import React from 'react';
import blogPic from '../../image/Capture.PNG';


const Blog = () => {
    return (
        <div className="row p-5 mt-5 bg-dark text-light m-1" id="about">
            <div className="col-md-6">
                <img className="w-100" src={blogPic} alt="" />
            </div>

            <div className="col-md-6">
                <h1>Blog</h1>
                <p className="mt-4">I Like to write<br /> blogs on my free time.</p>

                <a href="https://medium.com/@jahidhasananik.official" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-info">See my Blogs</button>
                </a>
            </div>
        </div>
    );
};

export default Blog;
