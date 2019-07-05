import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

const Home = () => (
    <div className="container-fluid height">
        <div className="row d-flex align-items-stretch height">
          <div className="col-6 base height">
            <img src="https://user-images.githubusercontent.com/45082443/60709311-bc8b9e00-9ed5-11e9-8977-b8be10ddeb6a.png" alt="logo" />

          </div>
          <div className="col-6 height">
            <button type="button" className="btn-solucion color-red mt-5">
             <Link to="/lending" className="links">COMENCEMOS</Link>
            </button>
          </div>
        </div>
    </div>
  );
  export default Home;