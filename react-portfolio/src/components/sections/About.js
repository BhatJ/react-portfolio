import React from 'react';
import aboutLogo from '../../assets/user-7-128.png';

const styles = {
  bioStyle: {
    color: 'white',
    marginTop: '20px',
    fontSize: '20px'
  },
};

export default function About() {
  return (
    <div>
      <img src={aboutLogo} alt="About page logo"/>
      <p style={styles.bioStyle}>
        My name is Jisha Bhat.
      </p>
      <p style={styles.bioStyle}>
        I have worked in the banking sector my entire professional career (in banking 
        administration).
      </p>
      <p style={styles.bioStyle}>
        I have started to re-skill and have recently began the journey to becoming a 
        full-stack web developer. This portfolio was built by me using React and 
        showcases a handfull of applications I have worked on so far. I hope you enjoy!
      </p>
    </div>
  );
}