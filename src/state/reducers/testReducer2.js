import { START, SUCCESS, ERROR } from "../actionTypes";
//  import { startFetch } from "../actionCreater";

const initialState = {
  pending: false,
  products: [],
  error: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return { ...state, pending: true };
    case SUCCESS
      : return { ...state, pending: false, products: action.payload, error: '' };
    case ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
export default reducer;

