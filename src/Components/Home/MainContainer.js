import HomeContainer from "./HomeContainer";
import "../../Assets/css/mainContainer.css"
import {motion} from "framer-motion";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useEffect, useRef, useState } from "react";
// import { Items } from "../../utils/data";
import axios from "axios";
import Cart from "../cart/Cart";
import Header from "./Header";
import Footer from "./Footer";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import {  getProduct } from "../../Services/api";

const MainContainer=()=>{
    const [{cartShow,products}, dispatch] = useStateValue();
   
    
    const [Items,setItems] = useState([]);
    useEffect(()=>{
      getItemsDetails();
    },[])
  
    const getItemsDetails = async ()=>{
        const result =  await getProduct();
        setItems(result.data);
        console.log(result.data);
    }
  


    const [scrollValue,setScrollValue] = useState(0);
    return(
        <div>
        <Header flag={true}/>
        <div  
        className="first">
            
            <HomeContainer />

            <section style={{width:"100%", margin:"1.5rem 2rem"}} >
                <div className="first-div">
                    <p className="para-tag">Our Popular Fruits </p>

                    <div style={{display:"flex", gap:"0.75rem", alignItems: "center",position:"absolute",right:"5rem"}}>
                        <motion.div whileTap={{scale:0.75}} className="icon-cnt" onClick={()=>setScrollValue(scrollValue-200)}><MdChevronLeft className="chev-icon"/></motion.div>
                        <motion.div whileTap={{scale:0.75}} className="icon-cnt" onClick={()=>setScrollValue(scrollValue+200)}><MdChevronRight className="chev-icon"/></motion.div>
                    </div>
                </div>
                <RowContainer scrollValue={scrollValue} data={Items.filter(e=>(e.popular===true && e.category==='Fruit'))} flag={true}/>

                <div className="first-div">
                    <p className="para-tag">Our Popular Vegies</p>

                    <div style={{display:"flex", gap:"0.75rem", alignItems: "center",position:"absolute",right:"5rem"}}>
                        <motion.div whileTap={{scale:0.75}} className="icon-cnt b2" onClick={()=>setScrollValue(scrollValue-200)}><MdChevronLeft className="chev-icon"/></motion.div>
                        <motion.div whileTap={{scale:0.75}} className="icon-cnt b2" onClick={()=>setScrollValue(scrollValue+200)}><MdChevronRight className="chev-icon"/></motion.div>
                    </div>
                </div>
                <RowContainer scrollValue={scrollValue} data={Items.filter(e=>(e.popular===true&&e.category==='Vegatible'))} flag={true}/>
            </section>
            { (cartShow) && (<Cart />)}
            
        </div>
       
        <Footer />
         
        </div>
    )
    
 
}
export default MainContainer;