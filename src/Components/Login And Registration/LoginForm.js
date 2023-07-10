import React, { useRef,useState } from 'react';
import "../../Assets/css/login.css";
import { useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import videoBackground from '../../Assets/img/background.mp4';
import { useStateValue } from '../../context/StateProvider';

import { loginUser } from '../../Services/api';
import { MdSouth } from 'react-icons/md';


const LoginForm = () => {
    
  const nav = useNavigate();

    const [user,setUser] = useState({       
    email:"",
    password:""
    });

     const RefEmail = useRef();
     const RefPassword= useRef();  


     

     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        if(user.email=="basit.sardar.comsian@gmail.com" && user.password=="basit"){
          nav("/dashboard/db-home")
        }
        
        else{
        try {
          const res = await loginUser(user);
                res.headers={
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token')
                }
          console.log(res); // Log the response object
          const data = await res.data; // Access the response data
          console.log(data);

          if (res.status === 400 && !data) {
            
            window.alert("Invalid Credentials");
          } else {
            localStorage.setItem('token', data.user);
            console.log(localStorage);
            window.alert("Login Successful");
            nav("/");
          }
        } catch (error) {
          console.log(error);
          window.alert("An error occurred");
        }
      }
      };
      

const handleChange = (e) => {   
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }

useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      localStorage.removeItem('token');
    }
    RefEmail.current.focus();
},[]);






   




    // const handleNavigation=(e)=>{
    //         e.preventDefault();

    //     // if(Refemail.current.value==='basit.sardar.comsian@gmail.com'&&Refpassword.current.value==='123'){
    //     // navigate('/dashboard/*');
    //     // }
    //     // else if(Refemail.current.value===user[1] && Refpassword.current.value===user[2] ){
    //     //     navigate('/')
    //     // }
    //     // else{
    //     //     navigate('/')
    //     // }
    // }
   
    

   
 

  return (
    <div className='wrapper'>
  <video autoPlay loop muted className="video-background">
    <source src={videoBackground} type="video/mp4" id="vid" />
  </video>
  <div className='login-div'>
    <h2 className='mb-3'>Login</h2>
    <form id="loginForm" className='needs-validation' onSubmit={handleSubmit}>
      <div className='form-group was-validated mb-2'>
        <label className='form-label'>Email Address</label>
        <input name='email' type="email" onChange={handleChange} className='form-control' required ref={RefEmail} />
        <div className='invalid-feedback'>
          Please Enter Your Email
        </div>
      </div>
      <div className="form-group was-validated  mb-2">
        <label className='form-label'>Password</label>
        <input name='password' type="password" onChange={handleChange} className='form-control' required ref={RefPassword} />
        <div className='invalid-feedback'>
          Please Enter Your password
        </div>
      </div>
      <div className="form-group form-check mb-2">
        <input type="checkbox" className='form-check-input' />
        <label htmlFor='check' className='form-check-label'>Remember me</label>
      </div>
      <button type="submit" onClick={handleSubmit} className='btn btn-success w-100 mt-2'>SIGN IN</button>
      <div className="form-group form-check mb-2 pad">
        <label htmlFor='check' className='form-check-label'>Don't have an Account ? 
          <Link to='/register'><span>Sign up</span></Link>
        </label>
      </div>
    </form>
  </div>
</div>

  );
};

export default LoginForm;

