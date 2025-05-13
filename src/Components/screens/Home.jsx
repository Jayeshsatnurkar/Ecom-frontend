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
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className=" container mt-3">
                <Carousel />

                <div className="container py-2 mt-4 Top-deals ">
                    <h3 className="fs-bolder px-5 py-1">Top Deals</h3>

                    <h4 className="text-center fw-bolder mb-4">Latest Fashion</h4>
                    <div className="row px-2 px-md-5 py-2" onClick={() => navigate('/fashion')} style={{ cursor: 'pointer' }}>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={F1} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={F2} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={F3} alt="" style={{ height: '250px' }} />
                        </div>
                    </div>

                    <h4 className="text-center fw-bolder mb-4">Mobiles </h4>
                    <div className="row px-2 px-md-5 py-2" onClick={() => navigate('/mobiles')} style={{ cursor: 'pointer' }}>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={M1} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={M2} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={M3} alt="" style={{ height: '250px' }} />
                        </div>
                    </div>

                    <h4 className="text-center fw-bolder mb-4">Electronics Items</h4>
                    <div className="row px-2 px-md-5 py-2" onClick={() => navigate('/electronics')} style={{ cursor: 'pointer' }}>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={E1} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={E2} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={E3} alt="" style={{ height: '250px' }} />
                        </div>
                    </div>

                    <h4 className="text-center fw-bolder mb-4">Grocery</h4>
                    <div className="row px-2 px-md-5 py-2" onClick={() => navigate('/grocery')} style={{ cursor: 'pointer' }}>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={G1} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={G2} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={G3} alt="" style={{ height: '250px' }} />
                        </div>
                    </div>

                    <h4 className="text-center fw-bolder mb-4">Furniture</h4>
                    <div className="row px-2 px-md-5 py-2" onClick={() => navigate('/furniture')} style={{ cursor: 'pointer' }}>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={U1} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={U2} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <img className="img-fluid w-100 h-100 object-fit-cover" src={U3} alt="" style={{ height: '250px' }} />
                        </div>
                    </div>

                </div>

            </div >
        </>
    );
}
export default Home