import axios from "axios";

/**
 * @param {*} config => Axios Request Config
 */

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    common: {
      //   Authorization: `Bearer ${localStorage.jwt}`,
      "Content-Type": "json",
    },
  },
});

instance.interceptors.request.use(function () {
  /* TODO */
});

instance.interceptors.response.use(function () {
  /* TODO */
});

/**
 * static config for the instance
 * @param {*} method [GET, POST, DELETE, PATCH]
 * @param {*} url
 */

export async function CustomAxios(url, config = {}, onSuccess, onFail) {
  try {
    const response = await instance(url, config);
    onSuccess && onSuccess(response);
  } catch (error) {
    onFail && onFail(error.toJSON());
  }
}
