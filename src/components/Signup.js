import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const initialUsers = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    dateofbirth: "",
    email: "",
    password: ""
  };

  const [user, setUser] = useState(initialUsers);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting user:", user); // Check the user data being sent
      const response = await axios.post("https://mernback-gija.onrender.com/api/user", user);
      // console.log("User submitted successfully", response.data);
      toast.success(response.data.message,{position:"top-right"});
      navigate("/login");
    } 
    catch (error) {
      if (error.response && error.response.data) {
        console.log("Error submitting user", error.response.data);
        setError(error.response.data.message);
      } else {
        console.log("Error submitting user", error.message);
      }
    }
  };
  // const deleteUser=async(userId)=>{
  //   await axios.delete('http://localhost:8000/api/delete/user/${userId}')
  //   .then((response)=>
  //   {
  //     setUsers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
  //   })
  //   toast.success(response.data.message,{position:"top-right"})
  //   .catch((error)=>
  //   {
  //     console.log(error)
  //   })
  // }
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden" style={{ height: '91vh' }}>
        <div className="container px-5 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Dream Home!! <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>Live where luxury meets comfort</span>
              </h1>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={submitForm}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1" name="firstname" onChange={inputHandler} className="form-control" placeholder="Firstname" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example2" name="lastname" onChange={inputHandler} className="form-control" placeholder="Lastname" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example5" name="phonenumber" onChange={inputHandler} className="form-control" placeholder="Phone Number" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="date" id="form3Example6" name="dateofbirth" onChange={inputHandler} className="form-control" placeholder="Date of Birth" required />
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form3Example3" name="email" className="form-control" onChange={inputHandler} placeholder="Email" required />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4" name="password" onChange={inputHandler} className="form-control" placeholder="Password" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4" style={{ display: 'block', margin: 'auto' }}>
                      Sign up
                    </button>

                    {error && <p className="text-danger">{error}</p>}

                    <br />
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                      Already have an account? <Link to="/login" style={{ color: '#393f81' }}>Login here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
