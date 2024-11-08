import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		address: z.literal(true).optional(),
		code: z.literal(true).optional(),
		logo_uri: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional(),
		_all: z.literal(true).optional()
	})
	.strict();

export const CompanyCountAggregateInputObjectSchema = Schema;
