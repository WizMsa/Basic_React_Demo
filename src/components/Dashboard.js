import react from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

class Dashboard extends react.Component{
    render(){
        return(
            <div className="container text-danger">
              < Navbar />
              < Outlet />
          </div>
        )
    }
}
export default Dashboard;