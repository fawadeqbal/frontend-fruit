import { MdDelete } from "react-icons/md";
import {motion} from "framer-motion";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "../../Assets/css/checkOutContainer.css";
import { useStateValue } from "../../context/StateProvider";
import {useState,useMemo,useEffect}from "react";
import { Link } from "react-router-dom";
const CheckOutContainer=()=>{



    const [{  cartItems }, dispatch] = useStateValue();
    // const [qty, setQty] = useState(item.qty);
    // const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);
    console.log("Items in the CART CONTAINER : ", cartItems)

    const totalPrice = useMemo(()=>{
        let totalPrice=0;
        cartItems.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }, [cartItems])
    useEffect(()=>{
        setTot(totalPrice);
    },[totalPrice])
   

    return(

        
        <div className="main-cartContainer">
            <Header />
        
        <div className="small-container cart-page">
            <table id="cart-table">
                <tr>
                    <th className="thead">Product</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">SubTotal</th>
                    <th className="thead">Delete</th>
                </tr>
                {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <tr>
                    <td>
                        <div className="cart-info">
                            <img className="cart-img" src={`http://localhost:5000/uploads/${item?.image}`} alt="img" />
                            <div>
                                <p>{item.decp} </p>
                                <small>Price : $ {item.price} </small>
                            </div>
                        </div>
                        </td>
                   <td> <input type="text" value={item.qty}/></td>
                    <td>${item.qty * item.price}</td>
                    <td> <motion.span whileTap={{scale:0.75}} style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }}>
                    <MdDelete style={{color:"black",}} />
                   </motion.span></td>
                </tr>
               ))}
            </table>
            <div className="total-price">
                <table id="sub-cart-table">
                    <tr className="tr-of-sub-cart-table">
                        <td>SubTotal</td>
                        <td>$ {tot}</td>
                    </tr>
                    <tr className="tr-of-sub-cart-table">
                        <td>Delivery</td>
                        <td>$2.5</td>
                    </tr>
                    <tr className="tr-of-sub-cart-table">
                        <td>Total</td>
                        <td>$ {tot + 2.5}</td>
                    </tr>
                </table>
            </div>
         <Link to="/payment"><button type="button" id="order-btn" >Pay Now !</button></Link>   
            <Footer />
        </div>
        </div>
    );
}
export default CheckOutContainer;