import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Create from './components/Create';
import Drink from './components/Drink';
import DetailFood from './components/DetailFood';
import DetailDrink from './components/DetailDrink';
import Admin from './components/Admin';
import SupplierProfile from './components/SupplierProfile';
import SupplierList from './components/SupplierList';
import AdminMenuPanel from './components/AdminMenuPanel';
import AddSupplier from './components/AddSupplier';
import RemoveSupplier from './components/RemoveSupplier';

import axios from "axios";
import { Component } from 'react';
import ImageList from './ImageList';
import Location from './components/Location';

class App extends Component {
  state = { images: [] };

  componentDidMount = async () => {
     const res = await axios.get('https://pixabay.com/api/?key=27774060-1d5310b188b95edbbff50864f&q=cars+flowers&image_type=photo&pretty=true')
     this.setState({ images: res.data.hits })
  }

render(){
  return(
<div>
<BrowserRouter>
<Routes>
  <Route path='/' element = { <Login/> }  />
  <Route path='/Create' element = {<Create/>} />
  <Route path='/Dashboard' element = {<Navbar/>} >
    < Route index element = { <Home/> } />
    <Route path='Home' element = {<Home/>} />
    <Route path='DetailFood' element= { < DetailFood /> } />
    <Route index element = 'DetailFood' />
    <Route path='Admin' element = {< Admin />} />
    <Route path='Drink' element = {< Drink />} />
    <Route path='DetailDrink' element= { < DetailDrink /> } />
    <Route path='Contact' element = {< Contact />} />
    <Route path='About' element = {< About />} />
  </Route>
  <Route path='AdminMenu' element = {< Navbar />}>
    < Route index element = { <AdminMenuPanel/> } />
    < Route path='SupplierList' element = {< SupplierList />} />
    < Route path='SupplierProfile' element = {< SupplierProfile />} />
    < Route path='AddSupplier' element = {< AddSupplier />} />
    < Route path='RemoveSupplier' element = {< RemoveSupplier />} />
    </Route>
    <Route path='Admin' element = {< Navbar />}>
      <Route index element = { <Admin/> } />
    </Route>
  </Routes> 
  </BrowserRouter>
 {/* < ImageList image = { this.state.images} /> */}
 {/* < Location /> */}
</div>
   
  )
}
}

export default App;
