import React, { useState }  from 'react';
import Navigation from './Navigation';
import background from '../assets/background.jpg'

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
  const [currentSection, setCurrentSection] = useState('About');

  const handleSectionChange = (section) => setCurrentSection(section);

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