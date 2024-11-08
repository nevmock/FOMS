import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		company_id: z.literal(true).optional(),
		position_id: z.literal(true).optional(),
		nip: z.literal(true).optional(),
		name: z.literal(true).optional(),
		tmt: z.literal(true).optional(),
		gender: z.literal(true).optional(),
		whatsapp_number: z.literal(true).optional(),
		email: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional()
	})
	.strict();

export const EmployeeMaxAggregateInputObjectSchema = Schema;
