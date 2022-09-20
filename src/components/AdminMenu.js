import React, {Component} from "react";
import AdminMenuPanel from "./AdminMenuPanel";
import NavBar from "./Navbar";

class AdminMenu extends Component{
    constructor (){
    super();
}
render(){
    return(
        <div className="container">
            < NavBar />
            < AdminMenuPanel />
        </div>
    )
}
}
export default AdminMenu;