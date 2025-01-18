import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    resetGeneralSlice: () => INITIAL_STATE,
    resetData: (state, {payload}) => {
      state.transcriptionData = state.originalTranscriptionData = state.summaryData = {};
    },
  },
  extraReducers: (builder) => {
  },
});

export const {actions: generalActions, reducer} = authSlice;
export default reducer;
