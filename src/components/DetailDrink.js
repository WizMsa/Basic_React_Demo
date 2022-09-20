import react from "react";
import logo  from "../image/chips.png";


class DetailDrink extends react.Component{
    render(){
        return(
            <div className="card" style={{ maxWidth: '15rem', minWidth: '10rem' }}>
            <h5 className="card-header">Fried Potato Chip</h5>
            <div className="card-body">
                <h5 className="card-title">Price: 2500/- Tsh</h5>
                <p className="card-text"> <img src= { logo } alt="" className="card-img-top img-thumbnail" /> </p>
                <a href="#" className="btn btn-danger">Press Order</a>
            </div>
            </div>
                   
        )
    }
}
export default DetailDrink;