import React, {useContext, useState} from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import {AuthContext} from "../context/authContext"

const LoginPage = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const {login} = useContext(AuthContext);

  const handleChange = e =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()

    try{
      await login(inputs)
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }
  }
  

  return (
    <div className="auth">
      <h1>Login</h1>
      <Form>
        <input required onChange={handleChange} type="text" name='username' placeholder='Username'/>
        <input required onChange={handleChange} type="password" name='password' placeholder='Password'/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account?
          <br/> 
          <Link to="/register">Register</Link>
        </span>
      </Form>
    </div>
  )
}

export default LoginPage