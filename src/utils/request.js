import axios from 'axios';
import { baseURL, loginURL } from '@/config';
import { getCookie, delCookie } from './cookie';
import { message } from 'antd';

const instance = axios.create({
  baseURL,
  timeout: 5000
});

// http请求拦截器
instance.interceptors.request.use(
  config => {
    const token = getCookie('token'); // 获取Cookie
    // console.log('token',token);
    if (token) {
      config.headers.token = token; // 后台接收的参数,加上token
    }
    return config;
  },
  err => {
    message.error(err.request.response.data.msg);
    return Promise.reject(err.request);
  }
);
// http响应拦截器
instance.interceptors.response.use(
  res => {
    if (!res || !res.data) return;
    if (res.data.code === 401) {
      delCookie('token');
      delCookie('userInfo');
      window.location.href = loginURL;
    } else if (res.data.code !== 1) {
      message.error(res.data.msg);
      return Promise.reject(res);
    }
    return res.data;
  },
  err => {
    console.log('error', err.response);
    if (err.response.data.code === 401) {
      delCookie('token');
      delCookie('userInfo');
      // message.error(error.response.data.msg);
      window.location.href = loginURL;
    }
    return Promise.reject(err.response);
  }
);

export default instance;
