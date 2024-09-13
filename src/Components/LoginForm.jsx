import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {

    let [formData, setformData] = useState({

        email: "",
        password: "",

    })
    let [status, setStatus] = useState(false);

    let [message, setMessage] = useState("");

    let [messageColor, setMessageColor] = useState("");

    let handleChange = (e) => {
        let { name, value } = e.target
        setformData((prev) => {
            return { ...prev, [name]: value };

        })
    };

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await axios({
                method: "post",
                url: "http://localhost:2004/LoginForm",
                data: formData
            })

            if (result.status === 202) {
                console.log('form submitted successfully')
                setStatus(true)
                closePopUp()
                setMessage("candidate successfully login !")
                setMessageColor("success")

            } else {

                setStatus(true)
                closePopUp()
                setMessage("unable to submit data")
                setMessageColor("danger")

            }

        } catch (err) {
            console.log("unable to send data !", err)
        }
    }

    let closePopUp = () => {

        setTimeout(() => {
            setStatus(false)
        }, 5000)
    }

    return (
        <>
            {/* Login Form */}

            <form onSubmit={handleSubmit} className="  d-flex flex-column align-items-center justify-content-center container my-5 px-5 ">
                <div className=" login-form shadow-lg px-5 py-3 ">
                    <h3 className="text-center p-1">Login Form</h3>
                    <div data-mdb-input-init className="  form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input onChange={handleChange} type="email" id="email" name="email" className="form-control" value={formData.email} />

                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form2Example2" >Password</label>
                        <input onChange={handleChange} type="password" name="password" id="password" className="form-control" value={formData.password} />

                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">

                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div> */}
                        </div>

                        <div className="row">
                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                            <div className="col">
                                <p>Not a member? <Link to="/InputForm">Register</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary text-center fw-bolder btn-block mb-4 gap-3 px-4" >Log in</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger text-center fw-bolder btn-block mb-4 gap-3 px-4" >Log Out</button>
                    </div>
                </div>

            </form >


            {
                status ?
                    <div className="mt-3 p-2 w-50 position-absolute start-50 top-0 z-3 translate-middle-x bg-light text-center  text-dark  shadow-lg">
                        <h4 className={`text-${messageColor}`}>{message}</h4>
                    </div> : null
            }

        </>
    );
}

export default LoginForm