import React from 'react';
import '../../Assets/css/AboutUs.css';
import Footer from './Footer';
import Header from './Header';
import bk1 from "../../Assets/img/background1.png";
import bk2 from "../../Assets/img/frBasket.png";
import bk3 from "../../Assets/img/vegHerb.png";
import Cart from '../cart/Cart';
import f3 from "../../Assets/img/f3.png";
const AboutUs = () => {



  return (
    
    <div>
        <Header />
        <div style={{display:"flex"}}>
            <div style={{marginTop:"4rem", position:"relative",bottom:"-10rem"}}>
                <img src={bk2} style={{width:"10rem", height:"10rem"}}alt='img' />
                <img src={f3} style={{width:"10rem", height:"10rem"}}alt='img' />
                
                
            </div>

    <div className="about-us">
      <h2 className="section-title">About Us</h2>
      <p className="section-description">
        Welcome to our website! We are passionate about providing you with the freshest and highest quality fruits and vegetables. At [Your Company Name], we believe in the power of nature's bounty and its ability to nourish and enhance our well-being.
      </p>
      <p className="section-description">
        Our mission is to promote a healthy lifestyle by making fresh fruits and vegetables easily accessible to everyone. We strive to connect you with nature's goodness, ensuring that you and your family have access to a wide variety of nutritious options.
      </p>
      <p className="section-description">
        We work closely with local farmers and trusted suppliers to source the finest produce. From hand-picking the ripest fruits to selecting vibrant and crisp vegetables, we prioritize freshness in every step of the process.
      </p>
      <p className="section-description">
        Our wide variety of fruits and vegetables ensures that you'll discover something to tantalize your taste buds and add vibrancy to your meals. We take pride in supporting local communities by sourcing locally grown produce, contributing to the sustainability of local agriculture.
      </p>
      <p className="section-description">
        A diet rich in fruits and vegetables is the foundation of a healthy lifestyle. Packed with essential vitamins, minerals, and antioxidants, they are nature's prescription for optimal well-being. We are committed to helping you make nutritious choices by offering a wide range of options and sharing useful information and tips to incorporate fruits and vegetables into your daily routine.
      </p>
      <p className="section-description">
        Your satisfaction is our top priority. We strive to provide exceptional customer service, ensuring that your experience with us is seamless and enjoyable. If you have any questions, concerns, or suggestions, our friendly and knowledgeable team is always here to assist you.
      </p>
      <p className="section-description">
        Thank you for choosing [Your Company Name] as your trusted source for fresh fruits and vegetables. We look forward to serving you and being part of your journey towards a healthier and more vibrant life.
      </p>
    </div>
            <div style={{display:"flex", alignItems:"space-around",flexDirection:"column"}}>
                <img src={bk3} style={{width:"10rem", height:"10rem"}} alt='img' />
                
                <img src={bk1} style={{width:"10rem", height:"10rem"}} alt='img' />
            </div>
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
