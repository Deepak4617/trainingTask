import { Fetch_START,Fetch_SUCCESS,Fetch_ERROR } from "../actionTypes";
const initialState = {
  pending: false,
  products: [],
  error: '',
};
const fetchExactData = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_START:
      return { ...state, pending: true };
    case Fetch_SUCCESS
      : return { ...state, pending: false, products: action.payload, error: '' };
    case Fetch_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
export default fetchExactData;