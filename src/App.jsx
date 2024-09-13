import React from 'react';
import './style.css'
import Navbar from './Components/includes/Header';
import InputForm from './Components/InputForm.jsx';
import Footar from './Components/includes/Footar.jsx';
import Home from './Components/includes/Home.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm.jsx';


function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/InputForm' element={<InputForm/>}/>
    <Route path='/LoginForm' element={<LoginForm/>}/>
  </Routes>
 <Footar/> 
  </BrowserRouter>
   </>
  );
}

export default App;
