import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <>
      <div className='registerForm'>
        <h3>Register Page</h3>
        <form action="/register" method="post">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
          <label for="password"
          >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
            title="Password must contain at least one number, 
                   one alphabet, one symbol, and be at 
                   least 8 characters long"
            required
          />
          <label for="repassword"
          >Re-type Password:</label>
          <input
            type="password"
            id="repassword"
            name="repassword"
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

export default Register
