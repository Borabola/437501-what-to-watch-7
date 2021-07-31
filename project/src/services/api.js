import axios from 'axios';

const BACKEND_URL = ' https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response !== undefined && response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


/**axios.post(url, data)
  .then(res => {
    // do good things
  })
  .catch(err => {
    if (err.response) {
      // client received an error response (5xx, 4xx)
    } else if (err.request) {
      // client never received a response, or request never left
    } else {
      // anything else
    }
  }) */
