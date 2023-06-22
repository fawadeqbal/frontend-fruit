
import { useState } from "react";
import "../../Assets/css/createContainer.css"
import {motion } from "framer-motion";

import { MdFastfood, MdCloudUpload, MdDelete, MdAttachMoney } from "react-icons/md";
import { categories } from "../../utils/data";
import Loader from "./Loader";
import Header from "./Header";
import vidBackground from "../../Assets/img/createItems.mp4";
import { useStateValue } from "../../context/StateProvider";



const CreateContainer=()=>{
    // const[title,setTitle]=useState("");
    // const[price,setPrice]=useState("");
    // const[category,setCategory]=useState("");
    // const[imageAsset, setImageAsset]=useState(null);
    const[fields,setFields]=useState(false);
    const[alertStatus, setAlertStatus]=useState("anger");
    const[msg, setMsg]=useState(null);
    const[isLoading, setIsLoading]=useState(false);

    const [inputData, setInputData] = useState({
        title:"",
        price:"",
        category:"",
        imageAsset:"",
      });
      const { addProduct, setNewAddProduct, dispatch } = useStateValue();
  
    const dangerClass = alertStatus === 'danger' ? 'danger danger-bg' : 'danger safe-bg';


    const handleChange=(e)=>{
            const{name,value}=e.target;

            
            setInputData({
               ...inputData,
            [name]:value
            })            
            if(name=="uploadimage")
            {
                setIsLoading(true);
                const imagefile=e.target.file[0];
                console.log(imagefile)
            }

    }

    const saveDetails=(e)=>{
        e.preventDefault();
        setNewAddProduct([...addProduct, { ...inputData }]);
      setInputData({
        title:"",
        price:"",
        category:"",
        imageAsset:"",
      });
    };

    return(


    <div className="main-div">
         <Header flag={false}/>
         <video autoPlay loop muted className="video-background">
  <source src={vidBackground} type="video/mp4" id="vid" />
</video>
        <div className="sub-main">
            {
                fields && (
                    <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className={dangerClass}>
                        {msg}
                    </ motion.p>
                )
            }
            <div className="sub-main2">
            <MdFastfood id="fastFood" />
            <input name="title" id="titleField" type="text" required value={inputData.title} placeholder="Give me a title" onChange={handleChange} />
            
            </div>

            <div style={{width:"100%"}}>
                <select name="category" onChange={handleChange} id="selectTag">
                    <option value="other" style={{backgroundColor:"white"}}>Select Category</option>
                    {
                        categories.map(item=>(
                        <option key={item.id} className="options" value={item.urlParamName}>{item.name}</option>
                                                ))                        
                    }
                </select>
            </div>

            <div id="img-upload-div">
                    {isLoading ? <Loader /> : <>
                         {
                            !inputData.imageAsset ? <>
                            <label className="img-upoader1">
                                <div className="sub1">
                                    <MdCloudUpload className="upload-icon"/>
                                    <p className="upload-icon">Click here to upload</p>
                                </div>
                                <input style={{width:'0', height:'0'}} type="file"  name="uploadimage" accept="image/*" onChange={handleChange} />
                            </label>
                            </>: <>
                            <div style={{position:"relative", height:"100%"}}>
                                <img src={inputData.imageAsset} alt="uploaded image" style={{width:"100%", height:"100%" , objectFit:"cover"}}/>
                                <button type="button" id="del-btn" ><MdDelete style={{color:"white"}}/></button>
                            </div>
                            </>
                         }
                    </>}
            </div>

            <div className="price-cnt1">
                <MdAttachMoney style={{ fontSize: "1.75rem" ,color: "#4a5568" }}/>
                <input name="price" type="number" onChange={handleChange} required value={inputData.price} placeholder="Price" id="price" />
                
        
            </div>

            <div>
                <button type="submit" id="save" onClick={e=>saveDetails(e)}>Save</button>
            </div>
        </div>
         </div>)

}
export default CreateContainer;