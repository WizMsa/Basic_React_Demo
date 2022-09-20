import react from "react";
import DrinkCard from "./DrinkCard";


class Drinks extends react.Component{
    render(){
        return(
            <div className="container-fluid text-danger" style={{ maxWidth: '90rem',paddingTop: 5,}} >
                    <div className="card">
                        <h5 className="card-header">Drinks</h5>
                        <div className="card-body d-flex flex-row">
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                       < DrinkCard />
                    </div>
                    </div>
          </div>
        )
    }
}
export default Drinks;