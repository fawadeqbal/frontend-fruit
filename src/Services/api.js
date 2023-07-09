import axios from "axios";
import { MdSouth } from "react-icons/md";


// "proxy": "https://elitebazar-server.onrender.com",
// const url="https://elitebazar-server.onrender.com";
const url="http://localhost:5000"

//  Product Related API
export const addProduct = async (Data)=>{
    return await axios.post(`${url}/product`,Data)
}


export const getProduct = async () => {
    return await axios.get(`${url}/product`);
    
  
  }


  export const deleteProduct = async (id) =>{
    return await axios.delete(`${url}/product/${id}`)
  }

  export const updateProduct = async (id, data) => {
    return await axios.put(`${url}/product/${id}`, data);
  }


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