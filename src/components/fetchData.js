import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { fetchExactProduct } from "../Service/api/fetchExactData";
import { useCustomSelector } from "../Service/allSelector/customSelector";
import cartSlice from "../Service/slices/reducer/cartSlice";
import { cardData } from "../Service/api/card";
import { Button } from "react-bootstrap";
import { addQuantity } from "../Service/api/addCartQuantity";
import MyModal from "./showModal";
export const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productID = parseInt(id);
    const { cart, productSlice } = useCustomSelector();
    const [modalShow, setModalshow] = useState(false);
    const data = productSlice.data;


    useEffect(() => {
        dispatch(fetchExactProduct(productID))

    }, [dispatch, productID]);

    const handleAddToCart = () => {
        dispatch(cardData.fulfilled(data));
        dispatch(addQuantity({ id: data.id, type: '+', quantity: 1 }));
        setModalshow(true);

    };
    useEffect(() => {
        console.log('card', cart)
    }, [cart])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 box1">
                        {productSlice?.isLoading && (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                        {productSlice?.isError ? (
                            <h5 style={{ color: "red" }}>{productSlice?.isError?.data}</h5>
                        )
                            : (
                                <>
                                    <div className="col-md-4 box7">
                                        <div className="card" style={{ display: 'flex', height: '400px', width: '500px' }}>
                                            <img src={data?.thumbnail} className="card-img-top" alt="..." style={{ height: '500px' }} />
                                        </div>
                                        <div className="mt-4 add" >
                                            <Button type="button" variant="dark" onClick={handleAddToCart}>Add To Cart</Button>                                                 
                                                  <MyModal
                                                  show={modalShow}
                                                  onHide={() => setModalshow(false)}/> 
                                        </div>
                                    </div>
                                    <div className="col-md-8 box8" >
                                        <div className="card-body" style={{ height: '400px', padding: '5rem', float: "right" }}>
                                            <h5 className="card-title">{data?.title}</h5>
                                            <p className="card-text">{data?.description}</p>
                                            <p className="card-text">{data?.category}</p>
                                            <p className="card-price">{data?.price}</p>
                                        </div>
                                    </div>
                                </>

                            )}

                    </div>
                </div>
            </div>
        </>
    )


}