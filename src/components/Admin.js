import react from "react";
import logo from "../image/canteen.png"
import { NavLink } from 'react-router-dom';
class Admin extends react.Component{
    render(){
        return(
            <div style={ {marginTop : '30px', width : '300px' } } className="container text-danger">
                <img src={ logo }  alt="" className="img rounded-circle" width={280}/>
                <h3 className="text-center">Login</h3>
            <form className="">
                    <input className="form-control mb-1 btn-outline-danger " type="text" placeholder="Username" aria-label="Username"/>
                    <input className="form-control mb-1 btn-outline-danger " type="password" placeholder="Password" aria-label="Password"/>
                    <label style={ {paddingLeft: '20px', paddingTop: '5px' } } > Have No Account?
                        </label>
                        <NavLink className= "btn btn-outline-danger btn-sm" to='/Create'>Create</NavLink>
                    <NavLink className="btn btn-outline-danger float-start" to='../../AdminMenu'>Login</NavLink>
                    </form>
          </div>
        )
    }
}
export default Admin;