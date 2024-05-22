import { combineReducers } from "redux";
import reducer from "./testReducer2";
import fetchExactData from "./testReducer";

const  reducers = combineReducers({
    reducerData:reducer,
    product:fetchExactData
})

export default reducers;