import axios from 'axios'
import { FetchStart,FetchSuccess,FetchError } from '../../state/actionCreater';

export const FetchClickData = (id) => {
    return async (dispatch) => {
        dispatch(FetchStart())
        try {
            const response = await axios.get(`https://dummyjson.com/producjkjkjkts/${id}`);
            const data = response.data;
            dispatch(FetchSuccess(data))
        } catch (error) {
            dispatch(FetchError(error))
        }
    }
}






