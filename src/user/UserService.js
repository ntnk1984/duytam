import axiosInstance from '../utils/axios';

export const login = async (username, password) => {
  const data = {
    username: username,
    password: password,
  };
  return await axiosInstance.post('/api/Account/Login', data);
};
