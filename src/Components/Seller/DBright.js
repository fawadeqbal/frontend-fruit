import React from "react";
import "../../Assets/css/DBRight.css";
import DBheader from "./DBheader";
import DBHome from "./DBHome";
import DBOrder from "./DBOrder";
import DBNewItem from "./DBNewItem";
import DBUser from "./DBUsers";
import DBItems from "./DBItems";
import {Route, Routes} from "react-router-dom";
const DBright=()=>{
    return(
        <div className="db-main">
            <DBheader />
            <div className="db-sub">
                <Routes>
                   
                    <Route path="/db-newItem" element={<DBNewItem />} />   

                    
                </Routes>
            </div>
        </div>
    )
}
export default DBright;;