import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab provident debitis quas? Minus non mollitia id? Ipsa nesciunt natus aliquid consectetur dolorem. Facilis quia repudiandae ad pariatur! Aspernatur, reiciendis.</p>
        </div>
    </div>
  )
}

export default FeatureBox