import { MotionConfig } from "framer-motion";
import "../../Assets/css/DBheader.css";
import {MdCircleNotifications,MdLogout, MdSearch} from "react-icons/md";
import {motion} from "framer-motion";
import Avatar from "../../Assets/img/avatar.png";
import { Link } from "react-router-dom";


const DBheader=()=>{
    return(
        <div className="dH-main">
            <p className="dH-p1">
                WellCome to Elite Bazar;
            </p>
            <div id="search-dh">
                <div id="s-div-dh">
                    <MdSearch className="search-icon-dh"/>
                    <input className="search-box-dh" type="text" placeholder="search here ...." /> 
                    
                </div>
                <motion.div id="icon-2">
                    <MdCircleNotifications className="search-icon-dh"/>
                </motion.div>

                <motion.img 
         whileTap={{scale: 0.6}}
         src={Avatar} className="user" alt="userprofile" /> 
        <Link to='/login' > <MdLogout className="search-icon-dh" style={{fontSize:"2rem"}}/></Link>
            </div>

            
             
        </div>
    )
}
export default DBheader;