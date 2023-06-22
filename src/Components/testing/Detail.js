
import "./detail.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Detail=()=>{
   
    const location = useLocation();
    const {from} = location.state;
        // const {id } = useParams();
        
//   const item = items.find(item=> item.id === parseInt(id));
const hangle=()=>{
    console.log();
}
  
  return(

    
        <div className="cntnr">
            <div className="m-div">
            <div className="card">
            <img src={from.imageSrc} alt="Card Image" />
            </div>
             <div className="content">
                     <h2>Description</h2>
                     <form className="in-form">
                        <div className="division">
                        Category: <span className="price-cnt1 my">{from.name}</span>
                        </div>
                        <div className="division">
                        Name: <span className="price-cnt1 my">{from.decp}</span>
                        </div>
                        <div className="division">
                        Price: <span className="price-cnt1 my">{from.price}</span>
                        </div>

                        {/* <button onClick={hangle}>btn</button> */}
                     </form>
                     
            </div>
            </div>
        </div>

       
    )
}
export default Detail;

 {/* <div className="main-div">
            
            <div className="data-div">
            <p className="pic-text">Fruit</p>
                            <p className="pic-small-text">Strawberryies</p>
                            <p className="price-amount"><span className="dollar-sign">$</span>2.25</p>
            </div>
        </div> */}