import axios from "axios";
import { MdSouth } from "react-icons/md";


// "proxy": "https://elitebazar-server.onrender.com",
// const url="https://elitebazar-server.onrender.com";
const url="http://localhost:5000"

//  Product Related API
export const addProduct = async (Data)=>{
    return await axios.post(`${url}/product`,Data)
}
    
export const updateProduct = async (data, id) => {
  try {
    // console.log("data price:", data.get("price"));
    // const formData = new FormData();
    // formData.append("image", data.get("image"));
    // formData.append("name", data.get("name"));
    // formData.append("stock", data.get("stock"));
    // formData.append("price", data.get("price").toString());
    // formData.append("category", data.get("category"));
    // formData.append("popular", data.get("popular"));
      const pr = {
        name: data.get("name"),
        popular: data.get("popular"),
        category: data.get("category"),
        price: data.get("price"),
        stock: data.get("stock"),
        image: data.get("image")
      }
      console.log(id);
      console.log("price is api : ", data)
    return await axios.put(`${url}/product/${id}`, data);
  } catch (error) {
    console.log("Error while executing the updateProduct API", error);
  }
};

    

export const getProduct = async () => {
    return await axios.get(`${url}/product`);
    
  
  }
  export const getProductFromID= async(id)=>{
    return await axios.get(`${url}/product/${id}`);
  }


  export const deleteProduct = async (id) =>{
    return await axios.delete(`${url}/product/${id}`)
  }
  // export const updateProduct = async (data,id) => {
  //   const formData = new FormData();
  //   formData.append("image", data.get("image"));
  //   formData.append("name", data.get("name"));
  //   formData.append("stock", data.get("stock"));
  //   formData.append("price", data.get("price").toString());
  //   formData.append("category", data.get("category"));
  //   formData.append("popular", data.get("popular"));
  //           console.log("price is in updateProduct", data.get("price").toString());
    // return await axios.put(`${url}/product/update`, data);
  // };
  

  // User Related API
  export const postUser = async (data) => {
    console.log("i am in post user", data)
    return await axios.post(`${url}/user/register`,data);
  };

 export const loginUser = async (data) => {
    console.log("i am in login user", data)
    return await axios.post(`${url}/user/login`,data);
  };
  
  export const decodeToken = async (data) => {
    console.log("i am in decode Token", data)
    return await axios.post(`${url}/user/decodeToken`,data);
  };

  export const deleteToken = async (data) => {
    console.log("i am in deleteToken", data)
    return await axios.post(`${url}/user/deleteToken`,data);
  };

  export const getUser=async ()=>{
    return await axios.get(`${url}/user`);
  }
  
  






///Huzaifa's code delete it later

export const insertform = async (Data) => {
    return await axios.post(`${url}/ADMISSION`,Data);
  
  
  }
  
  //login
  
  export const insertlogin= async (data) => {
    return await axios.post(`${url}/LOGIN`,data);
  
  
  }
  //get data
  export const getlogin= async () => {
    return await axios.get(`${url}/ADMIN`);
  
  
  }
  export const deleteUsers = async (id) =>{
    return await axios.delete(`${url}/ADMIN/${id}`)
  }