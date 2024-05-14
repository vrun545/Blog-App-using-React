import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0' , name:'Educational'},
    {id:'1' , name:'Science and Nature'},
    {id:'2' , name:'Business and Entrepreneurship'},
    {id:'3' , name:'Finance and Investing'},
    {id:'4' , name:'Other'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer