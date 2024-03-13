import React from 'react'
import './login.css'
const Login = () => {
  return (
    <>
    <div className='loginForm'>
      <h3>Login Page</h3>
      <form action="/login" method="post">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
        />
        <label for="password"
        >Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  </>
  )
}

export default Login
