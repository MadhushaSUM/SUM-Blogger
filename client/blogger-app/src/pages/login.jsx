import React from 'react'
import { Form, Link } from 'react-router-dom'

const login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <Form>
        <input required type="text" placeholder='Username'/>
        <input required type="password" placeholder='Password'/>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't have an account?
          <br/> 
          <Link to="/register">Register</Link>
        </span>
      </Form>
    </div>
  )
}

export default login