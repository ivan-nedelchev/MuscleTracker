import React from 'react';
import './login.css';
import { loginUser } from '../controllers/auth/login';
import { saveUser } from '../controllers/auth/auth';


const loginHandler = async (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let username = formData.get("username");
    let password = formData.get("password");
    let res = await loginUser(username, password)
    if (res.status != 401) {
        saveUser(res)
        console.log("Successful login");
    } else {
        console.log("Invalid credentials, try again");
    }
}

const Login = () => {
    return (
        <>
            <div className='loginForm'>
                <h3>Login Page</h3>
                <form onSubmit={loginHandler} action="/login" method="post">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                    <label htmlFor="password"
                    >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
