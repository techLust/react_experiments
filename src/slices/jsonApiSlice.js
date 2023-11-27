import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    resData: [],
}

const jsonApiSlice = createSlice({
    name: 'jsonApiCall',
    initialState,
    reducers: {
        getData: (state, action) => {

        }
    },
    extraReducers: {
        
    }
})

export const { getData } = jsonApiSlice.actions

export default jsonApiSlice.reducer