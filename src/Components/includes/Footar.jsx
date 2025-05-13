import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa6";
//import { Link } from "react-router-dom";

const Footar = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email.trim()) {
            alert("Please enter your email before subscribing.");
        } else {
            alert("You have subscribed successfully!");
            setEmail(""); // clear the input after success
        }
    };

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

                    <div className=" contact ">
                        <h3 className="py-1 text-center">Contact Us</h3>
                        <div className="mb-4 d-flex gap-3 align-items-center justify-content-center px-2">
                            <h3 className="d-inline fw-bolder"><span className=""><FaGithub /></span></h3>
                            <h3 className="d-inline fw-bolder"> <span className=" text-success  mr-2"> <FaWhatsapp /></span></h3>
                            <h3 className="d-inline fw-bolder"> <span className="  text-primary  mr-2"><MdEmail /></span></h3>
                            <h3 className="d-inline fw-bold"><span className="  text-danger mr-2"> <FaInstagram /></span></h3>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <input
                                className="form-control w-50 "
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="btn btn-primary mx-2 px-1"
                                onClick={handleSubscribe}
                            >SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </footer >
            <div className="  text-center reserved py-1">
                <div className="d-flex align-items-center justify-content-center gap-5">
                    <p className="mb-2 ">Terms of Use</p>
                    <p className="mb-2">Privacy and Policy</p>
                </div>
                <h5
                    className="text-center"
                    style={{
                        fontSize: window.innerWidth < 576 ? '0.8rem' : '1.2rem'
                    }}
                >
                    @ 2024 <FaOpencart /> clickShop. All rights reserved.
                </h5>
            </div>




        </>
    );

}

export default Footar