import { notification } from "antd";
import axios from "axios";

export const isLocal = window.location.href.match(/127|192|localhost/g);

export const endpoint = isLocal ? "localEndpoint" : "onlineEndpoint";
const hasCode = (error, status) => {
  if (
    error?.response?.status === parseInt(status) ||
    error.error?.response?.status === parseInt(status) ||
    error?.response?.status === parseInt(status)
  ) {
    return true;
  } else {
    return false;
  }
};
export const handleError = (error) => {
  console.log("error handler", error, { error });

  if (hasCode(error, 401)) {
    //loged out
    window.store.dispatch({ type: "SET_UNAUTHORIZATION" });
  } else if (error?.message === "Network Error") {
    //network error
  } else if (hasCode(error, 445)) {
    //
  } else if (hasCode(error, 440)) {
    //window.store.dispatch({ type: "SET_UNAUTHORIZATION" });
  } else if (hasCode(error, 429)) {
    //
  } else if (hasCode(error, 403)) {
    //
  } else {
    notification["error"]({
      message: error.message || error?.response?.data?.message || "error Message",
      description: error?.response?.data?.errors && Object.values(error.response.data.errors),
      placement: window.innerWidth <= 1024 ? "topRight" : "bottomRight",
      duration: 4,
    });
  }
  return Promise.reject(error);
};

export const instanceAxios = axios.create({
  baseURL: endpoint,
});
instanceAxios.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "application/json",
      // "Sec-Fetch-Mode": "no-cors",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instanceAxios.interceptors.response.use(
  (response) => {
    // console.log("response", response);
    return response;
  },
  (error) => handleError(error),
);
