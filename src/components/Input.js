import React, { useEffect, useRef, useState } from "react"
import { submitFormData, update, updateinfo, uploadImage } from "../assests/javascript/custom"
import { useCustomState, useCustomData, useCustomValue, useCustomObject, } from "../hooks/customState"
import { deleteValue } from "../assests/javascript/custom"
// import { updateValue } from "../assests/javascript/Custom"

const UserDetail = () => {

    const { imageFile,
        setImageFile
    } = useCustomState();

    const { data, setData } = useCustomData();
    const { formData, setFormData } = useCustomObject();

    const { editValue, setEditValue, index, setIndex } = useCustomValue();

    const inputelem = useRef('')

    const handleFormData = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    useEffect(()=>{
        console.log(data)
    },[data])
  
    return (
        <>
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">firstName</label>
                                <input ref={inputelem} type="text" className="form-control" id="exampleFormControlInput1" placeholder="firstName" value={formData.firstName} onChange={handleFormData} name='firstName' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className="mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">lastName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="lastName" value={formData.lastName} onChange={handleFormData} name="lastName" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className=" mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.email} onChange={handleFormData} name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group mb-3">
                            <input type="file" className="form-control"  name="imageValue" id="inputGroupFile02" onChange={(e) => uploadImage(e, setImageFile)} />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="mb-3">
                            {editValue ?
                                <button type="button" className="btn btn-secondary" onClick={() => updateinfo(data, setData, setEditValue, setFormData, index,formData,setImageFile)}>{!editValue ? `Add data` : `Update data`}</button>
                                :
                                <button type="button" className="btn btn-secondary" onClick={() => submitFormData(formData, setData, data, imageFile,setFormData)}>Submit</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 ">
                <table className="table  table-sm table-bordered border-primary ">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Images</th>
                            <th scope="col">Edit,Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((value, i) => {

                                return (
                                    <tr key={i}>
                                        <th scope="row">{i}</th>
                                        <td>
                                            {value?.firstName}
                                        </td>
                                        <td>
                                            {value?.lastName}
                                        </td>
                                        <td>
                                            {value?.email}
                                        </td>

                                        <td>
                                            {imageFile !== null && 
                                            <img src={URL.createObjectURL(imageFile)} alt={`${index}-img1`} width='10%' />}
                                        </td>
                                        <td>
                                            <button onClick={(() => deleteValue(i, data, setData))}>Delete</button>
                                            <button onClick={(() => update(i, value,setEditValue , setFormData , setIndex , data,formData))}>Edit</button>

                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )

}
export default UserDetail;