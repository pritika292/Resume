import React from 'react';

const Resume = (props) => {
    const {resumeData} = props;
    return (  
        <section id = "resume">
        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
            {
                resumeData.education && resumeData.education.map((item)=>{
                    return(
                        <div className="row item" key={item.id}>
                            <div className="twelve columns">
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                    {item.specialization}
                                    <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em>
                                    <span>&bull;</span> <em className="date">{item.gpa}</em>
                                </p>
                                <p>
                                    {item.Achievements}
                                </p>
                            </div>
                        </div>          
                    )
                })
            }
            </div>
        </div>
        <div className="row work">
            <br></br>
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
            {       
                resumeData.work && resumeData.work.map((item) => {
                return(
                    <div className="row item" key={item.id}>
                        <div className="twelve columns">
                            <h3>{item.CompanyName}</h3>
                            <p className="info">
                                {item.specialization}
                                <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em>
                            </p>
                            <div className='info'>
                                {
                                    item.Achievements.map((Achievement, index) => {
                                        return(<div key= {index}>
                                            <span>&bull;</span> <em className="date">{Achievement}</em>
                                            </div>)
                                        
                                    })
                                }
                            </div>
                        </div>
                    </div>  
                )
                })
            }
            </div>
        </div>
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Languages</span></h1>
            </div>
            <div className="nine columns main-col">
                    <ul className="skills">
                    {
                        resumeData.skills && resumeData.skills.map((item) => {
                            return(
                                <li key={item.id}>
                                    {item.skillname}
                                </li>
                            )
                        })
                    }
                    </ul>
            </div>
        </div>
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Frameworks</span></h1>
            </div>
            <div className="nine columns main-col">
                    <ul className="skills">
                    {
                        resumeData.tools && resumeData.tools.map((item) => {
                            return(
                                <li key={item.id}>
                                    {item.skillname}
                                </li>
                            )
                        })
                    }
                    </ul>
            </div>
        </div>
    </section>
    );
}
 
export default Resume;