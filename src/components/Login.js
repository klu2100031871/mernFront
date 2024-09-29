import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import './login.css';

function Login() {
  const initialUsers = {
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
    try 
    {
      console.log("Submitting user:", user);
      const response = await axios.post("https://backend-9ke8.onrender.com/api/login", user); // Corrected endpoint path
      console.log("User submitted successfully", response.data);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } 
    catch (error) 
    {
      if (error.response && error.response.data) {
        console.log("Error submitting user", error.response.data);
        setError(error.response.data.message);
        toast.error(error.response.data.message, { position: "top-right" });
      } 
      else 
      {
        console.log("Error submitting user", error.message);
        setError("Something went wrong. Please try again later.");
        toast.error("Something went wrong. Please try again later.", { position: "top-right" });
      }
    }
  };
  

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={submitForm}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={inputHandler}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={inputHandler}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">LOG IN NOW</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>

        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
