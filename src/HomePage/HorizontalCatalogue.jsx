import React from 'react'
import Cell from './Cell'
import './catalogue.css'

const HorizontalCatalogue = ({data1, data2}) => {
  return (
    <div>
        <div className='row'>
            <Cell imgSrc={data1.imgSrc} title={data1.title} description={data1.description}/>
            <Cell imgSrc={data2.imgSrc} title={data2.title} description={data2.description}/>
        </div>
    </div>
  )
}

export default HorizontalCatalogue