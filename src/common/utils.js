import { errorsCodes } from 'common/errors';
import { toast } from 'react-toastify';


export const utils = {
  getErrorString: (error) => {
    let textError = '';
    const arr = Object.values(error.response.data).flat();
    for (let i = 0; i < arr.length; i += 1) {
      textError += `${arr[i]}\n`;
    }
    return textError;
  },
  showErrorToast: (error) => {
    if (error.response?.status === errorsCodes.SERVER_ERROR) {
      toast.error(error.response.statusText);
    }

    if (error.response?.data) {
      toast.error(utils.getErrorString(error));
    } else {
      toast.error(error.message ? error.message : error);
    }
  },
  toArrayMapping: (data) => {
    return data.reduce((dict, item) => {
      dict[item.id] = item;
      return dict;
    }, {});
  },
  toArrayWithKey: (data) => {
    return data ? Object.entries(data)?.map(([key, value]) => ({
      ...value,
      key,
    })) : [];
  },
  removeItemsFromArray: (arr, target) => {
    return arr.filter((item) => item !== target);
  },
  timeStringToSeconds: (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':')?.map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  },
  secondsToTimeString: (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },
  sortArray: (data) => {
    return data.sort((item1, item2) => item1 - item2);
  },
  ellipseText: (text, noOfChar) => {
    return text.length > noOfChar ? `${text.substring(0, 11)}...` : text;
  },
  snakeToTitleCase: (snakeStr) => {
    return snakeStr
      .split('_') // Split the string by underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  },
  isObjectEmpty: (obj) => {
    return obj === null || obj === undefined || (Object.keys(obj).length === 0 && obj.constructor === Object);
  },
};
