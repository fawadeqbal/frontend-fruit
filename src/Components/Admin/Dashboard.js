import React from "react";
import DBleft from "./DBleft";
import DBright from "./DBright";


const Dashboard=()=>{
    return(
        <div style={{width:"100vw", height:"100vh", display:"flex", alignItems:"center", justifyContent:"start"}}> 
            <DBleft />
            <DBright />
        </div>
    )
}
export default Dashboard;
    ;