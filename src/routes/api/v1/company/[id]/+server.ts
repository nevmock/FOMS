import api from '$api';
import { handleError } from '../../../../../hooks.server';

export const GET = async (event) => api.handle(event).catch((e) => handleError({ error: e }));
export const DELETE = async (event) => api.handle(event).catch((e) => handleError({ error: e }));
