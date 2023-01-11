export const productReducer =(state,action)=> {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return [...state,{
        title: action.product.title
        body: action.product.body
      }]
    default:
      break;
  }
}
