import React from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';

const styles = {
  navigationStyle: {
    height: '70vh',
    background: '#22577A',
    padding: '5%',
  },
  sectionHeadingStyle: {
    color: 'white',
    marginBottom: '20px',
  },
};

export default function Navigation({ currentSection, handleSectionChange }) {

  const renderSection = () => {
    if (currentSection === 'About') {
      return <About />;
    } else if (currentSection === 'Portfolio') {
      return <Portfolio />;
    } else if (currentSection === 'Contact') {
      return <Contact />;
    } else {
      return <Resume />;
    }
  }

  return (
    <div style={styles.navigationStyle}>
      <h2 style={styles.sectionHeadingStyle}>{currentSection}</h2>
      {renderSection()}
    </div>
  );
}