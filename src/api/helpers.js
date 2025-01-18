import { errorsCodes, local, utils } from 'common';
import { endpoints } from 'api/endpoints';
import axios from 'axios';

export const refreshAccessToken = async () => {
  try {
    const user = local.getUser();
    return (await axios.post(endpoints.REFRESH_TOKEN(user?.id), {refresh: local.getRefreshToken()})).data;
  } catch (error) {
    if (error?.response?.status === errorsCodes.UNAUTHORIZED_CODE) {
      local.clearLocalStorge();
      window.location.href = window.origin;
    } else {
      throw error;
    }
  }
};

export const handleError = async (error, callback, url, data, withToken, showError=true) => {
  if (withToken && error?.response?.status === errorsCodes.UNAUTHORIZED_CODE) {
    local.storeAccessToken((await refreshAccessToken()).access);
    return await callback(url, data, withToken);
  }
  showError && utils.showErrorToast(error);
  throw error;
};
