import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionSumAggregateInputType> = z
	.object({
		basic_salary: z.literal(true).optional()
	})
	.strict();

export const PositionSumAggregateInputObjectSchema = Schema;
