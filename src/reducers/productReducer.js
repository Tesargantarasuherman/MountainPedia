import { GET_ALL_PRODUCT } from "../actions/types";

const INTIAL_STATE = {
  product: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT :
      return { ...state,product:action.payload};
    default:
      return state;
  }
};
