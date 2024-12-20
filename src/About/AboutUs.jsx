// src/AboutUs.js
import React from 'react';
import styles from './AboutUsDesign.module.css';
import grand from '../assets/Aboutimages/grand.jpg'
import furniture2 from '../assets/Aboutimages/furniture2.jpg'
import gift from '../assets/Aboutimages/gift.jpg'
import wall from '../assets/Aboutimages/wall.jpg'
import Image from './Image';

const AboutUs = () => {
  return (
    <>
      <Image />
      <div className={styles.aboutUsContainer}>
        
        <div className={styles.aboutUsText}>
          <h1>About Us</h1>
        we believe that furniture is more than just a collection of objects; it is a reflection of your personal style and a cornerstone of your home. Our mission is to provide high-quality, stylish, and functional furniture that enhances your living spaces and brings comfort and joy to your everyday life.
  <br></br>
  <br></br>
  <hr></hr>
  <h2>Our Story</h2>

  Founded in 1998, Vitra started with a simple idea: to create beautiful, durable furniture that meets the needs of modern living. Our journey began in a small workshop, where our founder, XYZ, combined a passion for design with a commitment to craftsmanship. Today, we have grown into a trusted name in the furniture industry, known for our innovative designs and exceptional quality.

  <h2>Our Products</h2>

  We offer a wide range of furniture pieces, from timeless classics to contemporary designs, all crafted with the utmost care and attention to detail. Our collections include:

  Living Room Furniture: Sofas, sectionals, coffee tables, and entertainment centers that combine comfort and style.
  Bedroom Furniture: Beds, dressers, nightstands, and wardrobes designed to create a serene and restful environment.
  Dining Room Furniture: Dining tables, chairs, and sideboards that make every meal a special occasion.
  Office Furniture: Desks, chairs, and storage solutions that enhance productivity and organization.
  Outdoor Furniture: Patio sets, loungers, and accessories that transform your outdoor space into a relaxing retreat.
  Our Commitment to Quality

  Quality is at the heart of everything we do. We source the finest materials and employ skilled artisans to ensure that each piece of furniture meets our high standards. From the selection of sustainable wood to the final finishing touches, we take pride in every step of the manufacturing process..
        </div>
      
        <hr></hr>
        <br></br>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}><img className={styles.images} src={grand}alt="Description 1" />
          <div className={styles.gridText}>Comfort And Care</div>
          </div>
          <div className={styles.gridItem}><img className={styles.images} src={furniture2}alt="Description 2" />
          <div className={styles.gridText}>Originally Designed</div>
          </div>
          <div className={styles.gridItem}><img className={styles.images}src={gift}alt="Description 3" />
          <div className={styles.gridText}>Gift Your Loved Ones</div>
          </div>
          <div className={styles.gridItem}><img className={styles.images} src={wall}alt="Description 4" />
          <div className={styles.gridText}>Minimal And Aesthetic</div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default AboutUs;
