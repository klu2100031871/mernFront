import React from 'react';
import { Link } from 'react-router-dom';
import One from './images/Student.jpeg';
import two from './images/Visitor.jpeg'; 
import three from './images/Staff.jpeg'; 

function Cards() {
  return (
    <>
      <br />
      <div className="d-flex justify-content-around">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={One} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Student</h5>
            <p className="card-text">You are the center of our community as a student! Our goal is to establish a stimulating atmosphere that encourages education, development, and creativity. Our networks of support and resources are intended to help you succeed academically and get ready for the future. We are here to support your journey whether you require extracurricular activities or academic assistance.</p>
            <Link to="/qrcode" className="btn btn-primary">Student Pass</Link>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={two} alt="Visitor" />
          <div className="card-body">
            <h5 className="card-title">Visitors</h5>
            <p className="card-text">Welcome to our platform! We are dedicated to ensuring a seamless experience for all our visitors. Here, you can find valuable information, resources, and support tailored to meet your needs. Whether you're looking for guidance or simply exploring, our team is here to assist you every step of the way!</p>
            <Link to="/qrcode" className="btn btn-primary">Visitor pass</Link>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={three} alt="Staff" />
          <div className="card-body">
            <h5 className="card-title">Staff</h5>
            <p className="card-text">Meet our dedicated staff members who are committed to providing exceptional service and support. With a wealth of experience and expertise, our team is here to ensure a positive experience for everyone.</p>
            <Link to="/qrcode" className="btn btn-primary">Staff Pass</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
