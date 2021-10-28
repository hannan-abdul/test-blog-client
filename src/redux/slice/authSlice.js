import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userdetails: {

        }
    },
    reducers: {
        customAuth: (state, action)=> {
            state.userdetails = action.payload
        },
        logOut: (state, action) => {
            state.userdetails = {}

        }
    }
})

