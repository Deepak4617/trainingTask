import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import nature from '../assests/image/nature.jpg'
import { FloatingLabel } from "react-bootstrap";


export const Login = () => {
    const [userDetail, setUserDetail] = useState({ email:'', password: '', error: '' });
    const [showFilledInput, setShowFilledInput] = useState(false);
    const navigate = useNavigate();
    const getUserData = JSON.parse(localStorage.getItem('userData'));
    const getCheckedvalue = localStorage.getItem('isChecked');
    const checked = Boolean(getCheckedvalue);
    
    const handalUserData = (e) => {
        const { name, value } = e.target;
        setUserDetail({
            ...userDetail,
            [name]: value
        }
        )
    }

    const handalcheckBox = () => {
        setShowFilledInput(!showFilledInput);
    }
    useEffect(() => {
        if (showFilledInput) {
            localStorage.setItem('isChecked', showFilledInput);
        }
    }, [showFilledInput])

    const submitUserData = () => {
        if (userDetail.email && userDetail.password && !showFilledInput) {
            localStorage.setItem('userData', JSON.stringify(userDetail));
            navigate('/')
        } else {
            localStorage.removeItem('userData')
        }
    }

    useEffect(() => {
        if (checked) {
            setUserDetail({
                ...userDetail,
                email: getUserData?.email,
                password: getUserData?.password
            })
        } else {
            setUserDetail({
                ...userDetail,
                email: '',
                password: ''
            })
        }
    }, [checked])


    return (
        <>
            <div className="container-fluid  " >
                <div className="row">
                    <div className="col-md-12 box1 ">
                        <div className="col-md-6 ">
                            <div className="box3">
                                <img src={nature} alt={''}  />
                            </div>
                        </div>
                        <div className="col-md-6 box2" >
                            <div className="mb-3 box4">
                                <h3>Sign in</h3>
                            </div>
                            <div className="mb-3 input-group-lg">
                            <FloatingLabel controlId="floatingEmail" label="Email-Address">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email Address*" value={userDetail.email} onChange={handalUserData} name='email' />
                                </FloatingLabel>
                            </div>
                            <div className="mb-3 input-group-lg">
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password*" value={userDetail.password} onChange={handalUserData} name="password" />
                                </FloatingLabel>
                            </div>
                            <div className="mb-3 ">
                                <input className="form-check-input" type="checkbox" value={showFilledInput} checked={!showFilledInput} id="checkboxNoLabel" aria-label="..." onChange={handalcheckBox}  />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                     Remember me
                                </label>
                            </div>
                            {userDetail.error}
                            <div className="mb-3 ">
                                <button className="btn btn-primary" onClick={submitUserData} type="button" style={{width:'100%'}}>SIGN IN</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}