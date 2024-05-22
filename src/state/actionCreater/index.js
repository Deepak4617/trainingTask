import { ERROR, START, SUCCESS } from "../actionTypes";
import { Fetch_START,Fetch_SUCCESS,Fetch_ERROR } from "../actionTypes";

export const startFetch = () => {
  return {
    type: START,

  }
}
export const successFetch = (data) => {
  return {
    type: SUCCESS,
    payload: data
  }
}
export const errorFetch = (error) => {
  return {
    type: ERROR,
    payload: error
  }
}

export const FetchStart = () => {
  return {
    type: Fetch_START,

  }
}
export const FetchSuccess = (product) => {
  return {
    type: Fetch_SUCCESS,
    payload: product
  }
}
export const FetchError = (error) => {
  return {
    type: Fetch_ERROR,
    payload: error
  }
}




