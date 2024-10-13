import { z } from 'sveltekit-api';
import { ZodType } from 'zod';

export const Query = z.object({
	start: z.string().optional(),
	length: z.string().optional(),
	order: z.string().optional(),
	search: z.any().optional(),
	advSearch: z.any().optional()
});

export const ZodMessageResponse = z.object({
	message: z.string()
});

export const ZodResponse = <T extends ZodType>(modelSchema: T | null) =>
	z.object({
		code: z.number(),
		status: z.string(),
		recordsTotal: z.number().optional(),
		data: modelSchema
			? z
					.union([z.array(modelSchema), modelSchema, ZodMessageResponse])
					.nullable()
					.optional()
			: ZodMessageResponse.nullable().optional(),
		error: z.any()
	});
