import api from "$api";
import { json } from "@sveltejs/kit";
import { OurBaseError } from '$lib/server/core/error';

export const prerender = true;

export const GET = async (evt) => {
	try {
		const openapiSpec = await api.openapi(evt);
		return json(openapiSpec);
	} catch (error) {
		throw new OurBaseError(500, 'FAIL LOAD API SPEC', error.message)
	}
};