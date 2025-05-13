import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Navbar = ({ alert }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  let navigate = useNavigate()


  let handleLogOut = () => {
    localStorage.removeItem("myToken")
    console.log("token has been deleted !")
    navigate("/")

  }

  let handleserach = () => {

    const lowerCaseQuery = searchQuery.toLowerCase();
    if (lowerCaseQuery.includes("fashion")) {
      navigate("/Fashion");
    } else if (lowerCaseQuery.includes("mobile")) {
      navigate("/Mobiles");
    } else if (lowerCaseQuery.includes("electronic")) {
      navigate("/Electronics");
    } else if (lowerCaseQuery.includes("grocery")) {
      navigate("/Grocery");
    } else if (lowerCaseQuery.includes("furniture")) {
      navigate("/Furniture");
    } else {
      alert("No matching category found.");
    }
    setShowMobileSearch(false); // close modal
    setSearchQuery(""); // reset input
  }


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
          <button className="  search-icon btn btn-outline-none " onClick={handleserach}><FaSearch /> </button>
          <Link to='/'><button className=" d-none d-md-block  fw-bolder btn "><span> <FaHome size={'1.5rem'} /> </span></button></Link>
          <Link to='/cart'><button className=" d-none d-md-block  fw-bolder btn "><span> <FaCartShopping size={'1.5rem'} /></span></button></Link>


          {/* <Link to='/InputForm'> */}
          <button className="d-none d-md-block  fw-bolder btn ">
            <span className="text-decoration-none"><FaUserCircle onClick={() => { setDropDown(!dropDown) }} size={'1.5rem'} /> </span>
          </button>
          {/*</Link> */}
          {/* Show only on mobile */}



          <div className="d-row">
            {!dropDown && (
              <button
                className="d-sm-block d-lg-none  border-0 bg-transparent px-2"
                onClick={() => setShowMobileSearch(true)}
                style={{ boxShadow: 'none', outline: 'none', }}
              >
                <FaSearch />
              </button>

            )}


            <a className="" type="button" >
              <span className="navbar-icon"> {!dropDown && (
                <FaBars onClick={() => { setDropDown(!dropDown) }} size={'1.5rem'} />
              )}

              </span>
            </a>
          </div>

        </div>
      </nav >

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="mobile-search-overlay position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column justify-content-center align-items-center z-3">
          <input
            type="text"
            className="form-control w-75 mb-3"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={ handleserach}
            >
              Search
            </button>
            <button className="btn btn-secondary" onClick={() => setShowMobileSearch(false)}>Close</button>
          </div>
        </div>
      )}


      <div className={`user-drawer ${dropDown ? "open" : ""}`}>
        <div className="drawer-header d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
          <h5 className="mb-0"> Menu</h5>
          <FaWindowClose className="cursor-pointer" onClick={() => setDropDown(false)} size={'1.5rem'} />
        </div>
        <div className="drawer-links d-flex flex-column px-3 py-3">
          <Link to='/InputForm' className="mb-2 text-decoration-none text-dark fw-bolder"
            onClick={() => setDropDown(false)} >
            SignUp
          </Link>
          <Link to='/LoginForm' className="mb-2 text-decoration-none text-dark fw-bolder"
            onClick={() => setDropDown(false)}

          >LogIn
          </Link>
          <button onClick={handleLogOut} className="btn btn-outline-danger fw-bold"

          >Logout</button>
        </div>
      </div>

      < div className={mobileMenu ? "categories" : " container-fluid shadow-lg py-3 d-flex justify-content-evenly"} >
        <Link to='/Fashion' className="fs-6rem fw-medium text-dark text-decoration-none">Fashion </Link>
        <Link to='/Mobiles' href="" className="fs-6rem fw-medium text-dark text-decoration-none" > Mobiles</Link>
        <Link to='/Electronics' href="" className="fs-6rem  fw-medium text-dark text-decoration-none" > Electonics</Link>
        <Link to='/Grocery' href="" className="fs-6rem fw-medium text-dark text-decoration-none" > Grocery</Link>
        <Link to='/Furniture' href="" className="fs-6rem fw-medium text-dark text-decoration-none" > Furniture</Link>
      </div>



    </>

  )

}
export default Navbar
