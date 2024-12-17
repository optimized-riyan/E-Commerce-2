import React from 'react'
import './catalogue.css'

const Cell = (props) => {
  return (
    <div>
        <div className='cell'>
            <div className='img-container'>
                <img className="cell-img" src={props.imgSrc}></img>
            </div>

            <div className='cell-info'>
                <h3 className='title'>{props.title}</h3>
                <h4 className='description'>{props.description}</h4>
            </div>
        </div>
    </div>
  )
}

export default Cell