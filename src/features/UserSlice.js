import {  createSlice } from '@reduxjs/toolkit';



const initialState = {
  data: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  
  reducers: {
    data_get:(state,action) => {
      state.data = action.payload;
    },
    // decrement: (state) => {
    //   state.data -= 1;
    // },
  
  },
});

export const { data_get } = userSlice.actions;
export const selectdata_get = (state) => state.user.data;
export default userSlice.reducer;
