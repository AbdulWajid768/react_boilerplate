import axios from 'axios';
import { local } from 'common';
import { handleError } from 'api/helpers';

export const getConfig = (withToken) => {
  return withToken ? { headers: { Authorization: `Bearer ${local.getAccessToken()}` } } : {};
};

export const apiUtils = {
  get: async (url, params = {}, withToken = true, showError = true) => {
    const config = getConfig(withToken);
    config.params = params;
    try {
      return (await axios.get(url, config)).data;
    } catch (error) {
      return await handleError(error, apiUtils.get, url, params, withToken, showError);
    }
  },

  post: async (url, data, withToken = true) => {
    try {
      const config = getConfig(withToken);
      return (await axios.post(url, data, config)).data;
    } catch (error) {
      return await handleError(error, apiUtils.post, url, data, withToken);
    }
  },
  put: async (url, data, withToken = true) => {
    try {
      const config = getConfig(withToken);
      return (await axios.put(url, data, config)).data;
    } catch (error) {
      return await handleError(error, this, url, data, withToken);
    }
  },
  patch: async (url, data, withToken = true) => {
    try {
      const config = getConfig(withToken);
      return (await axios.patch(url, data, config)).data;
    } catch (error) {
      return await handleError(error, this, url, data, withToken);
    }
  },
  delete: async (url, data, withToken = true) => {
    try {
      const config = getConfig(withToken);
      return (await axios.delete(url, config)).data;
    } catch (error) {
      return await handleError(error, this, url, data, withToken);
    }
  },
};
