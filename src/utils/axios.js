import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  // test
  baseURL: 'https://truly-contacts.herokuapp.com/api',
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }

    return config;
  },
  err => Promise.reject(err),
);
axiosInstance.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
); // callback
export default axiosInstance;
