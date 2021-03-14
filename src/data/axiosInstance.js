import axios from 'axios';

const instance = axios.create({
  baseURL: `https://${process.env.REACT_APP_MOCKAPI_ID}.mockapi.io/api/v1/`,
});

export default instance;
