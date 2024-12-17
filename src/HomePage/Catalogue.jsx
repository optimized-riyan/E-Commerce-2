import React from 'react'
import './catalogue.css'
import HorizontalCatalogue from './HorizontalCatalogue'
import Cell from './Cell'

const Catalogue = () => {
  return (
    <div>
        <h1>Catalogue</h1>
        <HorizontalCatalogue data1 = {{imgSrc: "https://static.vitra.com/media-resized/AeNTM0MsvptAP8Oj4vJCxd3gNcQE1VJUYMAmpiC-xiE/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkzNDUyMDcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84NjI1ODk4Mi5qcGc.jpg", title: "Grand Repos and Grand Relax", description:"Discover our Offer"}} data2={{imgSrc:"https://static.vitra.com/media-resized/P83FYjYoawuYrz5fHtl3cWGpdNtWg-JBf0WQHW6Kx5Y/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkzNDAxNTQvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84NjIxMjMyMy5qcGc.jpg", title:"Eames Fiberglass Side Chair La Fonda", description:"Limited Edition"}}/>

        <HorizontalCatalogue data1 = {{imgSrc: "https://static.vitra.com/media-resized/FAl442yNVxHJyw36tWsqTWN64NnMyD_FjqdxJJS1zSw/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkzNTc3MTAvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84NjQyNTk0NS5qcGc.jpg", title: "Wall Clocks - Ball Clock", description:"Limited Edition"}} data2={{imgSrc:"https://static.vitra.com/media-resized/9gaUCbUstcJzVECImKxBEaKhBMb6yazZsC9AMaIHFoA/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzkxNzczMDEvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84MzA0NjI2MC5qcGc.jpg", title:"Find the Perfect Gift", description:"Gift Finder"}}/>
    </div>
  )
}

export default Catalogue