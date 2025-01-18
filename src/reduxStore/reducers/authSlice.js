import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authExtraActions } from 'reduxStore/actions';
import { local } from 'common';

const INITIAL_STATE = {
  loading: false,
  user: local.getUser(),
  isUserLoggedIn: local.isUserLoggedIn(),
  tokens: {
    access: '',
    refresh: '',
  },
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    resetAuthSlice: () => INITIAL_STATE,
    logout: (state,) => {
      state.isUserLoggedIn = false;
      local.clearLocalStorge();
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authExtraActions.login.fulfilled,
        authExtraActions.googleLogin.fulfilled,
      ),
      (state, {payload}) => {
        const {access, refresh, user} = payload;
        state.loading = false;
        state.isUserLoggedIn = true;
        state.tokens = {access, refresh};
        state.user = user;
        local.storeUser(user);
        local.storeTokens({access, refresh});
      }
    );
    builder.addMatcher(
      isAnyOf(
        authExtraActions.login.pending,
        authExtraActions.googleLogin.pending,
      ),
      (state, {payload}) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(
        authExtraActions.login.rejected,
        authExtraActions.googleLogin.rejected,
      ),
      (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const {actions: authActions, reducer} = authSlice;
export default reducer;
