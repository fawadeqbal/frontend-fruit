import React, { useState } from "react";
import "../../Assets/css/Payment.css";
import cardImg from "../../Assets/img/card_img.png";
import { useStateValue } from "../../context/StateProvider";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
    const navigate= useNavigate();
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
            navigate('/');
  };
  const [{user},dispatch] = useStateValue();
  return (
    <div>
   
    <div className="container">
    <Header />
    <form id="payment-form" onSubmit={handleSubmit}>

        <div className="row">

            <div className="col">

                <h3 className="title">billing address</h3>

                <div className="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="Basit Iqbal" required value={user[0]}/>
                    <div className='invalid-feedback'>
                    Please Enter Your Full Name
                </div>
                </div>
                <div className="inputBox">
                    <span>email :</span>
                    <input type="email" required placeholder="abc@gmail.com" value={user[1]}/>
                </div>
                <div className="inputBox">
                    <span>address :</span>
                    <input type="text" required placeholder="room - street - locality" />
                </div>
                <div className="inputBox">
                    <span>city :</span>
                    <input type="text" required placeholder="Abbottabad" />
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>state :</span>
                        <input type="text" required placeholder="Pakistan" />
                    </div>
                    <div className="inputBox">
                        <span>zip code :</span>
                        <input type="text" required placeholder="123 456" />
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src={cardImg} alt="" />
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" required placeholder="mr. basit iqbal" /> 
                </div>
                <div className="inputBox">
                    <span>credit card number :</span>
                    <input type="number" required placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" required placeholder="january" />
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" required placeholder="2023" />
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" required placeholder="1234"  />
                    </div>
                </div>

            </div>
    
        </div>

        <button type="submit"  className="submit-btn" >Confirm Payment</button>

    </form>

   
</div>
<Footer />    
</div>
  );
};

export default PaymentPage;
