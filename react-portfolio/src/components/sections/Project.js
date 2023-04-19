import React from 'react';

const styles = {
  cardStyle: {
    width: '20%',
    margin: '3%',
  },
  imgStyle: {
    width: "100%",
    height: "30vh",
    objectFit: "contain",
  },
};

export default function project(props) {
  return (
    <div style={styles.cardStyle} className="card">
      <img style={styles.imgStyle} className="card-img-top" src={require(`../../assets/${props.project.imgSrc}`)} alt="Card image cap"/>
      <div className="card-body">
        <a href={`${props.project.deploymentUrl}`} target="_blank" className="card-link">Deployment</a>
        <a href={`${props.project.gitHubUrl}`} target="_blank" className="card-link">GitHub</a>
      </div>
    </div>
  );
}
