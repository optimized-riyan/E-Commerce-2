import React from 'react'
import myStyle from './ProductPage.module.css'
import '@fontsource/quicksand'

const ProductPageBody = () => {
  return (
    <div className={myStyle.prod_body}>
        <div className={myStyle.body_img_cont}>
            <img className={myStyle.body_img} src="https://static.vitra.com/media-resized/9ZGl2ZWg6SNXTMTMNtuUtOQLbgNdfcJDzDwH3-PHXuM/fill/0/1020/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkyMjcwOTQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84MzE1ODYzOS5qcGc.jpg"></img>
        </div>
        <div className={myStyle.pp_info}>
          <h1 className={myStyle.pp_heading}>What's New</h1>
          <p className={myStyle.pp_desc}>We are continually exploring developments in working and living and translating this analysis into new products and concepts with some of the most talented designers - and even the company's classics are regularly updated to keep them fresh and contemporary for decades to come</p>
        </div>
    </div>
  )
}

export default ProductPageBody