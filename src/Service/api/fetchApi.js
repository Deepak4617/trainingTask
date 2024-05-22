import axios from "axios";
import { startFetch, successFetch, errorFetch } from "../../state/actionCreater";

export const fetchApiData = () => {
  return async (dispatch) => {
    dispatch(startFetch())
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data;
      dispatch(successFetch(data))
    } catch (error) {
      dispatch(errorFetch(error))
                //   state.items = state.items.filter(item => item.id !== productIdToRemove);
        // create codition same data not add add to car

        // builder.addCase(cardData.fulfilled, (state, action) => {
        //   const newData = [...state.data];
        //   const existingItemIndex = newData.findIndex(
        //     (item) => item.id === action.payload.id // Assuming you have an 'id' property
        //   );
    
        //   if (existingItemIndex === -1) {
        //     newData.push(action.payload);
        //     return { ...state, pending: false, error: null, data: newData };
        //   } else {
        //     return state; // Data already exists, don't update
        //   }
        // });
        // const newItem = action.payload;
        // const existingItem = state.items.find(item => item.id === newItem.id);
  
        // if (existingItem) {
        //   // If item already exists in the cart, update its quantity
        //   existingItem.quantity += newItem.quantity;
        // } else {
        //   // If item is not in the cart, add it
        //   state.items.push(newItem);
        // }
      //   builder.addCase(addQuantity.fulfilled, (state, action) => {
      //     console.log('addquant', action.payload);
      //     console.log(state.data);
      
      //     const item = action.payload;
      
      //     const data = state?.data ?? [];
      
      //     const existingItemIndex = data.findIndex((existingItem) => existingItem.id === item.id);
      
      //     if (existingItemIndex !== -1) {
      //         data[existingItemIndex].quantity += item.quantity;
      //     } else {
      //         data.push(item);
      //     }
      
      //     return { ...state, data };
      // });

//       import React, { useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item, quantity) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart) {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, quantity }]);
//     }
//   };

//   const removeFromCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart.quantity === 1) {
//       setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//     } else {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//         )
//       );
//     }
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <button onClick={() => removeFromCart(item)}>Remove</button>
//           <button onClick={() => addToCart(item, 1)}>Add</button>
//           <span>Quantity: {item.quantity}</span>
//         </div>
//       ))}
//       <div>Total Price: ${getCartTotal()}</div>
//     </div>
//   );
// };

// export default Cart;

    }
  }
}
