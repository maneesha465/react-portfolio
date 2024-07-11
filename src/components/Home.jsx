import React from 'react';
import myImage from '../image/myproimage.jpeg';

const Home = () => (
  <div className="container-fluid bg-secondary pt-5">
    <div className="row pt-2 pb-2">
      <div className="col-md-6 pt-2 bg-secondary">
        <img src={myImage} className="img-fluid rounded-circle shadow img-thumbnail" alt="maneesha" />
      </div>
      <div className="col-md-6 text-justify hero-text pt-5 text-white">
        <h1 className="pt-5">Hi, it's me Maneesha M A</h1>
        <p className="fs-2 pt-5">Palakkad, Kerala <br />Email: maneeshama7@gmail.com</p>
      </div>
    </div>
  </div>
);

export default Home;
