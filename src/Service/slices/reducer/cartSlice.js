import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../api/card";
import { removeToCart } from "../../api/removeCart";
import { addQuantity } from "../../api/addCartQuantity";

const initialState = {
    pending: false,
    data: [],
    error: null,
    total: 0
}
const cartSlice = createSlice({
    name: "Cart",
    initialState,

    extraReducers: (builder) => {

        builder.addCase(cardData.pending, (state) => {
            return { ...state, pending: false, error: null, data: [], total: null }
        });
        builder.addCase(cardData.fulfilled, (state, action) => {
            const newValue = [...state?.data];
            const updatedValue = action.payload;
            const exist = newValue.findIndex((item) => item.id === updatedValue.id);
            if (exist === -1) {
                return { ...state, error: null, data: [...newValue, updatedValue] };
            } else {
                return { ...state, error: [`Item is already exist `, updatedValue.id] };
            }
        });
        builder.addCase(cardData.rejected, (state, action) => {
            return { ...state, error: action.error, data: [] }
            

        });
        builder.addCase(removeToCart.fulfilled, (state, action) => {
            const existData = state?.data?.filter((value, i) => i !== action.payload)
            return { ...state, data: existData };
        });



        builder.addCase(addQuantity.fulfilled, (state, action) => {
            const updatedItem = action.payload;
            // console.log('updatedItem',updatedItem)
            const existingItem = state?.data?.find((value) => value?.id === updatedItem?.id);
            if (existingItem) {
                const updatedData = state?.data?.map((item) =>
                    item?.id === updatedItem?.id
                        ? {
                            ...item, quantity: (item?.quantity !== undefined && item?.quantity !== null) ?
                                updatedItem?.type === '+' ? item?.quantity + 1
                                    : updatedItem?.type === '-' && item?.quantity >= 2 ? item?.quantity - 1 : 1
                                : 1,
                                regularPrice:(item?.price * (item?.quantity +1))                            
                        }
                        : item 
                );
                const totalPrice = updatedData.reduce((value, i) => {
                    const subtotal = i.price * i.quantity;
                    return value + subtotal;
                }, 0);

                return { ...state, data: updatedData, total: totalPrice };

            }
            return state;
        });


    
    }
});
export default cartSlice.reducer;
