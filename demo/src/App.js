import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="photo-container">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />
        </div>

        <div className="section section1">
          <h1>Bio</h1>
          <p>Hello! I'm a passionate developer with experience in creating dynamic and responsive web applications. I enjoy problem-solving and continuously learning new technologies.</p>
        </div>

        <div className="section section2">
          <h1>Projects</h1>
          <div className="card">
            <img src="https://via.placeholder.com/100" alt="Project 1" className="card-image" />
            <div className="card-content">
              <h2>Project 1</h2>
              <p>A brief description of the first project.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/100" alt="Project 2" className="card-image" />
            <div className="card-content">
              <h2>Project 2</h2>
              <p>A brief description of the second project.</p>
            </div>
          </div>
        </div>

        <div className="section section3">
          <h1>Technology Stack</h1>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>HTML</li>
          </ul>
        </div>

        <div className="section section4">
          <h1>Social Media</h1>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
