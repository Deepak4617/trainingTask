import { useState, useEffect } from "react"
import { FetchProduct } from "../Service/api/productsApi"

export const ProductData = () => {

  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    FetchProduct(setProductsData)
    console.log(productsData)
  }, []);

  return (
    <>

      <div className="">
        <div className="row">
          {productsData?.products?.map((value, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3 mt-2" style={{ display: 'flex', height: '500px' }}>
                <img src={value.thumbnail} className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{value?.title}</h5>
                  <p className="card-text">{value?.description}</p>
                  <p className="card-text">{value?.category}</p>
                  <p className="card-price">Price: {value?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
}