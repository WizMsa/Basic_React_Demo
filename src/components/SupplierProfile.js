import react from "react";
import logo  from "../image/supplier.png";


class SupplierProfile extends react.Component{
constructor(props){
    super();
    this.state = { latitude: null , longitude: null }
}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState( { latitude: position.coords.latitude,
                longitude: position.coords.longitude }  ),
            (error) => console.log(error)
        )
        let img_url = "";
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                    <div className="card text-danger" style={{ minWidth: '35rem', minHeight: '10rem', paddingTop: '5px' }}>
                    <div className="row">
                        <div className="col-sm-8 text-center">
                            <h5 className="card-header mb-1"> Full Name: ABDALLAH MASATO</h5>
                            <h5 className="card-text mb-1"> Phone: 435657867564</h5>
                            <h5 className="card-text mb-1"> Email: abby@gmail.com</h5>
                            <h5 className="card-text mb-1"> Address: makumbusho</h5>
                        </div>
                        <div className="col-sm-4">            
                        <div className="card-body">
                        <h5 className="card-title text-center">Supplier</h5>
                        <p className="card-text"> <img src= { logo } alt="" className="card-img-top rounded-circle" /> </p>
                    </div>
                    </div>
                    <h6 className="text-center">Location</h6>
                    <h4> { this.state.latitude } </h4>
                    <h4> { this.state.longitude } </h4>
                    <img src = {'https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&size=400x300&key=AIzaSyBjdWbxPJ_9K4S8psxmOGONjZI0QD39xo0'} />
                    </div>

                    </div>
                            </div>

                    <div className="col-sm-3"></div>
                </div>
            </div>
                   
        )
    }
}
export default SupplierProfile;