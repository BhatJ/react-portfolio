import React from 'react';
import Project from './Project';

const styles = {
  portfolioStyle: {
    display: "flex",
    flexWrap: "wrap",
  },
};

const projects = [
  {
    imgSrc: "horiseon-project.png",
    deploymentUrl: "https://bhatj.github.io/horiseon-website/",
    gitHubUrl: "https://github.com/BhatJ/horiseon-website"
  },
  {
    imgSrc: "jbhat-portfolio.png",
    deploymentUrl: "https://bhatj.github.io/jb-portfolio/",
    gitHubUrl: "https://github.com/BhatJ/jb-portfolio"
  },
  {
    imgSrc: "prework-study-guide.png",
    deploymentUrl: "https://bhatj.github.io/prework-study-guide/",
    gitHubUrl: "https://github.com/BhatJ/prework-study-guide"
  },
  {
    imgSrc: "chat-support.png",
    deploymentUrl: "https://chat-support-999.herokuapp.com/",
    gitHubUrl: "https://github.com/jouriena11/chat-support"
  },
  {
    imgSrc: "daily-schedule.png",
    deploymentUrl: "https://ed0920.github.io/Daily-Organiser/",
    gitHubUrl: "https://github.com/ED0920/Daily-Organiser"
  },
  {
    imgSrc: "text-editor.png",
    deploymentUrl: "https://murmuring-journey-83808.herokuapp.com/",
    gitHubUrl: "https://github.com/BhatJ/text-editor"
  }
]

export default function Porfolio() {
  return (
    <div style={styles.portfolioStyle}>
      <Project project={projects[0]}/>
      <Project project={projects[1]}/>
      <Project project={projects[2]}/>
      <Project project={projects[3]}/>
      <Project project={projects[4]}/>
      <Project project={projects[5]}/>
    </div>
  );
}