import React from 'react';
import reduxImg from './img/redux.png'
import reactImg from './img/react.png'
import tsImg from './img/ts.png'
import firebaseImg from './img/firebase.png'
import upworkImg from './img/upwork.png'
import linkedinImg from './img/linkedin.png'


const About: React.FC= (props) => {

  return (
    <div>
      <div className="detail-container">
        <div className="about-content">
          <h1>About</h1>
            <div className="about-text">
                Hi! My name is Dmitry I'm frontend/backend developer. 
                I create this site to demonstrate some my frontend skills.
                You can connect me by upwork {upworkLink}
            </div>
            <br/>
            {TechTable}
            <br/>
            <div className="about-text">
              This is the monolit React app written with TypeScript. 
              For the storing data it uses Redux. 
              Now all data is statick JSON but it will be connected to API in future.   
            </div>
            <br/>
          </div>
        </div>

    </div>
  );
}

const TechTable = (
  <div className="tech-table">
    <div className="tech-row">
      <img style={{width:'60px'}} src={reactImg} alt="react"/>
    </div>
    <div className="tech-row">
      <img style={{width:'60px'}} src={reduxImg} alt="redux"/>
    </div>
    <div className="tech-row">
      <img style={{width:'60px'}} src={tsImg} alt="typescript"/>
    </div>
    <div className="tech-row">
      <img style={{width:'60px'}} src={firebaseImg} alt="firebase"/>
    </div>
  </div>
)

const upworkLink = (
  <a className="upwork-color" style={{verticalAlign: 'sub'}} href="https://www.upwork.com/freelancers/~014369aa2396e5de93">
    <img style={{width:'40px'}} src={upworkImg} alt="upwork"/>
  </a>
)

const linkedinLink = (
  <a className="linkedin-color" href="https://www.upwork.com/freelancers/~014369aa2396e5de93">
    <img style={{width:'60px'}} src={linkedinImg} alt="linkedin"/>
  </a>
)

export default About;