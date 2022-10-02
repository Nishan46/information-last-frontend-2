import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language:'en'
}

export const languageSlice = createSlice({
    name:'lang',
    initialState,
    reducers:{
        setLanguage:(state,action)=>{
            state.language = action.payload['lang']
        }
    }
})

export const { setLanguage} = languageSlice.actions;
export default languageSlice.reducer;