import axios from 'axios';
import { FormDataType } from '../components/Login/LoginForm';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': ''
  }
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data);
  },
  unFollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data);
  }
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  login(model: FormDataType) {
    return instance.post('auth/login', model)
      .then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login')
      .then(response => response.data);
  }
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  }
};