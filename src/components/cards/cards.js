import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

import './cards.css'

export default function Cards(props) {
    return (
        <div className='card text-center shadow'>
          <div className='overflow'>
            <img src ={props.imgsrc } alt='bouquet1' className='card-img-top'></img>
          </div>
          <div className='card-body text-dark'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-danger'>{props.price}</p>
            <button className='button'>Buy now</button>
          </div>
            
        </div>
    )
}
