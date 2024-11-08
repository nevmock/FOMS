import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionWhereUniqueInput> = z
	.object({
		id: z.string().optional(),
		company_id: z.string().optional(),
		level_id: z.string().optional(),
		officer_id: z.string().optional()
	})
	.strict();

export const PositionWhereUniqueInputObjectSchema = Schema;
