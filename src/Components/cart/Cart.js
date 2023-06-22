import { MdOutlineKeyboardBackspace, MdRemove } from "react-icons/md";
import "../../Assets/css/cart.css";
import React from "react";
import EmptyCart from "../../Assets/img/emptyCart.svg";
import { motion } from "framer-motion";
import { MdRefresh } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import CartItems from "./CartItems";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    setTot(totalPrice);
  }, [cartItems]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="main-cart-div"
    >
      <div className="back-option-div">
        <motion.div onClick={showCart} whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            style={{ color: "#2e2e2e", fontSize: "2rem" }}
          />
        </motion.div>

        <p id="cart-cart">Cart</p>
        <motion.p onClick={clearCart} whileTap={{ scale: 0.75 }} id="clear-cart">
          Clear<MdRefresh />
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="bottom-section-cart">
          <div className="sub-bottom-cart">
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItems
                  key={item._id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          <div id="cart-total-div">
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ color: "rgb(148, 147, 147)", fontSize: "large" }}>Sub Total</p>
              <p style={{ color: "rgb(148, 147, 147)", fontSize: "large" }}>$ {tot}</p>
            </div>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ color: "rgb(148, 147, 147)", fontSize: "large" }}>Delivery</p>
              <p style={{ color: "rgb(148, 147, 147)", fontSize: "large" }}>$ 2.5</p>
            </div>
            <div style={{ width: "100%", backgroundColor: "#718096", borderBottomWidth: "4rem", borderColor: "red", marginTop: "0.5rem", marginBottom: "0.5rem", height: "0.25rem" }}></div>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ color: "#e2e8f0", fontSize: "larger", fontWeight: "600" }}>Total</p>
              <p style={{ color: "#e2e8f0", fontSize: "larger", fontWeight: "600" }}>$ {tot + 2.5}</p>
            </div>
            <Link to="/cartContainer">
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="checkOutBtn"
              >
                Check Out
              </motion.button>
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
          <img src={EmptyCart} style={{ width: "20rem" }} />
          <p style={{ fontSize: "larger", color: "#515151", fontWeight: "600" }}>
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
