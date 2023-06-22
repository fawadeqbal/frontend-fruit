import React from 'react';
import "../../Assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import videoBackground from '../../Assets/img/background.mp4';
import { useRef, useEffect } from 'react';
import { postUser } from '../../Services/api';

const Registration = () => {
    const [user,setUser] = useState({
        userName: "",
    email:"",
    password:""
    });

     const RefEmail = useRef();
     const RefPassword= useRef();     
const RefUserName = useRef();

const nav= useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();    
   
await postUser(user);
    nav('/login');
}

const handleChange = (e) => {   
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

useEffect(()=>{
    RefUserName.current.focus();
},[]);



  return (
    <div className='wrapper '>
         <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" id="vid"/>
        
      </video>
        <div className='login-div'>
            <h2 className='mb-3 '>Sign Up</h2>
            <form id='regForm' className='needs-validation'>
            <div className='form-group was-validated mb-2'>
                <label className='form-label'>User Name</label>
                <input name='userName' type="text"  className='form-control'onChange={handleChange} required ref={RefUserName}/>
                <div className='invalid-feedback'>
                    Please Enter Your Name
                </div> 
            </div>
            {/* <div className='form-group was-validated mb-2'>
                <label htmlFor='text' className='form-label'>Last Name</label>
                <input type="text"  className='form-control' required/>
                <div className='invalid-feedback'>
                    Please Enter Your Last Name
                </div>
            </div> */}
            
            <div className='form-group was-validated mb-2'>
                <label className='form-label'>Email Address</label>
                <input name='email' type="email" onChange={handleChange} className='form-control' required ref={RefEmail}/>
                <div className='invalid-feedback'>
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated  mb-2">
                <label  className='form-label'>Password</label>
               <input name='password' type="password" onChange={handleChange} className='form-control' required ref={RefPassword}/>
                <div className='invalid-feedback'>
                    Please Enter Your password
                </div>
            </div>
           
           
            <Link to='/login'>  <button type="submit" onClick={e=>handleSubmit(e)} className='btn btn-success w-100 mt-2'>SIGN UP</button></Link>
            <div className="form-group form-check mb-2 pad">
                <label  className='form-check-label'>Already have an Account ? 
                    <Link to='/login'  ><span>Sign in</span></Link>
                </label>
            </div>
            </form>

        </div>
        
    </div>
  );
};

export default Registration;
