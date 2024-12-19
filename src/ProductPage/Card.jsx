import React from 'react'
import myStyle from './ProductPage.module.css'

const Card = (props) => {
  return (
    <div>
      <div className={myStyle.card}>
          <div className={myStyle.card_img_container}>
            <img className={myStyle.card_img} src={props.img} alt={props.alt} />
          </div>
          <div className={myStyle.card_info}>
            <h4>{props.title}</h4>
            {/* <h4>{props.subtitle}</h4> */}
            {/* <p>{props.description}</p> */}
            {/* <h4>${props.price}</h4> */}
          </div>
      </div>
    </div>

  )
}

export default Card
