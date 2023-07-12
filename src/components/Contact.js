import React from'react';

const Contact = (props) => {
    const {resumeData} = props;
    return ( 
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p className="lead">
                        Feel free to reach out regarding any open developer roles in the US.
                    </p>
                </div>
            </div>
            <div className="row">
                <aside className="eigth columns footer-widgets">
                    <div className="widget">
                        <h4>LinkedIn :{resumeData.linkedinId}</h4>
                    </div>
                </aside>
            </div>
        </section>
    );
}
 
export default Contact;