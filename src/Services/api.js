import axios from "axios";
import { MdSouth } from "react-icons/md";


const url="https://elitebazar-server.onrender.com";


//  Product Related API
export const addProduct = async (Data)=>{
    return await axios.post(`${url}/product`,Data)
}


export const getProduct = async () => {
    return await axios.get(`${url}/product`);
    
  
  }

  // User Related API
  export const postUser = async (data) => {
    console.log("i am in post user", data)
    return await axios.post(`${url}/user`,data);
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