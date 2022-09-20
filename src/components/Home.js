import react from "react";
import Food from "./Food";


class Home extends react.Component{
    render(){
        return(
            <div className="container-fluid text-danger"  >
                    < Food />
          </div>
        )
    }
}
export default Home;