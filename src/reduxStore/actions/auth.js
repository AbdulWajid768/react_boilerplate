import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';

const authExtraActions = {
  login: createAsyncThunk('auth/login', api.login),
  googleLogin: createAsyncThunk('auth/googleLogin', api.googleLogin),
};

export default authExtraActions;
