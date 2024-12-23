import React, { useState } from 'react';
import styles from './ContactForm.module.css';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    serviceRequest: '',
     message: '',
    firstName: '',
    surname: '',
    gender: '',
    company: '',
    streetAddress: '',
    streetNumber: '',
    postcode: '',
    city: '',
    phoneNumber: '',
    email: '',
    country: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className={styles.forms}onSubmit={handleSubmit}>
      <h1 style={{fontSize:'40px', color:'#323031', fontWeight:'normal'}}>Contact Us</h1>
      <p style={{fontSize:'22px', color:'#323031'}}>You can contact us via telephone, email or with the service ticket below.</p>
      <div>
        <input className={styles.box}
          type="text"
          name="productName"
          placeholder="Product name"
          value={formData.productName}
          onChange={handleChange} required
        />
        <select className={styles.box}
          name="serviceRequest"
          value={formData.serviceRequest}
          onChange={handleChange} required
        >
          <option value="" disabled selected>Service Request</option>
          <option value="spare">Spare parts</option>
          <option value="repair">Repair</option>
          <option value="restoration">Restoration</option>
          <option value="maintenance">Maintenance and care</option>
          <option value="service">General service request</option>
          
        </select>
      </div>
      <div>
        <textarea className={styles.box}
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange} required
        />
      </div>
      <div>
        
        
        <input
          className={styles.box}
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange} required
        />
      
      
        <input
          className={styles.box}
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        </div>
        <div>
         <input
          className={styles.box}
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange} required
        />
        
        <input
          className={styles.box}
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange} required
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="text"
          name="streetAddress"
          placeholder="Street address"
          value={formData.streetAddress}
          onChange={handleChange} required
        />
        <input
          className={styles.box}
          type="text"
          name="streetNumber"
          placeholder="Street number"
          value={formData.streetNumber}
          onChange={handleChange} required
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={formData.postcode}
          onChange={handleChange} required
        />
        <input
          className={styles.box}
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange} required
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleChange} required
        />
        <input 
          className={styles.box}
          type="email"
          name="email"
          placeholder="Your E-Mail address"
          value={formData.email}
          onChange={handleChange} required
        />
      </div>
      <div>
        <select className={styles.box}
          name="country"
          value={formData.country}
          onChange={handleChange} required
        >
          <option value="" disabled selected>Country</option>
          <option value="india">India</option>
          <option value="us">US</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
          <option value="srilanka">SriLanka</option>
          <option value="china">China</option>
          <option value="italy">Italy</option>
          
        </select>
      </div>
      <button  className={styles.submit}type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
