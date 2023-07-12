import React from 'react';
import display from '../display.jpg'

const About = (props) => {
    const {resumeData} = props;
    return ( 
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={display} alt="display" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span><br></br>
                                <span>{resumeData.address}</span><br></br>
                                <span>{resumeData.emailid}</span><br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
