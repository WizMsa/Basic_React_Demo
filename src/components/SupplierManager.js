import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class SupplierManager extends Component{
    constructor (){
    super();
}
render(){
    return(
            <div className="card card-danger text-center" style={{ minHeight:'45rem' }}>
                <div className="card-header text-danger" style={{ marginBottom: 0 }}>Suppliers</div>
                <div className = "container bg-light">
                <div className="row"> 
                <div className="col-sm-6">
                <NavLink to="#" className=" nav-link text-danger">Add Supplier</NavLink>
                </div>
                <div className="col-sm-6">
                <NavLink to="#" className="nav-link text-danger">Remove Supplier</NavLink>
                </div>
                </div>

                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                    <table className="table table-striped text-center text-danger">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>MNESA ASHKU HASHIM</td>
                            <td>0659398798</td>
                            <td>mnesaashku@gmail.com</td>
                            <td> <NavLink className="nav-link" to = "../SupplierProfile" > <button className="btn btn-outline-danger btn-sm">View</button> </NavLink> </td>
                        </tr>
                    </tbody>
                </table>

                    </div>
                    <div className="col-lg-1"></div>
                </div>
                </div>
            </div>
    )
}
}
export default SupplierManager;