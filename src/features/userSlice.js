import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        isLogin:false
    },
    reducers:{
        login:(state,action)=> {
            let token = localStorage.getItem('token');
            state.user = action.payload
            if (token && token != '') {
                state.isLogin = true
            }
        },
        logout:(state)=>{
            state.user = null;
        }
    }
})
export const {login,logout} = userSlice.actions

export const selectUser =(state)=>state.user.user;
export const isLogin =(state)=>state.user.isLogin;

export default userSlice.reducer