import axios, {
	AxiosError,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig
} from 'axios';
import Cookies from 'js-cookie';

const request = axios.create({
	// baseURL: process.env.BASE_URL + `/api/v1`,
	baseURL: 'https://dev-foms.netlify.app/api/v1',
	// baseURL: 'http://localhost:5173/api/v1',
	timeout: 30000
});

const requestHandler = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const token = Cookies.get('token');

	if (token !== undefined && request.headers) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}

	return request;
};

const responseHandler = (response: AxiosResponse) => {
	return response;
};

const expiredTokenHandler = () => {
	localStorage.clear();
	Cookies.remove('token');
	window.location.href = '/auth';
	return {
		code: 401,
		status: 'Forbidden',
		recordsTotal: 0,
		data: null,
		error: {
			test: 'test'
		}
	};
};

const errorHandler = (error: AxiosError) => {
	if (error.response && error.response?.status === 401) {
		expiredTokenHandler();
	} else if (error.code === 'ERR_NETWORK') {
		if (error.response?.status === 401) {
			expiredTokenHandler();
		}
	}
	return Promise.reject(error);
};

request.interceptors.request.use(
	(request) => requestHandler(request),
	(error) => errorHandler(error)
);

request.interceptors.response.use(
	(response: AxiosResponse) => responseHandler(response),
	(error) => errorHandler(error)
);

export default {
	get: (url: string, params?: any, headers: AxiosRequestConfig['headers'] = {}) =>
		request({ method: 'get', url, params, headers }),

	post: (url: string, data: any, headers: AxiosRequestConfig['headers'] = {}) =>
		request({ method: 'post', url, data, headers }),

	put: (url: string, data: any, headers: AxiosRequestConfig['headers']) =>
		request({ method: 'put', url, data, headers }),

	delete: (url: string, data?: any) => request({ method: 'delete', url, data }),

	setToken: (token?: string) => {
		if (token) {
			request.defaults.headers.common.Authorization = `Bearer ${token}`;
		} else {
			delete request.defaults.headers.common.Authorization;
		}
	}
};
