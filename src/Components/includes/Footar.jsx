import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa6";

const Footar = () => {
    return (
        <>
            <footer className="container-fluid text-light bg-dark mt-3 fixed bottom-0 ">

            <h3 className="text-primary logo px-5 py-4 "><FaOpencart /> click<span className="text-light">Shop</span></h3>
                <div className="container main-footar ">
               
                    <div className="about ">
                        <h3 className="py-1 ">About us</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sit reprehenderit
                        perferendis nam, obcaecati cupiditate dolorem blanditiis commodi eligendi adipisci
                        voluptatibus debitis quaerat iusto amet ipsa consequatur omnis maxime. Voluptatum.
                    </div>
                    <div className="services">
                        <h3 className="">Our Services</h3>

                        <h5>item1</h5>
                        <h5>item2</h5>
                        <h5>item3</h5>
                    </div>
                    <div className="contact">
                        <h3 className="">Contact Us</h3>

                     <h5 className=""><FaPhoneAlt /><span className="mr-2">+918767026956</span></h5>
                        <h5 className=""><FaWhatsapp /><span className="mr-2">+918767026956</span></h5>
                        <h5 className=""><MdEmail /><span className="mr-2">jayeshsatnurkar1@gmail.com</span></h5>
                        <h5 className=""><FaInstagram /><span className="mr-2">Jayesh_2004</span></h5>
                    </div>

                </div>

            </footer >
            <div className=" d-flex justify-space-evenly reserved py-1  px-5">
                    @ 2024 <FaOpencart/> clickShop. All rights reserved.
                
                  <span className="gap-2rem">  Privacy Policy</span>
                  <span>Terms of Use</span>
                </div>
        </>
    );

}

export default Footar