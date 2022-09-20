import react from "react";
import { NavLink } from 'react-router-dom';
class Create extends react.Component{
    render(){
        return(
            <div style={ {marginTop : '30px', width : '300px' } } className="container text-danger">
                <h3 className="text-center">Create</h3>
            <form className="">
                    <input className="form-control mb-1 btn-outline-danger " type="text" placeholder="Username" aria-label="Username"/>
                    <input className="form-control mb-1 btn-outline-danger " type="password" placeholder="Password" aria-label="Password"/>
                    <input className="form-control mb-1 btn-outline-danger " type="text" placeholder="Username" aria-label="Username"/>
                    <input className="form-control mb-1 btn-outline-danger " type="password" placeholder="Password" aria-label="Password"/>
                    <button className="btn btn-outline-danger float-start" type="submit">Create</button>
                    <label style={ {paddingLeft: '20px', paddingTop: '5px' } }>Have An Account?
                        </label><NavLink className= "btn btn-outline-danger btn-sm" to='/'>Login</NavLink>
                    </form>
          </div>
        )
    }
}
export default Create;