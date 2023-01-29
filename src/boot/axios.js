import { boot } from 'quasar/wrappers'
import axios from 'axios'

export const configure = {
    // local: location.origin.replace(location.port, 8000),
    // local: location.origin.replace(location.port, "") + "/api/"
    // local: "http://localhost:8000/api/" //Desenvolvimento
    local: "http://192.168.0.242:8000/api/" //Desenvolvimento
};

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: configure.local,
  headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }

})

// http.interceptors.request.use(
//     function (config) {
//         const token = JSON.parse(sessionStorage.getItem('token'));
//         config.headers.Authorization = token ? "Bearer " + token : '';
//         return config;
//     }
// );
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
