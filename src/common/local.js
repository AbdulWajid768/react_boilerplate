export const localKeys = {
  ACCESS: 'accessToken',
  REFRESH: 'refreshToken',
  USER: 'user',
  LOGIN_TIMESTAMP: 'loginTimestamp',
};

export const local = {
  storeTokens: (tokens) => {
    const timestamp = new Date().getTime();
    localStorage.setItem(localKeys.ACCESS, tokens.access);
    localStorage.setItem(localKeys.REFRESH, tokens.refresh);
    localStorage.setItem(localKeys.LOGIN_TIMESTAMP, timestamp);
  },

  storeAccessToken: (access_token) => {
    localStorage.setItem(localKeys.ACCESS, access_token);
  },
  getAccessToken: () => {
    return localStorage.getItem(localKeys.ACCESS);
  },
  getRefreshToken: () => {
    return localStorage.getItem(localKeys.REFRESH);
  },
  clearLocalStorge: () => {
    localStorage.clear();
  },
  storeUser: (user) => {
    localStorage.setItem(localKeys.USER, JSON.stringify(user));
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem(localKeys.USER));
  },
  isUserLoggedIn: () => {
    const savedTimestamp = localStorage.getItem(localKeys.LOGIN_TIMESTAMP);
    if (savedTimestamp) {
      const now = new Date().getTime();
      const daysDifference = (now - savedTimestamp) / (1000 * 60 * 60 * 24);
      if (daysDifference > 7) {
        localStorage.clear();
        return false;
      }
      return !!local.getAccessToken() && !!local.getUser();
    }
    return false;
  },
};
