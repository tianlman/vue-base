import axios from 'axios'
import {baseUrlBusiness} from "@/config/ipConfig";

export const baseUrl = process.env.API_URL || baseUrlBusiness;//区分 开发 测试 发布 地址

const http = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    timeout: 10000,
})

http.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)
// 添加响应拦截器
http.interceptors.response.use(
    (response)=>{
        // 对响应数据做点什么
        const data = response.data;
        if (data.code * 1 !== 200 && data.success === false) {

            return Promise.reject(data);
        }
        return  data
    },
    (error)=>{
        // 对响应错误做点什么
    }
)
export default http
