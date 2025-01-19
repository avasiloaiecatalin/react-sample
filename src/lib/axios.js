import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getData = async (url) => {
  const res = await axiosClient.get(url);
  return res.data;
};

export const postData = async (url, data) => {
  const res = await axiosClient.post(url, data);
  console.log('res: ', res);
  return res;
};

export const putData = async (url, data) => {
  const res = await axiosClient.put(url, data);
  return res.data;
};

export const deleteData = async (url) => {
  const res = await axiosClient.delete(url);
  return res.data;
};
