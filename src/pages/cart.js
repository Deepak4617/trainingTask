import { useEffect, useState } from "react";
import { useCustomSelector } from "../Service/allSelector/customSelector";
import Header from "../components/header";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeToCart } from "../Service/api/removeCart";
import Table from 'react-bootstrap/Table'
import { cardData } from "../Service/api/card";
import { addQuantity } from "../Service/api/addCartQuantity";
import { useCustomCartValue } from "../hooks/customState";

const Cart = () => {
    const { cart } = useCustomSelector();
    const dispatch = useDispatch();
    const { quantity, setQuantity, index, setIndex, type, setType } = useCustomCartValue();

    const handalAddItem = ((i, type) => {
        setQuantity(quantity + 1);
        setIndex(i);
        setType(type);
    })
    useEffect(() => {
        if (quantity && index) {
            dispatch(addQuantity({ id: index, type: type, quantity: quantity }));
        }
    }, [quantity, index, type])

    useEffect(() => {
        console.log('cart', cart)
    }, [cart])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        {/* <table className="table  table-sm table-bordered border-secondary "> */}
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Text</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Remove</th>
                                    <th scope="col">Order summary</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cart?.data?.map((value, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{i}</th>
                                                <td>
                                                    <img src={value?.thumbnail} alt={'...'} width='20%' />
                                                </td>
                                                <td>
                                                    <div className="mt-2" style={{ display: 'flex' }}>
                                                        <Button type="button" onClick={() => handalAddItem(value?.id, "-")} style={{height:'2rem'}}>-</Button>
                                                        <p>{value?.quantity}</p>
                                                        <Button type="button" onClick={() => handalAddItem(value?.id, "+")} style={{height:'2rem'}}>+</Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    {value?.description}
                                                </td>
                                                <td>
                                                    {value?.price}
                                                </td>
                                                <td>
                                                    <Button type="button" variant="info" onClick={() =>
                                                        dispatch(removeToCart(i))
                                                    }>Remove</Button>
                                                </td>
                                                <td>
                                                    <div className="container">
                                                        <p style={{ fontSize: '13px' }}>{value?.title}</p>
                                                        <p>{`${value?.quantity}x${value?.price}=${value?.price * value?.quantity}`}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </Table>
                        <div style={{ float: 'right', padding: '0px 10px ' }}>
                            Total-Price={cart?.total}
                        </div>

                        {/* </table> */}
                    </div>
                </div>
            </div>


        </>
    )
}
export default Cart;