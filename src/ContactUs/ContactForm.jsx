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
    postcode: '', //regex
    city: '',
    phoneNumber: '', // regex
    email: '', // regex
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.productName) setError('Product name is required!');
    else if (!formData.serviceRequest) setError('Service request type is required!');
    else if (!formData.firstName) setError('First name is required!');
    else if (!formData.surname) setError('Last name is required!');
    else if (!formData.gender) setError('Gender is required!');
    else if (!formData.company) setError('Company name is required!');
    else if (!formData.streetAddress) setError('Street address is required!');
    else if (!formData.streetNumber) setError('Street number is required!');
    else if (!formData.postcode) setError('Postal code is required!');
    else if (!formData.city) setError('City name is required!');
    else if (!formData.phoneNumber) setError('Phone number is required!');
    else if (!formData.email) setError('Email is required!');
    else if (!/^[0-9]{6}$/.test(formData.postcode)) setError('Please enter a valid postal code!');
    else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) setError('Please enter a valid phone number!');
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)) setError('Please enter a valid email address!');
    else {
      setError('');
      alert('Your Form is submitted successfully!')
    }
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
          onChange={handleChange} 
        />
        <select className={styles.box}
          name="serviceRequest"
          value={formData.serviceRequest}
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <div>
        
        
        <input
          className={styles.box}
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
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
        <select className={styles.box}
          name="gender"
          value={formData.gender}
          onChange={handleChange} 
        >
          <option value="" disabled selected>Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
    
          
        </select>
        
        <input
          className={styles.box}
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange} 
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="text"
          name="streetAddress"
          placeholder="Street address"
          value={formData.streetAddress}
          onChange={handleChange} 
        />
        <input
          className={styles.box}
          type="number"
          name="streetNumber"
          placeholder="Street number"
          value={formData.streetNumber}
          onChange={handleChange} 
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="number"
          name="postcode"
          placeholder="Postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
        <input
          className={styles.box}
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange} 
        />
      </div>
      <div>
        <input
          className={styles.box}
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleChange} 
        />
        <input 
          className={styles.box}
          type="email"
          name="email"
          placeholder="Your E-Mail address"
          value={formData.email}
          onChange={handleChange} 
        />
      </div>
      <pre style={{ color: 'red', whiteSpace: 'pre-line' }}>{error}</pre>
      <button className={styles.submit} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
