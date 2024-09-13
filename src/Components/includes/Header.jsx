import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../vendors/logo.jpeg'
import { FaSearch } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [Categories, setCategories] = useState(false)
  return (
    <>
      {/* //     <nav className="position-sticky top-0 navbar navbar-expand container-fluid shadow-lg">
  //       <div className="container d-flex  flex-grow-1 py-3  ">
  //         <div className="nav-logo">
  //           <a href="/" className="nav-brand ">Fipcart</a>
  //         </div>
  //         <div>
  //           <input type="search" className=" " placeholder="type to search"></input>
  //           <button>Search</button>
  //         </div>
  //           <div>
  //           <FaCartShopping />

  //           </div>
  //           <div>
  //           <FaUserCircle />

  //           </div>

  //       </div>
  //     </nav> */}



      <nav className="  position-sticky top-0 navbar navbar-expand container-fluid bg-light shadow-lg">
        <div className=" container d-flex px-lg-5 gap-5 py-2 bg-light ">
          <div className="" >
            <h3 className="text-primary logo "><FaOpencart /> click<span className="text-dark">Shop</span></h3>
          </div>

          <form className=" navbar-search flex-md-grow-1  my-2 my-lg-0 outline-dark border-none border-radius-50">

            <input className="   form-control " type="search" placeholder=" type to search" aria-label="Search" />

          </form>
          <button className="  search-icon btn btn-outline-none "><FaSearch /> </button>
          <button className=" d-none d-md-block  fw-bolder btn btn-outline-dark"><span>  <FaCartShopping size={'1.5rem'}/> Cart</span></button>
          <Link to='/InputForm'>
            <button className="d-none d-md-block btn fw-bolder btn-outline-dark ">
              <span ><FaUserCircle size={'1.5rem'} /> Sign Up</span>
            </button> </Link>
          <a className= "" type="button" data-bs-toggle="" data-bs-target="#navcontent" aria-expanded="true" aria-controls="navcontent">
              <span className="navbar-icon"><FaBars  size={'1.5rem'} /></span>
          </a>
        </div>


      </nav>

      <div className=" categories shadow-lg d-md-flex  px-5 py-2 justify-content-evenly">
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none">Fashion </a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Mobiles</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Electonics</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Appliances</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Grocery</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Furniture</a>

      </div>

      <div className="  toggle-body  d-none d-flex flex-col bg-dark  p-5 w-25  h-75 gap-3" id="navcontent">
        <ul className="" >
          <li className="nav-item active mb-3 fs-4 ">
            <Link to='/Fashion'>Fashion</Link>
          </li>
          <li className="nav-item active mb-3 fs-4">
            <Link to='/Mobiles'>Mobiles</Link>
          </li>
          <li className="nav-item active mb-3 fs-4">
            <Link to='/Electronics'>Mobiles</Link>
          </li>
          <li className="nav-item active mb-3 fs-4">
            <Link to='/Appliances'>Mobiles</Link>
          </li>
          <li className="nav-item active mb-3 fs-4">
            <Link to='/Grocery'>Mobiles</Link>
          </li>

        </ul>
      </div>

      
        <div class="d-flex flex-col">
          <div class="collapse " id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
    

    </>
  
      )

}
export default Navbar
