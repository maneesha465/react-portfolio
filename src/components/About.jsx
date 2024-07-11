import React from 'react';

const About = () => (
  <div className="container-fluid d-flex flex-column">
    <div className="row flex-grow-1 bg-secondary d-flex justify-content-center align-items-center">
      <div className="col text-center bg-secondary">
        <h1 className="pt-5 pb-5">About</h1>
        <div className="pt-3">
          <p className="display-6 pb-5">
            I'm an aspiring full-stack web developer. Although I have no professional experience yet, I am eager to find a web development job. I am proficient in HTML, CSS, Bootstrap, C, Node.js, Express.js, JavaScript, MongoDB, MySQL, and Material-UI.
          </p>
          <h1 className="pb-5 pt-4">Education</h1>
          <p className="display-6">
            Degree: BCA from Calicut University
          </p>
          <p className="display-6 pb-5">
            Post Graduation: M.Sc in Computer Science from Calicut University
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
