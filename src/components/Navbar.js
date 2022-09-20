import react from "react";
import { NavLink, Outlet} from 'react-router-dom';
import logo from "../image/canteen_logo.jpg";
import menu from "../image/5.jpg";
import Modal from "./Modal" 
class NavBar extends react.Component{
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    render(){
        return(
            <div className="container text-light" style={{ paddingBottom: 5 }}>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container ">
                  <NavLink className="navbar-brand text-danger" to ="/Dashboard">
                    <img src={ logo } className='rounded float-start' />
                  </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-danger" to="../Dashboard">Food</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-danger" to="Drink">Drinks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-danger" to="About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-danger" to="Contact">Contact</NavLink>
                        </li>
                    </ul>
                <form className="d-flex float-end">
                    <input className="form-control me-2 btn-outline-danger" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
          <p className="text-center"><u>For Admin And Supplier</u></p>
        </Modal>
            <button className="btn btn-outline-danger btn-sm" type="button" onClick={this.showModal}>
          <img style={{width:20}} src={ menu } />
        </button>
                </form>
                </div>
                </div>
            </nav>
            < Outlet />
            </div >
        )
    }
}
export default NavBar;