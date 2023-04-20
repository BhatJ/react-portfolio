import React from 'react';

// Project card styling
const styles = {
  cardStyle: {
    width: '25%',
    margin: '3%',
  },
  imgStyle: {
    width: "100%",
    height: "30vh",
    objectFit: "fill",
  },
  linkDivStyle: {
    display: "flex",
    justifyContent: "space-between",
    background: "#b3ccc4",
  },
  linkStyle: {
    color: "black",
    fontWeight: "bold",
  }
};

// Return the HTML for a Project Card
export default function project(props) {
  return (
    <div style={styles.cardStyle} className="card">
      <img style={styles.imgStyle} className="card-img-top" src={require(`../../assets/${props.project.imgSrc}`)} alt="Card image cap"/>
      <div style={styles.linkDivStyle} className="card-body">
        <a style={styles.linkStyle} href={`${props.project.deploymentUrl}`} target="_blank" className="card-link">Deployment</a>
        <a style={styles.linkStyle} href={`${props.project.gitHubUrl}`} target="_blank" className="card-link">GitHub</a>
      </div>
    </div>
  );
}
