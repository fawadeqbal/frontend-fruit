

import f1 from "../../Assets/img/f1.png";
import f2 from "../../Assets/img/f2.png";
import f3 from "../../Assets/img/f3.png";
import f4 from "../../Assets/img/f4.png";
import f5 from "../../Assets/img/f5.png";
import f6 from "../../Assets/img/f6.png";
import f7 from "../../Assets/img/f7.png";
import f8 from "../../Assets/img/f8.png";
import f9 from "../../Assets/img/f9.png";
import f10 from "../../Assets/img/f10.png";
import v1 from "../../Assets/img/Green Pepper PNG Clipart - Best WEB Clipart.png";
import v2 from "../../Assets/img/Radishes PNG Clipart.png";
import v3 from "../../Assets/img/Red Pepper PNG Clipart - Best WEB Clipart.png";
import v4 from "../../Assets/img/Yellow Pepper PNG Clipart - Best WEB Clipart.png";
import v5 from "../../Assets/img/Sliced Red Onion stock photo_ Image of grow, skin, flavor - 1981656.jfif";
import v6 from "../../Assets/img/tomato.jfif";
import v7 from "../../Assets/img/7 Foods That Burn Fat.jfif";
import v8 from "../../Assets/img/potato.jfif";


import {useState, createContext, useContext} from "react";


export const Context = createContext();



const ItemContext=()=>{
    const [items, setitems]=useState([
        {id:1,name:"Fruit", decp:"Fresh Red StrawBerries",price:'10.25', imageSrc:f1},
        {id:2,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f2},
        {id:3,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f3},
        {id:4,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f4},
        {id:5,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f5},
       {id:6,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f6},
        {id:7,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f7},
        {id:8,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f8},
        {id:9,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f9},
       {id:10,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f10},       
       {id:6,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v6},
        {id:5,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v5},
        {id:7,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v7},
        {id:8,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v8},
        {id:1,name:"vegitable", decp:"Fresh Red StrawBerries",price:'10.25', imageSrc:v1},
       {id:2,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v4},        
        {id:3,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v3},      
       {id:4,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v2},
    ]);


    
    
}

