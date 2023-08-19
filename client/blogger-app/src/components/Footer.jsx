import React from 'react'
import Logo from '../img/SUM-Blogger-logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="sum blogger logo"/>
      <span>
        Made with ❤ and <b>React.js</b>.
      </span>
    </footer>
  )
}

export default Footer