import React from "react";
import "../../Assets/css/footer.css";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { ImInstagram, ImTwitter } from "react-icons/im";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerGrid">
        <div className="footerColumn">
          <h3 className="columnTitle">CONTACT US</h3>
          <ul className="columnList">
            <li className="listItemColumn">Email: basit.sardar.comsian@gmail.com</li>
            <li className="listItemColumn">Call us: 0345-9812889</li>
            <li className="listItemColumn">whatsapp: 0345-9812889</li>
          </ul>
        </div>
       
        <div className="footerColumn">
          <h3 className="columnTitle">INFORMATION</h3>
          <ul className="columnList">
          <Link to="/about">  <li className="listItemColumn">About Us</li></Link>
            <li className="listItemColumn">Contact Us</li>
            <li className="listItemColumn">FAQs</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h3 className="columnTitle">CUSTOMER CARE</h3>
          <ul className="columnList">
            <li className="listItemColumn">Terms of Service</li>
            <li className="listItemColumn">Social Media links</li>
            <div style={{gap:"1rem", width:"70%"}}>
              
              
              
              
            </div>
          </ul>
        </div>
       
        <div className="footerColumn">
          <h3 className="columnTitle">Social Media Links</h3>
          <ul className="columnList" style={{gap:"0.2rem"}}>
            <li className="listItemColumn" style={{}}><MdFacebook className="socialmediaicons" style={{color:"blue", fontSize:"2rem"}}/> Facebook</li>
            <li className="listItemColumn" style={{}}><MdWhatsapp className="socialmediaicons" style={{color:"rgb(49, 250, 49)", fontSize:"2rem"}}/>Whatsapp</li>
            <li className="listItemColumn" style={{}}><ImInstagram className="socialmediaicons" style={{color:"rgb(231, 22, 57)"}}/> Instagram</li>
            <li className="listItemColumn" style={{}}><ImTwitter className="socialmediaicons" style={{color:"rgb(0, 195, 255)"}}/> Twiter</li>
          </ul>
        </div>
      </div>
      <h2 className="copyright">©2023 All rights reserved.</h2>
    </footer>
  );
};

export default Footer;
