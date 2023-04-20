import React, { useState }  from 'react';
import Navigation from './Navigation';
import background from '../assets/background.jpg'

// Define the styles used for the header component
const styles = {
  navbarStyle: {
    display: 'flex',
    height: '20vh',
    backgroundImage: `url(${background})`,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  usernameStyle: {
    fontSize: '100px',
    color: 'Black',
  },
  linkStyle: {
    fontSize: '45px',
    color: 'Black',
  },
  linkStyleActive: {
    fontSize: '45px',
    color: 'Red',
  },
};

export default function Header() {

  // Define a currentSection state variable to control which section the navigation component
  // will render. SetCurrentSection is a function to update the state when it changes.
  // This variable will be used to control the color of section links in the navbar for example.
  const [currentSection, setCurrentSection] = useState('About');

  // This is the handler that updates the state when links in the navbar are clicked
  const handleSectionChange = (section) => setCurrentSection(section);

  // Return the HTML for the header component
  return (
    <div>
      <nav style = {styles.navbarStyle}>
        <code style = {styles.usernameStyle}>BhatJ</code>
        <a href="#"
           style = {currentSection === 'About' ? styles.linkStyleActive : styles.linkStyle}
           onClick={() => handleSectionChange('About')}
        >
          About
        </a>
        <a href="#"
           style = {currentSection === 'Portfolio' ? styles.linkStyleActive : styles.linkStyle}
           onClick={() => handleSectionChange('Portfolio')}
        >
          Portfolio
        </a>
        <a href="#"
           style = {currentSection === 'Contact' ? styles.linkStyleActive : styles.linkStyle}
           onClick={() => handleSectionChange('Contact')}
        >
          Contact
        </a>
        <a href="#"
           style = {currentSection === 'Resume' ? styles.linkStyleActive : styles.linkStyle}
           onClick={() => handleSectionChange('Resume')}
        >
          Resume
        </a>
      </nav>
      <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange}/>
    </div>
  );
}