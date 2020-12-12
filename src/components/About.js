import React from 'react';
import "./About.css";
import "./Artogether.css";
import Resume from "../images/resume_rachel_liao.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <div>
        
            <span className='about__img__container'>
                <div className='img' id='me'></div>
            </span>
            <span className='about__container'>
                <div>
                    <div className='about__intro__container'>
                        <br/>
                        <p className='about__intro name'><b>I'm Rachel Liao. </b></p>
                        <br/>
                        <p className='about__intro'>I'm currently a senior at <b>Carnegie Mellon University</b> studying <b>Human Computer Interaction</b>, <b>Chemistry</b> and <b>Computer Science</b>.</p>
                        <br/>
                        <p className='about__intro'>I am excited about working with users and designing solutions and interfaces that address their needs and challenges. I speak the languages of scientists, designers, and programmers. And I look to collaborate with people from different backgrounds and bridge the gaps among the three groups.</p>
                        <br/>
                        <p className='about__intro'>I'm also a karate trainee and a knitter and I enjoy drawing on my free time.</p>
                        <br/>
                    </div>
                </div>

                <div className='about__buttons__container'>

                    <div class="social-container">
                        <h3>Follow Me</h3>
                        <a href="https://www.youtube.com/channel/UCJxlBOKHPXS56KQb7SH_fVQ?view_as=subscriber"
                            className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/rachel.liao.1297/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com/RachelLiao15" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/rararachelliaooo/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <div className='holdspace'></div>

                        <a className='about__resume'
                                href='mailto:ruocenliao@gmail.com' target="_blank">
                                    <h3>Email Me</h3>
                            </a>
                        <div className='holdspace'></div>


                            <a className='about__resume'
                                href={Resume} target="_blank">
                                    <h3>See My Resume</h3>
                            </a>
                            <br/>
                        
                    </div>



                    
                </div>
            </span>
        </div>
    )
}

export default About
