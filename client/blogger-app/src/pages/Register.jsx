import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()

    try{
      await axios.post("/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <Form>
        <input required type="text" placeholder='Username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='E-mail' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='Password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Already have an account?
          <br/> 
          <Link to="/login">login</Link>
        </span>
      </Form>
    </div>
  )
}

export default Register