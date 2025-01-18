import { apiUtils, endpoints } from 'api';

export const api = {
  login: async (data) => {
    return await apiUtils.post(endpoints.LOGIN, data, false);
  },
  googleLogin: async (data) => {
    return await apiUtils.post(endpoints.GOOGLE_LOGIN, data, false);
  },
};
