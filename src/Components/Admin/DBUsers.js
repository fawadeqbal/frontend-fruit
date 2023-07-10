import React from 'react';
import { useState, useEffect } from 'react';
import { getUser } from '../../Services/api';


function DBUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
    console.log(user);
  },[]);

  const getUsers = async () => {
    const users = await getUser();
    setUser(users.data);
  };

  return (
    
    <div>
        
      <h2 style={{ textAlign: 'center' ,marginTop:'3%',marginBottom:'2%'}}>Customers' Data</h2>
      <table style={{ width: '90%', borderCollapse: 'collapse' ,padding:'2%',marginLeft:'5%',}}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>User Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Password</th>
          </tr>
        </thead>
        <tbody>
          {user.map((customer) => (
            <tr key={customer.id}>
              <td style={tableCellStyle}>{customer.userName}</td>
              <td style={tableCellStyle}>{customer.email}</td>
              <td style={tableCellStyle}>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// CSS styles
const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  fontWeight: 'bold',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default DBUser;


