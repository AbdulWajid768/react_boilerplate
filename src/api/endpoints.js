import { API_BASE_URL } from 'config';

const V1 = `${API_BASE_URL}/api/v1`;
const USERS = `${V1}/users`;
const CORE = `${V1}/core`;

export const endpoints = {
  LOGIN: `${USERS}/login/`,
  REFRESH_TOKEN: (id) => `${USERS}/${id}/refresh-token/`,
  GOOGLE_LOGIN: `${USERS}/accounts/google/`,
};
