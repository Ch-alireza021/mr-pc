
// import axios from "axios";
// import { store } from "../../store";
// import { BASE_URL } from "../../config";
// import { refresh } from "../../features/auth/asyncThunk";
// // -----------------------------------------------------------
// export const api = axios.create({ baseURL: BASE_URL });
// // -----------------------------------------------------------

// api.interceptors.request.use(
//   function (config) {
//     const state = store.getState();
//     const { token, isLogin } = state.auth;
//     if (isLogin) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// // -----------------------------------------------------------
// let isRefreshingToken = false;
// api.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const state = store.getState();
//     const refreshToken = state.auth.refreshToken;
//     if (error?.response?.status === 401) {
//       const originalRequest = error.config;
//       if (!isRefreshingToken) {
//         isRefreshingToken = true;
//         return store
//           .dispatch(refresh({ refreshToken }))
//           .unwrap()
//           .then((data) => {
//             originalRequest.headers[
//               "Authorization"
//             ] = `Bearer ${data.accessToken}`;
//             return api(originalRequest);
//           })
//           .catch((error) => {
//             throw error;
//           })
//           .finally(() => {
//             isRefreshingToken = false;
//           });
//       }
//     }
//     return Promise.reject(error);
//   }
// );
