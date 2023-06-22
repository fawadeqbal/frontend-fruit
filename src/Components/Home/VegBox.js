import { MdOutlineShoppingBasket } from "react-icons/md";
import React from "react";
import "../../Assets/css/vegBox.css";
// import { Items } from "../../utils/data";
import axios from "axios";
import { useState } from "react";
import RowContainer from "./RowContainer";
import Header from "./Header";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Footer from "./Footer";
import { getProduct } from "../../Services/api";

const VegBox=()=>{
    
const [filter, setFitler] = useState('Vegatible');
const [Items,setItems] = useState([]);

const categories = [
    {id:1, name:'Fruit'}, 
    {id:2, name:"Vegatible"}];
        const [{ cartShow}, dispatch] = useStateValue();

        
           

    
        
        useEffect(()=>{
          getItemsDetails();
        },[])
      
        const getItemsDetails = async ()=>{
            const result =  await getProduct();
            setItems(result.data);
            console.log(result.data);
        }
      
    



    return(
        
         <section style={{width:"100%", marginTop:"0rem", marginBottom:"1.5rem"}} id="menu">
             <Header />
            <div style={{width:"100vwd", display:"flex", alignItems:"center", justifyContent:"start", flexDirection:"row"}}>
                <p className="para-tag" style={{ marginRight:"4rem",marginLeft:"1.5rem",width:"25rem" }}>Our Menu Items</p>

                <div style={{marginLeft:"5rem",width:"15rem", display:"flex", alignItems:"center", justifyContent:"space-around", gap:"4rem", paddingTop:"1.5rem", paddingBottom:"1.5rem", overflowX:"hidden", scrollbar:"none"}}>
                    {categories && categories.map(category=>(
                        <div key={category?.id} className="crd" >
                        <div className="cItem" onClick={()=>setFitler(category.name)}> <MdOutlineShoppingBasket style={{fontSize:"1.3rem"}}/> </div>
                        <p>{category.name} </p>
                    </div>
                    ))}
                    
                </div>
                
            </div>
            <div style={{width:"100vw"}}>
                    <RowContainer flag={false} 
                    data={Items.filter((n)=> n.category === filter)}
                    
                    />
                </div>
                { (cartShow) && (<Cart />)}
                <Footer />
         </section>
    );
}
export default VegBox;