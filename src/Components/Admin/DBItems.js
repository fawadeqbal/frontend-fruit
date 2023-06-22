



import React from 'react'
import { MdDelete } from "react-icons/md";
import {motion} from "framer-motion";
import {useState,useEffect} from "react";
import { getProduct } from '../../Services/api';




function DBItems() {
  
  const [Items,setItems] = useState([]);
  useEffect(()=>{
    getItemsDetails();
  },)

  const getItemsDetails = async ()=>{
      const result =  await getProduct();
      setItems(result.data);
      console.log(result.data);
  }



  return (
    <div className="small-container cart-page">
    <table id="cart-table">
        <tr>
            <th className="thead">Product</th>
            <th className="thead">Price</th>
            <th className="thead">Delete</th>
        </tr>
        {Items &&
      Items.length > 0 &&
      Items.map((item) => (
        <tr>
            <td>
                <div className="cart-info">
                    <img className="cart-img" src={`https://elitebazar-server.onrender.com/uploads/${item.image}`} alt="img" />
                    <div>
                        <p>{item.category} </p>
                        <small>Name : $ {item.name} </small>
                    </div>
                </div>
                </td>
            <td>${item.price}</td>
            <td> <motion.span whileTap={{scale:0.75}} style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }}>
            <MdDelete style={{color:"black",}} />
           </motion.span></td>
        </tr>
       ))}
    </table>
    </div>
  )
}

export default DBItems