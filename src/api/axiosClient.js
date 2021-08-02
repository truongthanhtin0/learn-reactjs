import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
  header: {
    "Content-type": "application/json",
  },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { data, config, status } = error.response;
    if (config.url === "/auth/local/register" && status === 400) {
      const dataList = data.data || [];
      const firstData = dataList.length >= 0 ? dataList[0] : {};
      const messageList = firstData.messages;
      const firstMessage = messageList.length >= 0 ? messageList[0] : {};
      return Promise.reject(firstMessage);
    }
    // console.log("ERROR RESPONSE: ", error.response);
  }
);

export default axiosClient;
