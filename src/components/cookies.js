import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";


export const StudentInfo = () => {
    const [studentData, setStudentData] = useState({ name: '', rollNo: '', address: '' });
    const naviagte = useNavigate()
    const [cookie, setCookies] = useState(true)
    const handalStudentData = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        })
    }
    const getCookie = ()=>{
        alert(Cookies.get('studentData'));
        }
    const submitStudentData = () => {
        if (studentData.name && studentData.rollNo && studentData.address) {
            Cookies.set('studentData', true)
            naviagte('/products')
        } else {
            Cookies.remove('studentData')
        }
    }
    return (
        <>
            <div className="container" >
                <div className="row">
                    <div className="mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" value={studentData.name} onChange={handalStudentData} name='name' />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">rollNo</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="rollno" value={studentData.rollNo} onChange={handalStudentData} name='rollNo' />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">address</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="address" value={studentData.address} onChange={handalStudentData} name='address' />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-secondary" onClick={submitStudentData} >Submit</button>
                            <button type="submit" className=" btn btn-secondary" onClick={getCookie} style={{margin:'0px 6px'}}>GetCookie</button>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}