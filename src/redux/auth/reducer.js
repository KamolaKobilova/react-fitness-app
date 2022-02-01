import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 'test',
  lang: 'uz'
};

export const profileSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    clearAccount: (state, action) => {
      return initialState;
    },
    updateAccount: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { clearAccount, updateAccount } = profileSlice.actions;
export default profileSlice.reducer;