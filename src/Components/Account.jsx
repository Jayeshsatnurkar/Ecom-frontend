import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const Account = () => {
    let [userAdminData, setUserAdminData] = useState({})
    let navigate = useNavigate()

    let fetchUserAdmin = async (props) => {
        let result
        try {
            result = await axios({
                method: "GET",
                url: "http://localhost:2004/dashboard",
                headers: {
                    authorization: localStorage.getItem("myToken"),
                    content: "text/json"
                }
            })

            if (result.status != 200) {
                throw ("failed to auth from backend !")
            }
            console.log("Welcome User !")
            console.log(result.data.userData)
            setUserAdminData(result.data.userData)
        } catch (err) {
            console.log("auth failed !", err)
            navigate("/LoginForm")
        }
    }

    // let DisplayDataRow = (props) => {
    //     return (
    //         <tr className='' key={props._id}>
    //             <td>{props.name}</td>
    //             <td>{props.phone}</td>
    //             <td>{props.email}</td>
    //             <td>{props.city}</td>
    //             <td>{props.pincode}</td>
    //             <td>{props.address}</td>
    //             <td>{props.dob}</td>
    //             <td>{props.age}</td>
    //             <td>
    //                 <button className='btn btn-danger me-2 ' onClick={() => {
    //                     deleteData(props.name, props._id)
    //                     setisDelete(true)
    //                 }}>Delete</button>
    //                 <button className='btn btn-primary' onClick={() => { setisEdit(true); setpropsData(props);props.DeleteData(true) }}>Edit</button>
    //             </td>
    //         </tr>
    //     )
    // }

    useEffect(() => {
        fetchUserAdmin()
    }, [])

    return (
        <>

            <span className='text-primary'>
                {

                    userAdminData ?
                        <div className="dashboard ">
                            <h3 className=''><span className='py-2 px-3 fs-1'>Welcome {userAdminData.name} !</span></h3>
                            <h1 className='px-5'><FaUserCircle /></h1>
                            <h5 className=''> Name :  {userAdminData.name}</h5>
                            <h5 className=''> Contact :  {userAdminData.phone}</h5>
                            <h5 className=''> Email :  {userAdminData.email}</h5>
                            <h5 className=''> Age :  {userAdminData.age}</h5>
                            <h5 className=''> City :  {userAdminData.city}</h5>
                            <h5 className=''> Address :  {userAdminData.address} , {userAdminData.pincode}</h5>
                        </div> : null
                }
            </span>

        </>
    )
}

export default Account