import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '../const/environments.constants';
import { getCookie } from 'typescript-cookie';
import { ESession } from '../enums/auth.enum';

const getBaseUrl = (): string => API_URL;

const API = axios.create({
    baseURL: getBaseUrl(),
});

API.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    const token = getCookie(ESession.JWT);
    token && (req.headers) && (req.headers.Authorization = `Bearer ${token}`);

    return req;
});

API.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => Promise.reject(error.response?.data),
);

export { API, getBaseUrl };