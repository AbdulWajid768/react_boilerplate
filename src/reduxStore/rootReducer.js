import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, generalReducer, } from 'reduxStore/reducers';

export default combineReducers({
  auth: authReducer,
  general: generalReducer,
});
