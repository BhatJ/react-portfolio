import React from 'react';
import gitHubLogo from '../assets/github-8-64.png';
import linkedInLogo from '../assets/linkedin-3-64.png';
import stackoverflowLogo from '../assets/stackoverflow-6-64.png';

const styles = {
  footerStyle: {
    display: 'flex',
    height: '10vh',
    background: '#22577A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkStyle: {
    padding: '3%',
  },
};

export default function Footer() {
  return (
    <div style = {styles.footerStyle}>
      <a href="https://github.com/BhatJ" 
         target="_blank"
         style={styles.linkStyle}>
        <img src={gitHubLogo} alt="GitHub logo"/>
      </a>
      <a href="https://www.linkedin.com/in/jisha-bhat" 
         target="_blank"
         style={styles.linkStyle}
      >
        <img src={linkedInLogo} alt="LinkedIn logo"/>
      </a>
      <a href="https://stackoverflow.com/users/21661944/bhatj" 
        target="_blank"
        style={styles.linkStyle}
      >
        <img src={stackoverflowLogo} alt="Stackoverflow logo"/>
      </a>
    </div>
  );
}