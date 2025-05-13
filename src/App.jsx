import React from 'react';
import './style.css'
import Navbar from './Components/includes/Header';
import InputForm from './Components/screens/InputForm.jsx';
import Footar from './Components/includes/Footar.jsx';
import Home from './Components/screens/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginForm from './Components/screens/LoginForm.jsx';
import Account from './Components/screens/Account.jsx';
import Admin from './Components/screens/admin.jsx';
import AdminLogin from './Components/screens/adminLogin.jsx';
import ShowFashion from './Components/screens/Fashion.jsx';
import ShowMobiles from './Components/screens/Mobiles.jsx';
import ShowElectronics from './Components/screens/Electronics.jsx';
import ShowFurniture from './Components/screens/Furniture.jsx';
import ShowGrocery from './Components/screens/Grocery.jsx';
import AddProduct from './Components/screens/AdminPage.jsx';
import CartScreen from './Components/screens/Cart.jsx';

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/InputForm' element={<InputForm />}/>
    <Route path='/LoginForm' element={<LoginForm/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/adminLogin' element={<AdminLogin/>}/>
    <Route path='/Fashion' element={<ShowFashion/>}/>
    <Route path='/Mobiles' element={<ShowMobiles/>}/>
    <Route path='/Electronics' element={<ShowElectronics/>}/>
    <Route path='/Grocery' element={<ShowGrocery/>}/>
    <Route path='/Furniture' element={<ShowFurniture/>}/>
    <Route path='/addProducts' element={<AddProduct/>}/>
    <Route path="/cart" element={<CartScreen />} />

  </Routes>
 <Footar/> 
  </BrowserRouter>
   </>
  );
}

export default App;
