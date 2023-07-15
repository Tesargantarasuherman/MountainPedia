import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let url ='https://jsonplaceholder.typicode.com/posts'
export const getAllProduct = createAsyncThunk(
    "productList/getAllProduct", 
    async () => {
        const res = await axios(`${url}`)
        const data = await res.data

        return data
  });
export const getProductById = createAsyncThunk(
    "productList/getProductById", 
    async (id) => {
        const res = await axios(`${url}/${id}`)
        const data = await res.data
        return data
  });
  
export const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[],
        product:[],
        isLoading: false,
        hasError: true
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state, action) => {
          state.isLoading = true;
          state.hasError = false;
        }).addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false;
            state.hasError = false
          }).addCase(getAllProduct.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
          })
    // get Product by Id
        builder.addCase(getProductById.pending, (state, action) => {
          state.isLoading = true;
          state.hasError = false;
        }).addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload
            state.isLoading = false;
            state.hasError = false
          }).addCase(getProductById.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
          })
    }
})
// export const selectCompanies = state => state.companyList.company;
// export const getProductById = getProduct

export const selectProduct =(state)=>state.product.products;
export const selectProductById =(state)=>state.product.product;

export default productSlice.reducer