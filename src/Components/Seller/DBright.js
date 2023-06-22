import React from "react";
import "../../Assets/css/DBRight.css";
import DBheader from "../Admin/DBheader";
import DBNewItem from "./DBNewItem";
import {Route, Routes} from "react-router-dom";
const DBright=()=>{
    return(
        <div className="db-main">
            <DBheader />
            <div className="db-sub">
            <DBNewItem />
            </div>
        </div>
    )
}
export default DBright;;