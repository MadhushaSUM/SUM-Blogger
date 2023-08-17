import React from 'react'
import Photo from "../img/single-page-img.jpg"
import User from "../img/user.png"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={Photo} alt="single-page-img" />
        <div className="user">
          <img src={User} alt="user-img" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit-img" />
            </Link>
            <img src={Delete} alt="delete-img" />
          </div>
        </div>
        <h1>Witcher 3:The Wild Hunt</h1>
        <p>"The Witcher 3: Wild Hunt" is an immersive and captivating open-world role-playing game that takes players on an unforgettable journey through a dark and intricate fantasy realm. Developed by CD Projekt Red, this masterpiece of storytelling and game design is the third installment in the popular Witcher series. Set in the war-torn land of the Continent, players assume the role of Geralt of Rivia, a skilled monster hunter known as a Witcher. With a morally complex and morally gray narrative, the game offers players the freedom to make impactful choices that shape the course of the story and influence the fates of the characters they encounter. The game's expansive open world is rich with lush landscapes, treacherous swamps, ancient ruins, and bustling cities, all brought to life with stunning visuals and attention to detail. From battling ferocious beasts to navigating political intrigue and forming relationships with an array of fascinating characters, "The Witcher 3: Wild Hunt" is a remarkable and emotionally charged adventure that has left an indelible mark on the world of gaming.</p>        
      </div>
      <Menu/>
    </div>
  )
}

export default Single