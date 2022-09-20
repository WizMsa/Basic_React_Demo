import react from "react";
import Drinks from "./Drinks";


class Drink extends react.Component{
    render(){
        return(
            <div className="container-fluid text-danger "  >  
                    < Drinks />
          </div>
        )
    }
}
export default Drink;