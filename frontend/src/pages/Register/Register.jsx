import React, { useState } from 'react'
import './Register.scss'
import axios from "axios"
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    name: "",
    email: "",
    password: ""
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4500/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  }

  console.log(inputs);
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Welcome to Vibely!</h1>
          <p>Connect with friends, share your moments, and explore new connections. Your journey starts here.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="email" placeholder='Email' name='email' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            <input type="text" placeholder='Name' name='name' onChange={handleChange} />
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register