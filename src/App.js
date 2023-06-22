import {  MainContainer, VegBox, CartContainer } from "./Components";
import { AnimatePresence } from "framer-motion";
import "./Assets/css/wholeFile.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginForm from "./Components/Login And Registration/LoginForm";
import Registration from "./Components/Login And Registration/Registration";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";
import Dashboard from "./Components/Admin/Dashboard";
import Services from "./Components/Home/Services";
import PaymentPage from "./Components/Payment/PaymentPage";
import AboutUs from "./Components/Home/AboutUS";
import SellerDashboard from "./Components/Seller/Dashboard";




function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence mode="wait">
      <div className="wrap-Container">   
  
        

        <main id="main">
          <Routes>
              <Route path="/*" element={<MainContainer  />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<Registration />} />            
              <Route path="/cartContainer" element={<CartContainer />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/about" element={<AboutUs  />}/>
              <Route path="/menu" element={<VegBox flag={false} />} /> 
              <Route path="/services" element={<Services />}/> 
              <Route path={"/dashboard/*"} element={<Dashboard />} />
              <Route path={"/seller/*"} element={<SellerDashboard />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
    </StateProvider>

    
  

  );
}

export default App;










