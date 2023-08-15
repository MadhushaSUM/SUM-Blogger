import React from 'react'
import { Form, Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <Form>
        <input required type="text" placeholder='Username'/>
        <input required type="email" placeholder='E-mail'/>
        <input required type="password" placeholder='Password'/>
        <button>Register</button>
        <p>This is an error!</p>
        <span>Already have an account?
          <br/> 
          <Link to="/login">login</Link>
        </span>
      </Form>
    </div>
  )
}

export default Register