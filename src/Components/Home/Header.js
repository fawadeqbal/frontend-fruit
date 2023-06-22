import React from "react";
import "../../Assets/css/header.css";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import Avatar from "../../Assets/img/avatar.png";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";


const Header = ({flag}) => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  
  console.log(cartItems);

  const handleCart=()=>{
    dispatch({
      type:actionType.SET_CART_SHOW,
      cartShow : !cartShow,
      
    })
    
  }
  return (
    <header className="container" style={{width:"100vw", backgroundColor: flag? "#f7ebeb": "rgba(248, 230, 224, 0.8)" , }}>
      <div className="main-container">
        <Link to="/" className="logo-container">
          <img src={Logo} className="logo" alt="logo" />
          
        </Link>
       <div className="menu-container">
       <motion.ul 
        initial={{opacity:0, x:200}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:200}}
       className="menu">
         <Link to="/" > <li ><span>Home</span></li></Link>
         <Link to="/menu" ><li ><span>Menu</span></li></Link>
         <Link to="/about"> <li ><span>About Us</span></li></Link>
         <Link to="/services" > <li ><span>Services</span></li></Link>

         <div className="animation start-home"></div>
        </motion.ul>
         <div className="bag" onClick={handleCart}>
         <MdShoppingBasket className="bag-icon" style={{color:"black"}}/>
          { cartItems && cartItems.length>=0  &&(
            <div className="circle">
            <p className="num">{cartItems?.length}</p>
          </div> 
          )}
        </div>

        <div className="login">
         {}

<div className="dropdown">
<motion.img 
         whileTap={{scale: 0.6}}
         src={Avatar} className="user" alt="userprofile" data-bs-toggle="dropdown"/> 
  
  <div className="dropdown-menu" style={{zIndex:"1000"}}>
   <Link to='/login'><li style={{display:"flex"}}><button className="dropdown-item" type="button">Logout <MdLogout /></button></li></Link> 
    </div>
</div>
        </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
