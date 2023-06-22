
import f1 from "../Assets/img/f1.png";
import f2 from "../Assets/img/f2.png";
import f3 from "../Assets/img/f3.png";
import f4 from "../Assets/img/f4.png";
import f5 from "../Assets/img/f5.png";
import f6 from "../Assets/img/f6.png";
import f7 from "../Assets/img/f7.png";
import f8 from "../Assets/img/f8.png";
import f9 from "../Assets/img/f9.png";
import f10 from "../Assets/img/f10.png";
import f11 from "../Assets/img/f11.png";
import f12 from "../Assets/img/f12.jfif";
import f13 from "../Assets/img/f13.png";
import f14 from "../Assets/img/f14.jfif";
import f15 from "../Assets/img/f15.jfif";
import f16 from "../Assets/img/f16.jfif";
import v1 from "../Assets/img/v1.png";
import v2 from "../Assets/img/v2.png";
import v3 from "../Assets/img/v3.png";
import v4 from "../Assets/img/v4.png";
import v5 from "../Assets/img/v5.jfif";
import v6 from "../Assets/img/v6.jfif";
import v7 from "../Assets/img/v7.jfif";
import v8 from "../Assets/img/v8.jfif";
import v9 from "../Assets/img/v9.jfif";
import v10 from "../Assets/img/v10.jfif";
import v11 from "../Assets/img/v11.jfif";
import v12 from "../Assets/img/v12.png";
import v13 from "../Assets/img/v13.jfif";
import v14 from "../Assets/img/v14.jfif";
import v15 from "../Assets/img/v15.png";
import { useState,useEffect } from "react";
import { getProduct } from "../Services/api";

import { createContext } from "react";
import axios from "axios";

export const heroData=[    
    {id:5,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f5},   
    {id:9,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f9},   
    {id:3,name:"Vegetable", decp:"Yellow Pepper",price:'25.25', imageSrc:v4},
    {id:4,name:"Vegetable", decp:"Red Pepper",price:'22.25', imageSrc:v3}
]

export const fruitData=[

    {id:1,name:"Fruit", decp:"Fresh Red StrawBerries",price:'10.25', imageSrc:f1},
    {id:3,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f3},
    {id:2,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f2},
    
    {id:4,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f4},
    {id:5,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f5},
   {id:6,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f6},
    {id:7,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f7},
    {id:8,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f8},
    {id:9,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f9},
   {id:10,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f10}
]


export const categories =[
    {id:1, name:"Fruit", urlParamName:'Fruit'},
    {id:1, name:"vegitable", urlParamName:'vegitable'}
]





// =[
//     {id:1,name:"Fruit",qty:1 ,popular:false, decp:"Strawberries",price:'10.25', imageSrc:f1},
//     {id:2,name:"Fruit",qty:1, popular:false, decp:"Pine-Apples",price:'15.25', imageSrc:f2},
//     {id:3,name:"Fruit",qty:1, popular:false, decp:"Blue-Berries",price:'12.5', imageSrc:f3},
//     {id:4,name:"Fruit",qty:1, popular:false,  decp:"Grapes",price:'13.5', imageSrc:f4},
//     {id:5,name:"Fruit",qty:1, popular:true, decp:" StrawBerries ",price:'5.5', imageSrc:f5},
//    {id:6,name:"Fruit",qty:1, popular:true, decp:"Pomegranate",price:'19.25', imageSrc:f6},
//     {id:7,name:"Fruit",qty:1, popular:true, decp:"Red-Berries",price:'35.25', imageSrc:f7},
//     {id:8,name:"Fruit",qty:1, popular:true, decp:"Berry",price:'25.5', imageSrc:f8},
//     {id:9,name:"Fruit",qty:1, popular:true, decp:"Bananas",price:'17.25', imageSrc:f9},
//    {id:10,name:"Fruit",qty:1, popular:false, decp:"Water-mellon",price:'28.25', imageSrc:f10},
//    {id:11,name:"Fruit",qty:1, popular:true, decp:"Mangoes",price:'29.75', imageSrc:f11},
//    {id:12,name:"Fruit",qty:1, popular:true, decp:"Oranges",price:'12.75', imageSrc:f12},
//    {id:13,name:"Fruit",qty:1, popular:true, decp:"Green Pear",price:'11.75', imageSrc:f13},
//    {id:14,name:"Fruit",qty:1, popular:true, decp:"Pine-apple",price:'10.75', imageSrc:f14},
//    {id:15,name:"Fruit",qty:1, popular:false, decp:"Grapes",price:'19.75', imageSrc:f15},
//    {id:16,name:"Fruit",qty:1, popular:true, decp:"Rusp_Berry",price:'12.75', imageSrc:f16},


   
//    {id:16,name:"vegitable",qty:1,popular:false, decp:"Tomatoes",price:'15.25', imageSrc:v6},
//     {id:25,name:"vegitable",qty:1,popular:true, decp:"Fine Onions",price:'15.25', imageSrc:v5},
//     {id:17,name:"vegitable",qty:1,popular:true, decp:"Red Chilli",price:'15.25', imageSrc:v7},
//     {id:18,name:"vegitable",qty:1,popular:true, decp:"Potatoes",price:'15.25', imageSrc:v8},
//     {id:27,name:"vegitable",qty:1,popular:true, decp:"Green Pepper",price:'10.25', imageSrc:v1},
//    {id:26,name:"vegitable",qty:1,popular:true, decp:"Yello Pepper",price:'15.25', imageSrc:v4},
//     {id:28,name:"vegitable",qty:1, popular:true,decp:"Red Pepper",price:'15.25', imageSrc:v3},
//    {id:29,name:"vegitable",qty:1,popular:true, decp:"Raddishes",price:'15.25', imageSrc:v2},
//    {id:19,name:"vegitable",qty:1,popular:true, decp:"Cabbages",price:'15.25', imageSrc:v9},
//    {id:20,name:"vegitable",qty:1,popular:true, decp:"Carrots",price:'15.25', imageSrc:v10},
//    {id:21,name:"vegitable",qty:1,popular:true, decp:"Egg Plant",price:'15.25', imageSrc:v11},
//    {id:22,name:"vegitable",qty:1,popular:false, decp:"Garlic",price:'15.25', imageSrc:v12},
//    {id:23,name:"vegitable",qty:1,popular:true, decp:"Orange Pepper",price:'15.25', imageSrc:v13},
//    {id:24,name:"vegitable",qty:1,popular:false, decp:"Peas",price:'15.25', imageSrc:v14},
//    {id:15,name:"vegitable",qty:1,popular:true, decp:"Juicy Lemons",price:'15.25', imageSrc:v15},
// ]

const Items=1;// you have to change it

const AppContext = createContext();

const AppProvider=({children})=>{
       
    const [Items,setItems] = useState([]);
    useEffect(()=>{
      getItemsDetails();
    },[])
  
    const getItemsDetails = async ()=>{
        const result =  await getProduct();
        setItems(result.data);
        console.log("i am in the app cnotext",result.data);
    }
  
    return(
        <AppContext.Provider value={Items}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext};