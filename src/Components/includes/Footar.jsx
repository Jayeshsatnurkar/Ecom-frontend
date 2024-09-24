import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa6";

const Footar = () => {
    return (
        <>
            <footer className="container-fluid text-light bg-dark mt-3 fixed bottom-0 ">

                <h3 className="text-primary footar-logo px-5 py-4 "><FaOpencart /> click<span className="text-light">Shop</span></h3>
                <div className=" container main-footar ">

                    <div className="about ">
                        <h3 className="py-1  ">About us</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sit reprehenderit
                        perferendis nam, obcaecati cupiditate dolorem blanditiis commodi eligendi adipisci
                        voluptatibus debitis quaerat iusto amet ipsa consequatur omnis maxime. Voluptatum.
                    </div>
                    <div className="services">
                        <h3 className="py-1">Our Services</h3>

                        <span className="d-block mb-2">Free Delivery</span>
                        <span className="d-block mb-2">7 Days Replacement</span>
                        <span className="d-block mb-2">Cash On Delivery</span>
                        <span className="d-block">International Shipping</span>
                    </div>

                    <div className=" contact">
                        <h3 className="py-1">Contact Us</h3>
                        <div className="mb-4 d-flex gap-3 align-items-center px-3">
                            <span className=""><FaGithub /></span>
                            <span className=" text-success fs-3rem fw-bolder mr-2"> <FaWhatsapp /></span>
                            <span className=" fw-bold text-primary fw-bolder mr-2"><MdEmail /></span>
                            <span className=" fw-bold text-danger mr-2"> <FaInstagram /></span>
                        </div>
                        <div className="d-flex ">
                            <input className="form-control w-50 " placeholder="Enter email" />
                            <button className="btn btn-primary mx-2 px-1">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </footer >
            <div className="  text-center reserved py-1">
                <div className="d-flex align-items-center justify-content-center gap-5">
                    <p className="mb-2 ">Terms of Use</p>
                    <p className="mb-2">Privacy and Policy</p>
                </div>
                <h5 className="text-center">  @ 2024  <FaOpencart /> clickShop. All rights reserved.</h5>
            </div>




        </>
    );

}

export default Footar