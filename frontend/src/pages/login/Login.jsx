import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
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
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
