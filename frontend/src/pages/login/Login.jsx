import React, { useContext, useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext.jsx'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }

    }
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Welcome Back!</h1>
                    <p>Connect with friends, share your moments, and explore new connections. Your journey starts here.</p>
                    <span>New to our community?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' name='username' onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
