import axios from "axios";
import react from "react";
class AddSupplier extends react.Component{
    state = {
        suppliers: [],
        name: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        title: "",
        profile: "",
    };
    componentDidMount(){
        const url = 'http://localhost/api.php';
        axios.get(url).then(
            response => response.data 
        ).then(
            (data) => {
                this.setState({ suppliers: data })
                console.log(this.state.suppliers)
            }
        )
    }

createSupplier (event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append('name', this.state.name)
    formData.append('phone', this.state.phone)
    formData.append('email', this.state.email)
    formData.append('username', this.state.username)
    formData.append('password', this.state.password)
    formData.append('title', this.state.title)
    formData.append('profile', this.state.profile)

    axios({
        method: 'post',
        url: 'http://localhost/api.php',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data'}}
    }).then(
        (response) => {
            console.log(response);
            alert('New Supplier Created')
        }
    ).catch(
        (response) => {
            console.log(response)
        }
    );
    this.setState({
        suppliers: [],
        name: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        title: "",
        profile: "",
    })
}

    render(){
        return(
            <div style={ {marginTop : '30px', width : '300px' } } className="container text-danger">
                <h3 className="text-center mb-3">Create Supplier</h3>
            <form className="">
                <div className="form-group">
                    <input className="form-control mb-1 btn-outline-danger " name="name" id="name" type="text" value={this.state.name} placeholder="Full Name" aria-label="Fullname" onChange={ e => this.setState({name: e.target.value})} required />
                </div>
                    <input className="form-control mb-1 btn-outline-danger " name="phone" id="phone" value={this.state.phone} type="number" placeholder="Phone" aria-label="Phone" onChange={ e => this.setState({phone: e.target.value})} required />
                    <input className="form-control mb-1 btn-outline-danger " name="email" id="email" value={this.state.email} type="email" placeholder="Email" aria-label="Email" onChange={ e => this.setState({email: e.target.value})} required  />
                    <input className="form-control mb-1 btn-outline-danger " name="username" id="username" value={this.state.username} type="text" placeholder="Username" aria-label="Username" onChange={ e => this.setState({username: e.target.value})} required  />
                    <input className="form-control mb-1 btn-outline-danger " name="password" id="pwd" value={this.state.password} type="password" placeholder="Password" aria-label="Password" onChange={ e => this.setState({password: e.target.value})} required  />
                    <input className="form-control mb-1 btn-outline-danger " name="title" id="title" value={this.state.title} type="text" placeholder="Title" aria-label="Title" onChange={ e => this.setState({title: e.target.value})} required  />
                    <input className="form-control mb-1 btn-outline-danger " name="profile" id="profile" type="file" placeholder="profile" aria-label="Profile" onChange={ e => this.setState({profile: e.target.files[0]})} required  />
                    <button className="btn btn-outline-danger float-start" type="submit" onClick={ e => this.createSupplier(e) } >Add Supplier</button>
                    </form>
          </div>
        )
    }
}
export default AddSupplier;