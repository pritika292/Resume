import React from 'react';

const Footer = (props) => {
    const {resumeData} = props;
    return ( 
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {
                            resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <a href={item.url}>
                                            <i className={item.className} />
                                        </a>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a>
                </div>
            </div>
        </footer>   
    );
}
 
export default Footer;