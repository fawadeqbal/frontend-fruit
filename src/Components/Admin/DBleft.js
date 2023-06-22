import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import "../../Assets/css/DBleft.css";

const DBleft=()=>{
    return(
        <div style={{width:"100%", height:"100vh",paddingTop:"3rem", paddingBottom:"3rem", display:"flex", flexDirection:"column", backgroundColor:"white", backdropFilter:" blur(8px)",boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", minWidth:"15rem", maxWidth:"18rem", gap:"0.75rem"}}>
                <Link to="/" >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem"}}>
                        <img src={Logo}  className="logo" alt="logo" />

                    </div>
                </Link>
                <hr style={{marginTop:"5rem"}}/>
                <ul style={{display:"Flex", flexDirection:"column", gap:"0.25rem"}}>
                <Link to="db-home"> <p className="links-in-left" style={{textDecoration:"none", marginBottom:"0.1rem"}}>Home</p></Link>
                <Link to="db-order"> <p className="links-in-left" style={{textDecoration:"none", marginBottom:"0.1rem" }}>Orders</p></Link>
                <Link to="db-item">  <p className="links-in-left" style={{textDecoration:"none", marginBottom:"0.1rem" }}>Items</p></Link>
                <Link to="db-newItem">   <p className="links-in-left" style={{textDecoration:"none", marginBottom:"0.1rem" }}>ADD New Items</p></Link>
                <Link to="db-user">   <p className="links-in-left" style={{textDecoration:"none", marginBottom:"0.1rem"}}>Users</p></Link>
                </ul>

                <div></div>
        </div>
    )
}
export default DBleft;