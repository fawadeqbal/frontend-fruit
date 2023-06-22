import React from "react";
import "../../Assets/css/db-home.css";
import { CChart } from "@coreui/react-chartjs";
import { useStateValue } from "../../context/StateProvider";
import { useEffect } from "react";

const DBHome = () => {
  const [{ products }, dispatch] = useStateValue();

  const fruit = products.filter(item => item.name == 'Fruit');


  return (
    <div className="main-db-home" >
      <div className="sub-div-home" style={{ display: "flex" }}>
        <div className="chat1">
          <div style={{ width: "20.75rem" }}>
            <CChart
              type="bar" style={{ width: "20.75rem", height: "20rem" }}
              data={{
                labels: ['Fruits', 'Vegies'],
                datasets: [
                  {
                    label: 'Store',
                    backgroundColor: '#f87979',
                    data: [40, 20],
                  },
                ],
              }}
              labels="Categories"
            />
          </div>
        </div>
        <div className="chat2">
          <div style={{ width: "18rem" }}>
            <CChart
              type="doughnut"
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>


    </div>
  )
}
export default DBHome;