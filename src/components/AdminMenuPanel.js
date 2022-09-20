import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class AdminMenuPanel extends Component{
    constructor (){
    super();
}
render(){
    return(
            <div className="card card-danger text-center d-flex float-start" style={{ minHeight:'40rem' }}>
                <div className="card-header text-danger" style={{ marginBottom: 20 }}>Admin Menu</div>
                <NavLink to="./SupplierList" className=" nav-link mb-2 text-danger">Supplier Manager</NavLink>
                <NavLink to="#" className="nav-link mb-2 text-danger">Delivery Manager</NavLink>
            </div>
    )
}
}
export default AdminMenuPanel;