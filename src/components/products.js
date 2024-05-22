import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { fetchProduct } from "../Service/api/fetchProducts";
import { useCustomSelector } from "../Service/allSelector/customSelector";

const Product = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {reducerSlice} = useCustomSelector();

   
    
    const fetchDataAndStore = (value) => {
        localStorage.setItem('productItem', JSON.stringify(value));
        navigate('/product-detail/' + value.id)
    }

    return (
        <>
        <div className="container">
            <div className="row">

        {reducerSlice?.products?.products?.slice(0, 6).map((value, index) => (          
            <div className="col-md-4" key={index}>
                          <div className="card mb-3 mt-2" style={{ display: 'flex', height: '500px' }}>
                              <img loading='lazy' src={value.thumbnail} className="card-img-top" alt="..." style={{ height: '200px' }} onClick={(() => fetchDataAndStore(value))} />
                              <div className="card-body">
                                  <h5 className="card-title">{value.title}</h5>
                                  <p className="card-text">{value.description}</p>
                                  <p className="card-text">{value.category}</p>
                                  <p className="card-price">Price: {value.price}</p>
                              </div>

                          </div>
                      </div>
                  ))}
                  </div>
                  </div>
        </>
    )
}
export default Product;