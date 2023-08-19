import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/SUM-Blogger-logo.png"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo"><Link to="/"><img src={Logo} alt="blogger-logo"/></Link></div>
        <div className="links">
          <Link className='link' to="/?cat=games"><h6>Games</h6></Link>
          <Link className='link' to="/?cat=tech"><h6>Technology</h6></Link>
          <Link className='link' to="/?cat=programming"><h6>Programming</h6></Link>
          <Link className='link' to="/?cat=news"><h6>News</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (<span onClick={logout}>Logout</span>) : (<Link className='link' to="/login">Login</Link>)}
          <span className='write'><Link className='link' to="/write">Write</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar