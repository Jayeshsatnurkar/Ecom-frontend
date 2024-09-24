import React from "react";
// import Fashion from '../../vendors/Fashion.jpeg'
// import Mobile from '../../vendors/Mobile.jpeg'
// import Electronics from '../../vendors/Electronics.jpeg'
// import Grocery from '../../vendors/Grocery.jpeg'

import F1 from '../vendors/F1.jpeg'
import F2 from '../vendors/F2.jpeg'
import F3 from '../vendors/F3.jpeg'
import M1 from '../vendors/M1.jpeg'
import M2 from '../vendors/M2.jpeg'
import M3 from '../vendors/M3.jpeg'
import E1 from '../vendors/E1.jpeg'
import E2 from '../vendors/E2.jpeg'
import E3 from '../vendors/E3.jpeg'
import G1 from '../vendors/G1.jpeg'
import G2 from '../vendors/G2.jpeg'
import G3 from '../vendors/G3.jpeg'
import U1 from '../vendors/U1.jpeg'
import U2 from '../vendors/U2.jpeg'
import U3 from '../vendors/U3.jpeg'
import Carousel from "./Corausel";
const Home = () => {
    return (
        <>
            <div className=" container mt-3">
                <Carousel/>
                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#pic1" data-slide-to="0" className="active">
                        </li>
                        <li data-target="#pic2" data-slide-to="1" className="active"></li>
                        <li data-target="#pic3" data-slide-to="2" className="active"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className=" d-block w-100 h-50" id="pic1" src={''} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img className="d-block w-100" id="pic2" src={Mobile} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img className="d-block w-100" id="pic3" src={Electronics} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}

                <div className="container py-2 mt-2 Top-deals ">
                    <h3 className="fs-bolder px-5">Top Deals</h3>
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