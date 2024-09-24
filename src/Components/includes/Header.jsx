import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import LoginForm from "../LoginForm";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [dropDown, setDropDown] = useState(false)

  return (
    <>
      <nav className=" Header position-sticky top-0 navbar navbar-expand container-fluid bg-light shadow-lg">
        <div className="container d-flex px-lg-5 gap-5 py-2  ">
          <div className="" >
            <h3 className="text-primary logo "><FaOpencart /> click<span className="text-dark">Shop</span></h3>
          </div>
          <form className=" navbar-search flex-md-grow-1  my-2 my-lg-0 outline-dark border-none border-radius-50">
            <input className="   form-control " type="search" placeholder=" type to search" aria-label="Search" />
          </form>
          <button className="  search-icon btn btn-outline-none "><FaSearch /> </button>
          <Link to='/'><button className=" d-none d-md-block  fw-bolder btn "><span> <FaHome size={'1.5rem'} /> </span></button></Link>
          <button className=" d-none d-md-block  fw-bolder btn "><span> <FaCartShopping size={'1.5rem'} /></span></button>


          {/* <Link to='/InputForm'> */}
          <button className="d-none d-md-block  fw-bolder btn ">
            <span className="text-decoration-none"><FaUserCircle onClick={() => { setDropDown(!dropDown) }} size={'1.5rem'} /> </span>
        </button>
        {/*</Link> */}

        <a className="" type="button" >
          <span className="navbar-icon"><FaBars onClick={() => { setMobileMenu(!mobileMenu) }} size={'1.5rem'} /></span>
        </a>
        {/* <a className="" type="button" >
            <span className="close-outline"><FaWindowClose  size={'1.5rem'} /></span>
          </a> */}

      </div>
    </nav >
    <div className={dropDown ? "user-dropdown" : "d-none"}>
          <Link to='/InputForm'><h5 className="d-inline">SignUp</h5></Link>
          <Link to='/LoginForm'><h5 className="d-inline">LogIn</h5></Link>
          <Link to=''><h5 className="d-inline">logOut</h5></Link>
        </div>
      < div className={mobileMenu ? "categories" : " container-fluid shadow-lg py-2 d-flex justify-content-evenly"} >
        <a className="fs-5 fw-medium text-dark text-decoration-none">Fashion </a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Mobiles</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Electonics</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Grocery</a>
        <a href="" className="fs-5 fw-medium text-dark text-decoration-none" > Furniture</a>
      </div>


  {/* <div className="  toggle-body  d-none d-flex flex-col bg-dark  p-5 w-25  h-75 gap-3" id="navcontent">
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
      </div> */}


  {/* <div class="d-flex flex-col">
        <div class="collapse " id="multiCollapseExample1">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div> */}


    </>

  )

}
export default Navbar
