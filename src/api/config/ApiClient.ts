import axios from "axios";
import {toast} from "react-toastify";
import promise = toast.promise;

const apiClient = axios.create({
    baseURL: 'https://nest.navaxcollege.com/api',
    timeout: 120000
})

apiClient.interceptors.response.use(function (response) {
        return response.data;
    },
    function (error) {

        if (error.response) {
            if (error.response.status === 404) {
                toast.error('منابع درخواستی وجود ندارد.');
            } else if (error.response.status === 400) {
                toast.error('پارامترهای ارسالی صحیح نمی باشد.');
            } else if (error.response.status === 401) {
                toast.error('لطفا وارد شوید.');
            } else if (error.response.status === 403) {
                toast.error('شما دسترسی به این منابع ندارید.');
            } else {
                toast.error('خطایی رخ داده است.');
            }
        } else if (error.request) {
            toast.error('ارتباط با سرور برقرار نیست.');
        } else {
            toast.error('خطای نامفهوم');
        }

        return Promise.reject(error);
    });


export default apiClient;