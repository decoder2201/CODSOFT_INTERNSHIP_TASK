import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image}alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio tenetur ratione id. Quasi eius ipsa veritatis quia earum rerum 
            consequatur aliquam voluptatibus quod. Libero odio recusandae maiores laborum totam!</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About