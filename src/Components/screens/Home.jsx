import React from "react";
import F1 from '../../vendors/F1.jpeg'
import F2 from '../../vendors/F2.jpeg'
import F3 from '../../vendors/model1.jpeg'
import M1 from '../../vendors/M1.jpeg'
import M2 from '../../vendors/M2.jpeg'
import M3 from '../../vendors/M3.jpeg'
import E1 from '../../vendors/E1.jpeg'
import E2 from '../../vendors/E2.jpeg'
import E3 from '../../vendors/E3.jpeg'
import G1 from '../../vendors/G1.jpeg'
import G2 from '../../vendors/G2.jpeg'
import G3 from '../../vendors/G3.jpeg'
import U1 from '../../vendors/U1.jpeg'
import U2 from '../../vendors/U2.jpeg'
import U3 from '../../vendors/U3.jpeg'
import Carousel from "./Corausel";
const Home = () => {
    return (
        <>
            <div className=" container mt-3">
                <Carousel/>
               
                <div className="container py-2 mt-4 Top-deals ">
                    <h3 className="fs-bolder px-5 py-1">Top Deals</h3>
                    <div className="row m-4">
                        <h4 className="text-center fw-bolder mb-4">Latest Fashion </h4>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={F1} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={F2} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={F3} alt='' />
                        </div>

                    </div>
                    <div className="row m-5">
                        <h4 className="text-center fw-bolder mb-4">Mobiles </h4>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={M1} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={M2} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={M3} alt='' />
                        </div>
                    </div>
                    <div className="row m-5">
                        <h4 className="text-center fw-bolder mb-4">Electronics Items </h4>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={E1} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={E2} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={E3} alt='' />
                        </div>
                    </div>
                    <div className="row m-5">
                        <h4 className="text-center fw-bolder mb-4">Grocery </h4>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={G1} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={G2} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={G3} alt='' />
                        </div>
                    </div>
                    <div className="row m-5">
                        <h4 className="text-center fw-bolder mb-4">Furniture</h4>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={U1} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={U2} alt='' />
                        </div>
                        <div className="col">
                            <img className=" d-block w-100 h-100" src={U3} alt='' />
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}
export default Home