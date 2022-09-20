import react from "react";
class RemoveSupplier extends react.Component{
    render(){
        return(
            <div style={ {marginTop : '30px', width : '300px' } } className="container text-danger">
                <h3 className="text-center mb-3">Remove Supplier</h3>
            <form className="">
                    <input className="form-control mb-1 btn-outline-danger " type="text" placeholder="Enter Username" aria-label="Username"/>
                    <button className="btn btn-outline-danger float-start" type="submit">Remove</button>
                    </form>
          </div>
        )
    }
}
export default RemoveSupplier;