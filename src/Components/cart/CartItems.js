import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdRemove } from "react-icons/md";
import { FaPlus } from 'react-icons/fa';
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
let items=[];
const CartItems = ({ item, setFlag, flag}) => {

    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(1);
    

    const cartDispatch = () => {
        // console.log("item before dispathc ", items);
      dispatch({
        type: actionType.SET_CART_ITEMS,
        cartItems: items,
       
      });
    };
  
    const updateQty = (action, id) => {
      if (action == "add") {
        setQty(qty + 1);
        item.qty+=1;
        cartItems.map((item) => {
          if (item.id === id) {            
            setFlag(flag + 1);
          }
        });
        // {console.log("item.qty in dispatch: ", item.qty)}
        cartDispatch();
      } else {
        // initial state value is one so you need to check if 1 then remove it
        if (qty == 1) {

          items = cartItems.filter((item) => item.id !== id);
          
          setFlag(flag + 1);
          cartDispatch();
        } else {
          setQty(qty - 1);
          item.qty-=1;
          cartItems.map((item) => {
            if (item.id === id) {
              
              setFlag(flag + 1);
            }
          });
          cartDispatch();
        }
      }
    };
  
    useEffect(() => {
      items = cartItems;
      console.log("in cartItems" + qty)
    }, [qty, items]);
  
  return (
    <div id="cart-items-cart">
      <img className="cart-img" src={`http://localhost:5000/uploads/${item?.image}`} alt="img" />
      <div className="cart-name-div">
        <p className="cart-name-p">{item?.name}</p>
        <p className="cart-name-p">{item?.category}</p>
        <p className="cart-name-p2">${parseFloat(item?.price) * qty}</p>
      </div>

      <div className="button-section-div">
        <motion.div name="min" whileTap={{ scale: 0.75 }} onClick={() => updateQty('sub', item.id)}>
          <MdRemove style={{ color: "rgb(221, 217, 217)", fontSize: "1rem" }} />
        </motion.div>
        <p style={{ width: "1.25rem", height: "1.25rem", backgroundColor: "#282a2c", borderRadius: "0.125rem", color: "rgb(221, 217, 217)", display: "flex", alignItems: "items-center", justifyContent: "center", marginTop: "1.25rem" }}>{qty}</p>
        <motion.div name="max" whileTap={{ scale: 0.75 }} onClick={() => updateQty("add", item.id)}>
          <FaPlus style={{ color: "rgb(221, 217, 217)", fontSize: "0.75rem" }} />
        </motion.div>
      </div>
    </div>
  );
}

export default CartItems;
