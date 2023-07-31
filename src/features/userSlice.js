import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

let url = 'http://localhost:4000/auth/api/v1'
let token = localStorage.getItem('token');

export const register = createAsyncThunk(
    "auth/register",
    async (params) => {
        const res = axios.post(`${url}/register`,
            params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        const data = (await res).data

        return data

    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (params) => {
        try {
            const res = await axios.post(`${url}/login`,
            params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            const data = res.data
    
            return data
        }catch (error) {
            return error;
        }

    }
)
export const verificationToken = createAsyncThunk(
    "auth/verification",
    async (params) => {
        const res = axios.post(`${url}/verification`,
            params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        const data = (await res).data

        return data

    }
)
export const userProfile = createAsyncThunk(
    "user/profile",
    async (token,params) => {
        try {
            const res = await axios.post(`${url}/user/profile`,
            params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization":`Bearer ${token}`
                }
            })
            const data = res.data
    
            return data
        }catch (error) {
            return null;
        }

    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLogin: false,
        isLoading: false,
        hasError: false,
        verification:null
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            state.isLogin = false
        }).addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false;
            state.hasError = false
            state.isLogin = false
        }).addCase(register.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
            state.isLogin = false
        })
        // Login
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            state.isLogin = false
        }).addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false;
            state.hasError = false
            state.isLogin = false
        }).addCase(login.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
            state.isLogin = false
        })
        // verifikasi token
        builder.addCase(verificationToken.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            state.isLogin = false
        }).addCase(verificationToken.fulfilled, (state, action) => {
            state.verification = action.payload
            state.isLoading = false;
            state.hasError = false
            state.isLogin = true
        }).addCase(verificationToken.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
            state.isLogin = false
        })
        // user profile
        builder.addCase(userProfile.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
            state.isLogin = false
        }).addCase(userProfile.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false;
            state.hasError = false
            state.isLogin = false
        }).addCase(userProfile.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
            state.isLogin = false
        })
        
    }
})
// export const {
//     logout,login
// } = userSlice.actions

// export const selectUser = (state) => state.user.user;
// export const isLogin = (state) => state.user.isLogin;

export default userSlice.reducer