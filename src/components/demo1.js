import React, { useReducer, useState } from 'react';

export default function UserFormData() {
  const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({ firstName: '', lastName: '' , email:'' });
  const [imageFile, setImageFile] = useState(null);
  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);

  const { firstName, lastName, email } = inputdata;

  const reducer = (state,action) =>{
    switch (action.type) {
      case 'startData':
        return{...state,pending:false}
        
      
    }
  }

  function handleFormData(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }

  const initialState ={
    panding:false,
    data:[],
    
  }

  const [state , dispatch] = useReducer(reducer , initialState);
  function addinputdata() {
    if (firstName === '' && lastName === '' ) {
      alert('Enter firstName , lastName and email ');
    } else {
      setArray([...array, { firstName, lastName, email, image: imageFile }]);
      setInputdata({ firstName: '', lastName: '' , email:''});
      setImageFile(null); 
    }
  }

  function updatedata(i) {
    const {firstName, lastName,email } = array[i];
    setInputdata({ firstName,lastName,email });
    setBolin(true);
    setIndex(i);
  }

  function updateinfo() {
    const total = [...array];
    total.splice(index, 1, {firstName,lastName,email, image: imageFile });
    setArray(total);
    setBolin(false);
    setInputdata({ firstName: '', lastName: '', email:'' });
    setImageFile(null); 
  }

  function deletedata(i) {
    const total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  return (
    <>

        <div>
            <div className="container" >
                <div className="row">
                    <div className="mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">firstName</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="firstName" value={inputdata.firstName} onChange={handleFormData} name='firstName' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row">
                    <div className="mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">lastName</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="lastName" value={inputdata.lastName} onChange={handleFormData} name="lastName" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row">
                    <div className=" mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={inputdata.email} onChange={handleFormData} name="email" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <input type="file" className="form-control"  name="imageValue" id="inputGroupFile02" onChange={(e) => handleImageChange(e, setImageFile)} />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="mb-3">
                        {bolin ?
                            <button type="button" className="btn btn-secondary" onClick={() => updateinfo()}>{!bolin ? `Add data` : `Update data`}</button>
                            :
                            <button type="button" className="btn btn-secondary" onClick={() => addinputdata()}>Submit</button>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 ">
            <table className="table  table-sm table-bordered border-primary ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Images</th>
                        <th scope="col">Edit,Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        array?.map((value, i) => {

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
                                        { value.image && 
                                        <img src={URL.createObjectURL(value.image)} alt={`${i}-img1`} width='10%' />}
                                    </td>
                                    <td>
                                        <button onClick={(() => deletedata(i,value))}>Delete</button>
                                        <button onClick={(() => updatedata(i,value))}>Edit</button>

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
