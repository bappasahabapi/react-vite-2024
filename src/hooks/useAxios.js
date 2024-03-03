import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // Add a request interceptor
    const requestIntercept=api.interceptors.response.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },

      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const orginalRequest = error.config;
        if (error.response.status === 401 && !orginalRequest._retry) {
          orginalRequest._retry = true;

          // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it

          
          // eslint-disable-next-line no-useless-catch
          try {
            //get the current refresh token from auth then generate new refresh token

            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refreshToken`,
              { refreshToken }
            );

            //get the new token and set the token to auth
            const { token } = response.data;
            setAuth({...auth,authToken: token});

            console.log(`New refresh token: ${token}`);

             // Retry the original request with the new token
            orginalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(orginalRequest);

          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error)
      }
    );

    //clear function when component unmount
    return()=>{
      api.interceptors.request.eject(requestIntercept)
      api.interceptors.request.eject(responseIntercept)
    }
    


  }, [auth?.authToken]);
};
