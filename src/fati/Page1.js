// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Page1=()=>
// {
//         const[state, setState]=useState([
//             {id:1,name:"Basit", class:"BSE-4B"},
//             {id:2,name:"Saifi", class:"EEE-4B"},
//             {id:3,name:"Fati", class:"BCS-4B"}
//         ]);

//         return(
//             <div>
//                 <Link to={`/page2/${state.id}`} >
//                 <button>Detail</button>
//                 </Link>
//             </div>
//         )
// }
// export default Page1;


import React from 'react';
import { Link } from 'react-router-dom';
export const items = [
    {
      id: 1,
      name: 'Item 1',
      image: "/f5.png",
      description: 'Description of Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
      image: "/f6.png",
      description: 'Description of Item 2',
    },
    // Add more items as needed
  ];


const Page1 = () => {
 
  return (
    <div>
        he
      {items.map(item => (
        <div key={item.id}>
          <Link to={`/details/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page1;
