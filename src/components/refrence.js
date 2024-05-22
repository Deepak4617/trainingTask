// import React, { useState } from 'react'
// import "./table.scss"

// export default function Table() {
//     let [array,setArray]=useState([])
//     let [inputdata,setInputdata]=useState({name:"",number:""})
//     let [index,setIndex]=useState()
//     let [bolin,setBolin]=useState(false)
//     let {name,number}=inputdata;




//     function data(e){
//         setInputdata({...inputdata,[e.target.name]:e.target.value})
//     }

 
//     function addinputdata(){

//         if(name==="" && number===""){
//             alert("Enter Name and Roll no ")
//         }
//         else{
//         setArray([...array,{name,number}])
//         // console.log(inputdata)
//         setInputdata({name:"",number:""})
//     }
//     }



// // deleting row 
// function deletedata(i){
//     console.log(i,"this index row want to be delete")
//     let total=[...array]
//     total.splice(i,1)
//     setArray(total)

// }

// // updatedata
// function updatedata(i){

//     let {name,number}=array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
//     setInputdata({name,number})
//     setBolin(true)
//     setIndex(i)

// }

// //know add data at perticular index means update it on that index
// function updateinfo(){
//     let total=[...array]
//     total.splice(index,1,{name,number})
//     setArray(total)
//      setBolin(false)
//      setInputdata({name:"",number:""})
// }
//   return (
//     <div>
          
//             <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data}  />
//             <input type="number" value={inputdata.number || ""} name="number" placeholder='Enter Number' onChange={data} />
//             <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

//             <br />

//             <table border="1" >
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Number</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 {

// array && array.map(
// (item,i)=>{
//     return(
//         <tr key={i}>
//             <td>{item.name}</td>
//             <td>{item.number}</td>
//             <td><button onClick={()=>updatedata(i)}>update</button></td>
//             <td><button onClick={()=>deletedata(i)}>Delete</button></td>
//         </tr>
//     )
// }
// )

//                 }







//                 </tbody>
//             </table>

//     </div>
//   )
// }


 // const [number, setNumber] = useState(0);
  
  //  const countValue =(type)=> {
  //   if (number > 0 && type==='dec') {
  //     setNumber(number - 1)
  //   }
  //   else if(type==='inc'){
  //   setNumber(number + 1)
  //   }

    {/* {isSignedIn ? (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )} */}
// export const uploadImage = (e, setImageData, setFormSubmitted) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
  
//     reader.onloadend = () => {
//       setImageData(reader.result);
//       // Add the following line to set formSubmitted to false
//       setFormSubmitted(false);
//     };
  
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
  

// export const uploadImage = (event,setImageData) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImageData(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
// const showDetail= JSON.parse(localStorage.getItem('productItem'));

    // const [product, setProduct] = useState([]);
    // const { id } = useParams();
    // const item = parseInt(id)

    // useEffect(() => {
    //     const setId = async () => {
    //         const res = await axios(
    //             `https://dummyjson.com/products/${id}`
    //         );
    //         // console.log(res.data);
    //         setProduct(res.data);
    //     }
    //     // console.log(typeof item);
    //     setId();
    // }, []);

    
    // const {reducerData} = useCustomSelector();
    // console.log(reducerData)
//     if (!response.ok) {
//       return rejectWithValue(response.status)
//   }
//   return fulfillWithValue(data)
// }catch(error){
//   throw rejectWithValue(error.response)
// }
// remove(state,action){
//   return state.filter((item)=>item.id !== action.payload);
// }

 // builder.addCase(addQuantity.fulfilled, (state, action) => {
        //     const updatedItem = action.payload;
        //     const existingItem = state?.data?.find((value) => value.id === updatedItem.id);
        //     if (existingItem) {
        //         const updatedData = state?.data?.map((item) =>
        //             item.id === updatedItem.id && { ...item, quantity:item.quantity + updatedItem.quantity } 
        //         );

        //         return { ...state, data: updatedData }
        //     };       
        // });

         // builder.addCase(addQuantity.fulfilled, (state, action) => {
        //     const updatedItem = action.payload;
        //     const existingItem = state?.data?.find((value) => value?.id === updatedItem?.id); 
        //     if (existingItem && updatedItem?.type === '+' ) {
        //         const updatedData = state?.data?.map((item) =>      
        //       item?.id === updatedItem?.id 
        //           ? { ...item, quantity:  item?.quantity + 1}
        //           : item 
        //       );         
        //       return { ...state, data: updatedData };
        //     }else {
        //         const updatedValue = state?.data?.map((item) =>
        //         item.id === updatedItem.id
        //           ? { ...item, quantity: item?.quantity - 1 }
        //           : item 
        //       ); 
        //       return { ...state, data: updatedValue };

        //     }
//      data.reduce((total, item) => total + item.price * item.quantity, 0);
        //   });