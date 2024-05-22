import { useDispatch } from "react-redux";
import { useCustomSelector } from "../Service/allSelector/customSelector"
import { fetchProduct } from "../Service/api/fetchProducts";
import { useEffect } from "react";

const ProductLoading = () => {
    const { reducerSlice } = useCustomSelector();
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(fetchProduct());
    }, [])

    useEffect(() => {
        console.log(reducerSlice)
    })

    return (
        <>
        {/* { reducerSlice.isLoading  ? */}
                <div className="container">
                    <div className="row">                    
                            <div className="col-md-4" >
                                <div className="card mb-3 mt-2 " style={{ height: '500px' }}>
                                    <img className="card-img-top" style={{ height: '200px', background: 'gray' }} />
                                    <div className="card-body">
                                        <h5 className="card-title loading" style={{ width: '150px' }}>we</h5>
                                        <p className="card-text loading ">avj </p>
                                        <p className="card-text loading" style={{ width: '150px' }}>asd</p>
                                        <p className="card-price loading" style={{ width: '60px' }}>c</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* : null
            } */}
        </>
    )
}
export default ProductLoading;