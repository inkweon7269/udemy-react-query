import axios, {AxiosRequestConfig} from "axios";
import {baseUrl} from "./constants";

/*
export function getJWTHeader(token): Record<string, string> {
    return { Authorization: `Bearer ${user.token}` };
}
*/

export const getApi = (key: any) => key;

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);