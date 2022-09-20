import react from "react";
import { NavLink } from "react-router-dom";
import logo  from "../image/chips.png";


class Card extends react.Component{
    render(){
        return(
            <div className="card" style={{ maxWidth: '15rem', minWidth: '10rem' }}>
            <h5 className="card-header">Fried Potato Chip</h5>
            <div className="card-body">
                <h5 className="card-title">Price: 2500/- Tsh</h5>
                <p className="card-text"> <img src= { logo } alt="" className="card-img-top img-thumbnail" /> </p>
                <NavLink to= "DetailFood" className="btn btn-danger nav-link">Press Order</NavLink>
            </div>
            </div>
                   
        )
    }
}
export default Card;