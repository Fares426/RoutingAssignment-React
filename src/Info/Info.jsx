import React from 'react';
import './Info.css';

export default function Info() {
  return (
    <div className='container-fluid body-info py-5'>
      <div className="row ">
        
        <div className='col-md-4 d-flex flex-column py-4  text-center text-white p-3'>
          <h2>LOCATION</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        
        <div className='col-md-4 d-flex flex-column py-4 text-center text-white p-3'>
          <h2 className='mb-3'>AROUND THE WEB</h2>
          <div className="icons">
            <i className="fa-brands me-3 icon-info fa-facebook"></i>
            <i className="fa-brands me-3 icon-info fa-instagram"></i>
            <i className="fa-brands me-3 icon-info fa-twitter"></i>
            <i className="fa-brands me-3 icon-info fa-linkedin"></i>
          </div>
        </div>

        
        <div className='col-md-4 py-4 text-center text-white p-3'> 
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free-to-use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  );
}
