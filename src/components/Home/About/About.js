import React from 'react';
import './About.css';
import my from "../../../images/adnan.png";

const About = () => {
    return (
        <div className="about">
            <div className="row mt-5">
                <h2 className="text-center my-3 fw-bold about_me">About Me</h2>
                <div className="col-lg-6 animate__animated animate__backInLeft">
                    <img className="w-50 h-75 my_img mb-5" src={my} alt="" />
                </div>
                <div className="col-lg-5 animate__animated animate__backInRight">
                    <p className="mx-auto fw-bold about_text">Hi, I’m ADNAN AL SHAHRIYAR. I’m a junior web developer. I completed a course on web development.
                        I want to be a dedicated web developer. If I get a chance to work then I will surely do the job full of my
                        concentration and dedication. Besides, I have many projects on different types of topics. And you can
                        also check them also in my GitHub account.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;