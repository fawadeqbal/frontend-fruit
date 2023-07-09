import React from 'react';
import "../../Assets/css/rowContainer.css";
import { MdOutlineStarBorder, MdShoppingBasket, MdStarRate } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { decodeToken } from '../../Services/api';
import SmallBoxScreen from '../testing/SmallBoxScreen';

function RowContainer({ flag, data, scrollValue }) {
  const rowContainerRef = useRef();
  const nav = useNavigate();
  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  const [{ cartItems }, dispatch] = useStateValue();
  
  const [smallbox,setSmallbox] = useState(false);

  const handleCartItems = async (fruit) => {
    
    const token = localStorage.getItem('token');
    if(token){
      const user = await decodeToken(token);
      console.log(user);
        if(user.data.message=="Error"){
          localStorage.removeItem('token');
          nav("/login")
        }
        else{
          const updatedCartItems = [...cartItems, fruit];
          dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: updatedCartItems,
          });
        }
    }
    else{
      setSmallbox(true);
    }
    
  };

  

  return (
    <div
      ref={rowContainerRef}
      style={{
       
        width: "100%",
        height: "auto",
        margin: "1.7rem 1rem",
        gap: "2rem",
        display: "flex",
        alignItems: "center",
        overflowX: flag ? "scroll" : "hidden",
        flexWrap: flag ? "" : "wrap",
        justifyContent: flag ? "" : "center",
      }}
    >
      {data.map((fruit) => (
        <div key={fruit._id} className="inner-div">
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              style={{ width: "10rem", height: "7rem", marginTop: "1.5rem" }}
              src={`https://elitebazar-server.onrender.com/uploads/${fruit.image}`}
              alt="img"
            />

            <motion.div
              whileTap={{ scale: 0.75 }}
              style={{
                
                width: "2.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: "red",
              }}
              onClick={() => handleCartItems(fruit)}
            >
              <MdShoppingBasket style={{ color: "white" }} />
            </motion.div>
          </div>

          <div style={{ width: "100%", display: "flex", alignItems: "end", justifyContent: "end", flexDirection: "column" }}>
            <p style={{ color: "#515151", fontWeight: "600", fontSize: "1.5rem" }}>{fruit?.category}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <p style={{ fontSize: "large", color: "#515151", fontWeight: "700" }}>
                <span style={{ fontSize: "small", color: "#EF4444" }}>$</span>
                {fruit?.price}
              </p>
            </div>
          </div>
          <div className="review-stars">
            <MdStarRate style={{ color: "#ff9933" }} />
            <MdStarRate style={{ color: "#ff9933" }} />
            <MdStarRate style={{ color: "#ff9933" }} />
            <MdStarRate style={{ color: "#ff9933" }} />
            <MdOutlineStarBorder style={{ color: "black" }} />
          </div>
        </div>
      ))}
      {(smallbox)&&(<SmallBoxScreen />)}
    </div>
  );
}

export default RowContainer;
