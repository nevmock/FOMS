import axios, {
	AxiosError,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig
} from 'axios';
import Cookies from 'js-cookie';

const request = axios.create({
	// baseURL: `${process.env.REACT_APP_API_URL}/api/`,
	baseURL: '',
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json'
	}
});

const requestHandler = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const token = Cookies.get('token');

	if (token !== undefined && request.headers) {
		request.headers.set('Authorization', `Bearer ${token}`);
	}

	return request;
};

const responseHandler = (response: AxiosResponse): AxiosResponse => {
	return response;
};

const expiredTokenHandler = () => {
	// store.dispatch(getLoginData({}))
	localStorage.clear();
	Cookies.remove('token');
	// window.location.href = '/auth';
	// return error;
};

const errorHandler = (error: AxiosError): AxiosError => {
	// TODO: Remove this code after you got the response information
	// error.code === 'ERR_NETWORK' should not exist
	if (error.response && error.response.status === 401) {
		expiredTokenHandler();
	} else if (error.code === 'ERR_NETWORK') {
		// window.history.pushState({}, 'Redirect Network Error', '/auth');
		if (error.response?.status === 401) {
			expiredTokenHandler();
		}
	}
	return error;
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
	get: (
		url: string,
		params?: Record<string, string | number | boolean>,
		headers: AxiosRequestConfig['headers'] = {}
	): Promise<AxiosResponse> => request({ method: 'get', url, params, headers }),

	post: (
		url: string,
		data: Record<string, string | number | boolean>,
		headers: AxiosRequestConfig['headers'] = {}
	): Promise<AxiosResponse> => request({ method: 'post', url, data, headers }),

	put: (
		url: string,
		data: Record<string, string | number | boolean>,
		headers: AxiosRequestConfig['headers']
	): Promise<AxiosResponse> => request({ method: 'put', url, data, headers }),

	delete: (url: string, data?: Record<string, string | number | boolean>): Promise<AxiosResponse> =>
		request({ method: 'delete', url, data }),

	setToken: (token?: string) => {
		if (token) {
			request.defaults.headers.common.Authorization = `Bearer ${token}`;
		} else {
			delete request.defaults.headers.common.Authorization;
		}
	}
};
