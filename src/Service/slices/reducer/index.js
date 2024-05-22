import { combineReducers } from "redux";
import reducerSlice from "./reducerSlice";
import productSlice from "./productsSlice";
import cartSlice from "./cartSlice";


const rootReducers = combineReducers({
        products:reducerSlice,
        data:productSlice,
        cart:cartSlice

})
export default rootReducers;