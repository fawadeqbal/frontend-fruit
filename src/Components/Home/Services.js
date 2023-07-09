import "../../Assets/css/Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine} from "react-icons/ri";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "../cart/Cart";
import { useStateValue } from "../../context/StateProvider";
import { useState,useEffect } from "react";
import { decodeToken } from "../../Services/api";
import { useNavigate} from "react-router-dom";
import SmallBoxScreen from "../testing/SmallBoxScreen";
const Services =()=>{

    const [{cartShow}, dispatch]= useStateValue();
    const nav = useNavigate();

    const [smallbox,setSmallbox] = useState(false);
    useEffect( ()=>{
      isAuthorized();
    },[])
  
    const isAuthorized = async ()=>{
      const token = localStorage.getItem('token');
      console.log(token);
      
      if(token!=null){
        const user = await decodeToken(token);
        console.log(user);
          if(user.data.message=="Error"){
            localStorage.removeItem('token');
            nav("/login")
          }
      }
      else{
        setSmallbox(true);
        // nav("/login")
      }
    }
    return(
        <div className="container">
            <Header />
            <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
            <p className="para-tag ser-div">Our Services</p>
            </div>
            <div className="grid">
                
                <div className="services-1">
                    <div className="ser">
                        <TbTruckDelivery className="icon"/>
                        <h6>Super Fast and Free Delivery</h6>
                    </div>
                </div>
                <div className="services-2">
                    <div className="services-colum-2">
                        <MdSecurity className="icon"/>
                        <h6>Non-contact Shipping</h6>
                    </div>
                    <div className="services-colum-2">
                        <GiReceiveMoney className="icon"/>
                        <h6>Money Back Gurantee</h6>
                    </div>
                </div>
                <div className="services-3">
                    <div className="ser">
                        <RiSecurePaymentLine className="icon"/>
                        <h6>Super Secure Payment System</h6>
                    </div>
                </div>
            </div>
            <div className="brand-section">
            <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>
            <h5 className="ser-div">Trusted by 1000+ Users</h5>
            </div>
                <div className="brand-section-slider">
                    <img />
                </div>
            </div>
            { (cartShow) && (<Cart />)}

             {(smallbox) && (<SmallBoxScreen />)}
            <Footer />
        </div>
    )
}

export default Services;