import react from "react";
import Card from "./Card";


class Food extends react.Component{
    render(){
        return(
            <div className="container-fluid text-danger"  >
                    <div className="card " style={{ maxWidth: '90rem',paddingTop: 5, }}>
                        <h5 className="card-header">Food</h5>
                        <div className="card-body d-flex flex-row" style={{ maxWidth: '10rem',paddingTop: 5, }}>
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                       < Card />
                    </div>
                    </div>
          </div>
        )
    }
}
export default Food;