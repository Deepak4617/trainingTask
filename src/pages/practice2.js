import { useEffect, useState } from "react"
import Cookies from 'js-cookie'


export const StudentResult = () => {
    const [studentData, setStudentData] = useState({ name: '', rollNo: '', address: '',error:''});

    const handalStudentData =(e)=>{
        const {name,value} = e.target;
        setStudentData({
            ...studentData,
            [name]:value
        })
    }
    const submitStudentData =()=>{
        if (!studentData.name || !studentData.rollNo || !studentData.address ) {
            Cookies.remove('result')
            setStudentData({
                ...studentData,
                error:'Please fill all detail'
            })
        }else{
            Cookies.set('result', JSON.stringify(studentData))
            setStudentData({
                ...studentData,
                error:''
            })

        }
    }
    const getCookie = ()=>{
        Cookies.get('result');
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
                        {studentData.error}
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