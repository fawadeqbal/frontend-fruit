
import { useRef, useState } from "react";
import "../../Assets/css/createContainer.css"
import { motion } from "framer-motion";

import { MdFastfood, MdCloudUpload, MdDelete, MdAttachMoney } from "react-icons/md";
import { categories } from "../../utils/data";
import Loader from "../Home/Loader";
import Header from "../Home/Header";
import vidBackground from "../../Assets/img/createItems.mp4";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";
import { addProduct, updateProduct } from "../../Services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductFromID } from "../../Services/api";

function DBNewItem (){
    const {id} = useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        if(id)
        populateForm(id);
    },[])
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        popular: true,
        category: "",
        price: "",
        stock: "",
        image: ""
    });

    const [missingFields, setMissingFields] = useState([]);
    const [downloadImgUrl, setDownloadImgUrl] = useState(null);


    const dangerClass = alertStatus === 'danger' ? 'danger danger-bg' : 'danger safe-bg';

    const handleLoad = () => {

    }

    const handleChange = (e) => {

        
            if (e.target.name === "image") {
                setIsLoading(true);
                const file = e.target.files[0];
                setProduct((prevProduct) => ({ ...prevProduct, [e.target.name]: file }));
            
                // Create a FileReader instance
                const reader = new FileReader();
            
                reader.onload = () => {
                  // Get the URL of the image
                  const imageUrl = reader.result;
                  setDownloadImgUrl(imageUrl);
                  setIsLoading(false);
                };
            
                reader.readAsDataURL(file);
            }
            else {
                setProduct({ ...product, [e.target.name]: e.target.value });
            }


        }

        const saveDetails = async (e) => {          

            e.preventDefault();

            const requiredFields = ["name", "category", "price", "stock", "image"];
            const missing = requiredFields.filter((field) => product[field] === "");
            setMissingFields(missing);

            if (missing.length === 0) {
                const formData = new FormData();
                formData.append("image", product.image);
                formData.append("name", product.name);
                formData.append("stock", product.stock);
                formData.append("price", product.price.toString());
                formData.append("category", product.category);
                formData.append("popular", product.popular);

                if(id==null)
               {  console.log("image in ",product.price);
                await addProduct(formData);}
                else
                { 
                    console.log("Price is ;",product.image);
                    await updateProduct(formData,id);
                   
                }
               
                setFields(false);
                // this.value = "";
                window.location.reload(true);
                // navigate("https://localhost:3000/dashboard/db-item");
                // navigate('/', { replace: true });
            }
            else {
                setFields(true);
            }
        };

        const populateForm = async (id) => {
            try {
              const response = await getProductFromID(id);
              const productData = response.data;
                console.log(productData);
              setProduct({
                name: productData.name,
                popular: productData.popular,
                category: productData.category,
                price: productData.price,
                stock: productData.stock,
                image: ""
              });
             
            } catch (error) {
              console.log("Error in populateForm", error);
            }
          };
          

        return (


            <div className="main-div">

                <form className="sub-main">
                    {
                        fields && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={dangerClass}>
                                {msg}
                            </ motion.p>
                        )
                    }
                    <div className="sub-main2">
                        <MdFastfood id="fastFood" />
                        <input name="name" id="titleField" type="text" required value={product.name} placeholder="Give me a title" onChange={handleChange} />
                        {missingFields.includes("name") && <span className="error-message">Please enter your name</span>}
              </div>

                    <div style={{ width: "100%" }}>
                        <select value={product.category} onChange={(e) => { setProduct({ ...product, category: e.currentTarget.value }) }}
                            id="selectTag">

                            <option value="other" style={{ backgroundColor: "white" }}>Select Category</option>
                            <option className="options" value="Fruit">Fruit</option>
                            <option className="options" value="Vegatible">Vegatible</option>
                            {missingFields.includes("category") && <span className="error-message">Please enter your name</span>}
             
                        </select>



                    </div>

                    <div id="img-upload-div">
                        {isLoading ? <Loader /> : <>
                            {
                                !downloadImgUrl ? <>
                                    <label className="img-upoader1">
                                        <div className="sub1">
                                            <MdCloudUpload className="upload-icon" />
                                            <p className="upload-icon">Click here to upload</p>
                                        </div>
                                        <input style={{ width: '0', height: '0' }} type="file" name="image" onChange={e => handleChange(e)} accept="image/*" />
                                    </label>
                                </> : <>
                                    <div style={{ position: "relative", color:"white",height: "100%"}}>
                                        <img src={downloadImgUrl} alt="uploaded image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                       </div>
                                       <button type="button" id="del-btn" onClick={(e)=>{setDownloadImgUrl(null)}} ><MdDelete style={{ backgroundColor:"white", color:"red" }} /></button>
                                    
                                </>
                            }
                        </>}
                    </div>

                    <div className="price-cnt1">
                        <MdAttachMoney style={{ fontSize: "1.75rem", color: "#4a5568" }} />
                        <input type="number" name="price" onChange={handleChange} required value={product.price} placeholder="Price" id="price" />
                        {missingFields.includes("price") && <span className="error-message">Please enter your name</span>}
             

                    </div>
                    <div className="price-cnt1">
                        <MdAttachMoney style={{ fontSize: "1.75rem", color: "#4a5568" }} />
                        <input name="stock" type="number" onChange={handleChange} required value={product.stock} placeholder="Stock" id="price" />

                        {missingFields.includes("stock") && <span className="error-message">Please enter your name</span>}
             
                    </div>

                    <div>
                        <button type="submit" id="save" onClick={saveDetails} >Save</button>
                    </div>
                </form>
            </div>)

    
}
export default DBNewItem;