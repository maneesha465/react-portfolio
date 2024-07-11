import React from 'react';

const Skills = () => (
  <div className="container-fluid bg-secondary pb-4">
    <h1 className="text-center pb-5 pt-5">SKILLS</h1>
    <div className="row pb-2 pt-2">
      <div className="col-md-6 pt-2 pb-5">
        <div className="card servicesText mt-4 pb-5">
          <div className="card-body pb-5 ml-4">
            <h4 className="card-title text-center mt-3 pb-3">Skills</h4>
            <ol className="card-text mt-4 mb-5">
              <li className="pb-4">JAVASCRIPT</li>
              <li className="pb-3">BOOTSTRAP</li>
              <li className="pb-3">HTML</li>
              <li className="pb-3">CSS</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-md-6 pt-2 pb-5">
        <div className="card servicesText mt-4 pb-5">
          <div className="card-body pb-5 ml-4">
            <h4 className="card-title text-center mt-2 pb-4">Projects</h4>
            <h6 className="pb-2">TRAVEL AND TOURISM</h6>
            <p className="pb-2">It is a Website that provides comparison between different travel agencies and their packages. Hence the customer can choose the better one according to their requirements.</p>
            <h6>STRESS DETECTION IN IT PROFESSIONALS</h6>
            <p className="pb-2">This Website helps to identify the stress in IT employees and also provide remedies for them. The website uses the front end as JavaScript, HTML, and CSS and the back end as Python with Flask framework.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
