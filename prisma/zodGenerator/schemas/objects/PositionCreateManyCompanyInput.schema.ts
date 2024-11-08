import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateManyCompanyInput> = z
	.object({
		id: z.string().optional(),
		level_id: z.string(),
		officer_id: z.string(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable()
	})
	.strict();

export const PositionCreateManyCompanyInputObjectSchema = Schema;
