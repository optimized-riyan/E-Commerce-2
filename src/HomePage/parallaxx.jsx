import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import styles from './Parallax.module.css'
import FancyButton from '../FancyButton';
const Parallaxx = () => {
    return (
      <ParallaxProvider>
      <div className={styles.container} >
        <Parallax speed={20} style={{display:'flex', flexDirection:'row', justifyContent:"space-between", alignItems:'center', marginTop:'1em', alignContent:'center', padding:'10px'}}>
        <img className={styles.img} src="https://media.istockphoto.com/id/1136478981/vector/cute-woodland-forest-animal-vector-illustration-set.jpg?s=1024x1024&w=is&k=20&c=FTNHgz7TZOyOOe4YVPQHUVqHnx82-FReg_UEidbjXHY=" alt="" />
        <Parallax  speed={-10} style={{display:'flex', flexDirection:'column', justifyContent:"space-between",flex:1, alignItems:'center'}}>
      <div className={styles.text}> Vitra's Environmental Mission</div> <br /><FancyButton text={'LEARN MORE'} width="fit-content"/>
      </Parallax>
        <img className={styles.img} src="https://media.istockphoto.com/id/1136478981/vector/cute-woodland-forest-animal-vector-illustration-set.jpg?s=1024x1024&w=is&k=20&c=FTNHgz7TZOyOOe4YVPQHUVqHnx82-FReg_UEidbjXHY=" alt="" />
       </Parallax>
      </div>
      </ParallaxProvider>
    );
  };
  
  export default Parallaxx;