import { useSelector } from "react-redux"
export const useCustomSelector = ()=>{
    const reducerSlice = useSelector((state)=>state.products);
    const productSlice = useSelector((state)=>state.data);
    const cart = useSelector((state)=>state.cart)
    return {
        reducerSlice,
        productSlice,
        cart
    } 
}

