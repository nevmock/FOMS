import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		company_id: z.literal(true).optional(),
		level: z.literal(true).optional(),
		officer: z.literal(true).optional(),
		basic_salary: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional()
	})
	.strict();

export const PositionMaxAggregateInputObjectSchema = Schema;
