import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../includes/Header";
const LoginForm = (props) => {
    let navigate = useNavigate()
    const [forgotPassword, setForgotPassword] = useState(false)
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

        let result;
        try {
            result = await axios({
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
            localStorage.setItem("myToken", result.data.token)
            console.log(localStorage.getItem("myToken"))

            navigate("/account")

        } catch (err) {
            console.log("unable to send data !", err)
        }

    }
    let handleLogOut = () => {
        localStorage.removeItem("myToken")
        console.log("token has been deleted !")
        navigate("/")

    }

    let setAlert = () => {
        alert("hello jayesh !")
    }

    let closePopUp = () => {

        setTimeout(() => {
            setStatus(false)
        }, 5000)
    }

    let submitPassword = () => {
        if (formData.email.trim() === "" || formData.password.trim() === "") {
            alert("enter full details")
        } else {
            alert("password reset successfully !")
        }
    }
    let ResetPasswordForm = () => {
        setformData({
            email: "",
            password: "",
        });
    }


    return (
        <>
            {/* Login Form */}
            {/* <Navbar  alert={setAlert}/> */}

            <form onSubmit={handleSubmit} className=" d-flex flex-column align-items-center justify-content-center container my-5 px-5 ">
                <div className=" login-form shadow-lg px-5 py-3 ">
                    <h3 className="text-center p-1">Login Form</h3>
                    <div data-mdb-input-init className="  form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input onChange={handleChange} type="email" id="email" name="email" className="form-control" value={formData.email} />

                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2" >Password</label>
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
                                <a href="#!" onClick={() => { setForgotPassword(!forgotPassword) }}>Forgot password?</a>
                            </div>
                            <div className="col">
                                <p>Not a member? <Link to="/InputForm">Register</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-3 justify-content-center">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary text-center fw-bolder btn-block mb-4 gap-3 px-4" onClick={submitPassword}>Log in</button>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger text-center fw-bolder btn-block mb-4 gap-3 px-4" onClick={ResetPasswordForm} >Reset</button>
                    </div>
                </div>

            </form >


            {
                status ?
                    <div className="mt-3 p-2 w-50 position-absolute start-50 top-0 z-3 translate-middle-x bg-light text-center  text-dark  shadow-lg">
                        <h4 className={`text-${messageColor}`}>{message}</h4>
                    </div> : null
            }

            {
                forgotPassword && (
                    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-3">
                        <div className="bg-white p-4 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Reset Password</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setForgotPassword(false)}
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="resetEmail">Email address</label>
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    id="resetEmail"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="newPassword">New Password</label>
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    id="newPassword"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    required
                                />
                            </div>

                            <div className="d-flex  justify-content-center align-items-center gap-3 ">
                                <button className="btn btn-success" onClick={submitPassword}>
                                    Submit
                                </button>
                                <div className="text-end">
                                    <button className="btn btn-danger" onClick={ResetPasswordForm}>
                                        Reset
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }


        </>
    );
}

export default LoginForm