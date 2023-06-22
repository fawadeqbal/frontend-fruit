

import React from 'react';
import { useParams } from 'react-router-dom';

const Page2 = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
    </div>
  );
};

export default Page2;
