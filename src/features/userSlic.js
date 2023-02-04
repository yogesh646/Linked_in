import { createSlice } from '@reduxjs/toolkit'

export const userSlic= createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
    login: (state,action) => {
     
      state.user =action.payload;
    },
 
    logout: (state) => {
      state.user = null;
    },
  },
})


export const { login, logout } = userSlic.actions


// export const incrementAsync = amount = dispatch =>{
//   setTimeout(()=>{
//     dispatch(incrementByAmount(amount));
//   },1000);
// }

export const selectUser = (state)=>state.user.user;
export default userSlic.reducer