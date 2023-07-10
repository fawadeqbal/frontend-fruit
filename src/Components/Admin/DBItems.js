



import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from 'react-icons/fa';
import {motion} from "framer-motion";
import {useState,useEffect} from "react";
import { updateProduct, deleteProduct, getProduct } from '../../Services/api';
import { useNavigate } from 'react-router-dom';




function DBItems() {
  const nav = useNavigate();
  const [Items,setItems] = useState([]);
  useEffect(()=>{
    getItemsDetails();
  },[])

  const getItemsDetails = async ()=>{
      const result =  await getProduct();
      setItems(result.data);
      console.log(result.data);
  }

  const deleteItem = async (id) => {
    try {
      console.log("id in delete is: ", id);
      await deleteProduct(id);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const UpdateItem =  (id)=>{
    nav(`/dashboard/db-newItem/${id}`)
  }

  return (
    <div className="small-container cart-page">
    <table id="cart-table">
        <tr>
            <th className="thead">Product</th>
            <th className="thead">Price</th>
            <th className="thead">Delete</th>
            <th className="thead">Update</th>
        </tr>
        {Items &&
      Items.length > 0 &&
      Items.map((item) => (
        <tr>
            <td>
                <div className="cart-info">
                    {/* <img className="cart-img" src={`https://elitebazar-server.onrender.com/uploads/${item.image}`} alt="img" /> */}
                    <img className="cart-img" src={`http://localhost:5000/uploads/${item.image}`} alt="img" />
                    <div>
                        <p>{item.category} </p>
                        <small>Name : $ {item.name} </small>
                    </div>
                </div>
                </td>
            <td>${item.price}</td>
            <td> <motion.span whileTap={{scale:0.75}} onClick={()=>{deleteItem(item._id)}} style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }}>
            <MdDelete style={{color:"black",}} />
           </motion.span></td>
           <td> <motion.span whileTap={{scale:0.75}} onClick={()=>{UpdateItem(item._id)}} style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }}>
            <FaPencilAlt style={{color:"black",}} />
           </motion.span></td>
        </tr>
       ))}
    </table>
    
    </div>
  )
}

export default DBItems