import react from "react";
import { NavLink } from "react-router-dom";
import logo  from "../image/chips.png";


class DetailFood extends react.Component{
    render(){
        return(
            <div className="card text-danger container d-flex" style={{ maxWidth: '40rem', minWidth: '20rem' }}>
            <h5 className="card-header">Fried Potato Chip (<i>Kigoma Catering</i>)</h5>
            <div className="card-body">
                <h5 className="card-title">Price: 2500/- Tsh</h5>
                <p className="card-text"> <img src= { logo } alt="" className="card-img-top img-thumbnail" /> </p>
                <NavLink to="" className="btn btn-danger">Pay by Cash</NavLink>
                <NavLink to="" className="btn btn-danger float-end">tigopesa</NavLink>
            </div>
            </div>
                   
        )
    }
}
export default DetailFood;