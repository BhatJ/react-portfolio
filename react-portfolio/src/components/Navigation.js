import React from 'react';

export default function Navigation({ currentSection, handleSectionChange }) {
  return (
    <div>
      <h2>{currentSection}!</h2>
    </div>
  );
}