import React, { useRef,useState } from 'react';
import "../../Assets/css/login.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import videoBackground from '../../Assets/img/background.mp4';
import { useStateValue } from '../../context/StateProvider';

const LoginForm = () => {




    const Refpassword = useRef();
    const Refemail = useRef();
    const navigate = useNavigate();
    const handleNavigation=(e)=>{
            e.preventDefault();
        // if(Refemail.current.value==='basit.sardar.comsian@gmail.com'&&Refpassword.current.value==='123'){
        // navigate('/dashboard/*');
        // }
        // else if(Refemail.current.value===user[1] && Refpassword.current.value===user[2] ){
        //     navigate('/')
        // }
        // else{
        //     navigate('/')
        // }
    }
    

   
    useEffect(()=>{
        Refemail.current.focus();
    },[])

  return (
    <div className='wrapper '>
         <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" id="vid"/>
        
      </video>
        <div className='login-div'>
            <h2 className='mb-3 '>Login</h2>
            <form id="loginForm" className='needs-validation' onSubmit={e=>{handleNavigation(e)}}>
            
            
            <div className='form-group was-validated mb-2'>
                <label htmlFor='email' className='form-label'>Email Address</label>
                <input name='email' type="email"  className='form-control' required ref={Refemail}/>
                <div className='invalid-feedback'>
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated  mb-2">
                <label htmlFor='password'  className='form-label'>Password</label>
                <input name='password' type="password" className='form-control' required ref={Refpassword}/>
                <div className='invalid-feedback' >
                    Please Enter Your Password
                </div>
            </div>
            <div className="form-group form-check mb-2">
                <input type="checkbox" className='form-check-input' />
                <label htmlFor='check' className='form-check-label'>Remember me</label>
            </div>
           
            <button  type="Submit" className='btn btn-success w-100 mt-2'>SIGN IN</button>
            
            <div className="form-group form-check mb-2 pad">
                <label htmlFor='check' className='form-check-label'>Don't have an Account ? 
                    <Link to='/register' ><span>Sign up</span></Link>
                </label>
            </div>
            </form>

        </div>
        
    </div>
  );
};

export default LoginForm;
