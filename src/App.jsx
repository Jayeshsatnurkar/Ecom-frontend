import React from 'react';
import './style.css'
import Navbar from './Components/includes/Header';
import InputForm from './Components/InputForm.jsx';
import Footar from './Components/includes/Footar.jsx';
import Home from './Components/Home.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm.jsx';
import Account from './Components/Account.jsx';
import Admin from './Components/admin.jsx';
import AdminLogin from './Components/adminLogin.jsx';


function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar jayesh="myname"/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/InputForm' element={<InputForm />}/>
    <Route path='/LoginForm' element={<LoginForm/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/adminLogin' element={<AdminLogin/>}/>
  </Routes>
 <Footar/> 
  </BrowserRouter>
   </>
  );
}

export default App;
