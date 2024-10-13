import api from '$api';
import { handleError } from '../../../../hooks.server';

export const GET = async (event) => await api.handle(event).catch((e) => handleError({ error: e }));
export const POST = async (event) =>
	await api.handle(event).catch((e) => handleError({ error: e }));
