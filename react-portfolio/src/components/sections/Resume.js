import React from 'react';

// Import the resume pdf file that can be downloaded
import myResume from '../../assets/JB_resume.pdf';

// Resume page styling
const styles = {
  resumeDownloadStyle: {
    color: 'white',
    marginTop: '20px',
    fontSize: '20px'
  },
  listStyle: {
    color: 'white',
  },
};

// Return the HTML for the resume page component
export default function Resume() {

  return (
    <div>
      <a style={styles.resumeDownloadStyle} 
         href={myResume}
         target="_blank"
      >
         Download my resume!
      </a>
      <h3 style={styles.listStyle}>Front-end proficiencies</h3>
      <ul style={styles.listStyle}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsiveness</li>
        <li>React</li>
        <li>Boostrap</li>
      </ul>
      <h3 style={styles.listStyle}>Backend-end proficiencies</h3>
      <ul style={styles.listStyle}>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequalize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}