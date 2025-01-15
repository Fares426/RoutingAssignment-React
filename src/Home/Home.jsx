import React from 'react'
import imgBoy from '../assets/boy.svg'
import './Home.css'
export default function Home() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center body-home '> 
      <div className='text-center  text-white '>
        <img src={imgBoy} alt="boy"  className='w-100 mb-2'/>
        <h1>START FRAMEWORK</h1>
        <div className='star-icon'><i className="fa-solid fa-star mb-2"></i></div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
