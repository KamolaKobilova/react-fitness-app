import Axios from "axios";
import store from "../redux";
import { clearAccount } from '../redux/auth/reducer';

const axios = Axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL, withCredentials: true });

axios.interceptors.request.use((configs) => {
  const token = store.getState().account.token || "";
  configs.headers.authorization = token ? `Berear ${token}` : "";

  return configs;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    if (error?.response?.status === 401) {
      return store.dispatch(clearAccount());
    }
    return Promise.reject(error);
  }
);

export { axios as default };