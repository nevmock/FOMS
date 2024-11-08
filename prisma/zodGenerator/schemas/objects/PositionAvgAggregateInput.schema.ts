import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionAvgAggregateInputType> = z
	.object({
		basic_salary: z.literal(true).optional()
	})
	.strict();

export const PositionAvgAggregateInputObjectSchema = Schema;
