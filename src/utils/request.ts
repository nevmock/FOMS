import axios, {
	AxiosError,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig
} from 'axios';
import Cookies from 'js-cookie';
import { PUBLIC_BASE_URL } from '$env/static/public';

console.log(PUBLIC_BASE_URL);

const request = axios.create({
	// baseURL: `${process.env.REACT_APP_API_URL}/api/`,
	baseURL: 'http://localhost:5173/api/v1',
	timeout: 30000
	// headers: {
	// 	'Content-Type': 'application/json'
	// }
});

const requestHandler = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const token = Cookies.get('token');

	if (token !== undefined && request.headers) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}

	return request;
};

const responseHandler = (response) => {
	return response;
	// return {
	// 	code: response.status,
	// 	status: response.statusText,
	// 	recordsTotal: 0,
	// 	data: response.status === 200 || response.status === 201 ? response.data : null,
	// 	error: response.status === 200 || response.status === 201 ? null : response.data
	// };
};

const expiredTokenHandler = () => {
	// store.dispatch(getLoginData({}))
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

const errorHandler = (error) => {
	// TODO: Remove this code after you got the response information
	// error.code === 'ERR_NETWORK' should not exist
	if (error.response && error.response?.status === 401) {
		expiredTokenHandler();
	} else if (error.code === 'ERR_NETWORK') {
		// window.history.pushState({}, 'Redirect Network Error', '/auth');
		if (error.response?.status === 401) {
			expiredTokenHandler();
		}
	}

	// return {
	// 	code: 401,
	// 	status: 'Forbidden',
	// 	recordsTotal: 0,
	// 	data: null,
	// 	error: {
	// 		test: 'test'
	// 	}
	// };
	// return new Response(
	// 	JSON.stringify({
	// 		code: 401,
	// 		status: 'Forbidden',
	// 		recordsTotal: 0,
	// 		data: null,
	// 		error: {
	// 			test: 'test'
	// 		}
	// 	}),
	// 	{
	// 		status: 401,
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}
	// );
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
