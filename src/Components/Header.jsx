import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch Your App</span> With Confidence & Creativity </h1>
            <p className='details'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nesciunt reprehenderit earum illo excepturi recusandae, numquam consequatur esse inventore sit ipsa fugiat provident aliquid, mollitia voluptate pariatur sunt optio ullam.</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}
export default Header;