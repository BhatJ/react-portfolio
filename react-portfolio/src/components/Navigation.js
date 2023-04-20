import React from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';

// Navigation component styling
const styles = {
  navigationStyle: {
    minHeight: '100vh',
    background: '#22577A',
    padding: '5%',
  },
  sectionHeadingStyle: {
    color: 'white',
    marginBottom: '20px',
  },
};

export default function Navigation({ currentSection, handleSectionChange }) {

  // This function selects what section component to render.
  // For example, if the current section is the portfolio, render the portfolio page
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

  // Return the HTML for the navigation component
  return (
    <div style={styles.navigationStyle}>
      <h2 style={styles.sectionHeadingStyle}>{currentSection}</h2>
      {renderSection()}
    </div>
  );
}