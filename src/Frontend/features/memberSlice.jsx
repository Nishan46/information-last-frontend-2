import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isload :false,
    member_data :{},
    category_data : {}
}

export const memberSlice = createSlice({
    name:'member',
    initialState,
    reducers:{
        setData :(state,action)=>{
            state.isload = action.payload['isload']
            state.member_data = action.payload['member_data']
            state.category_data = action.payload['category_data']
        },
        setLoad:(state,action)=>{
            state.isload = action.payload
        }
    }
})

export const { setData , setLoad} = memberSlice.actions;
export default memberSlice.reducer;