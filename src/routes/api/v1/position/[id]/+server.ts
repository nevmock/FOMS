import api from '$api';
import { handleError } from '../../../../../hooks.server';

export const GET = async (event) =>
	await api.handle(event).catch(async (e) => await handleError({ error: e }));
export const DELETE = async (event) =>
	await api.handle(event).catch(async (e) => await handleError({ error: e }));