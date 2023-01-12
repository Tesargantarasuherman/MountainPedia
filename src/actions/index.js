import axios from "axios";
import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "./types";

export const getAllProduct = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        dispatch({ type: GET_ALL_PRODUCT, payload: res.data })
    }).catch((err) => {

    });
}
export const getDetailProduct = (id) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1${id}`).then((res) => {
        dispatch({ type: GET_DETAIL_PRODUCT, payload: res.data })
    }).catch((err) => {

    });
}