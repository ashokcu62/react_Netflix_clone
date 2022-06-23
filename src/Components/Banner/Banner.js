import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>movie name</h1>
        <div className='banner_buttons'>
          <button className='button'>play</button>
          <button className='button'>mylist</button>
        </div>
        <div>
          <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci consequatur mollitia tenetur minus illo odit atque quibusdam dolorem amet repellendus </h1>
        </div>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
