import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalarySumAggregateInputType> = z
	.object({
		position_allowance: z.literal(true).optional(),
		bjps_allowance: z.literal(true).optional(),
		tax_allowance: z.literal(true).optional(),
		position_deduction: z.literal(true).optional(),
		bpjs_deduction: z.literal(true).optional(),
		tax_deduction: z.literal(true).optional()
	})
	.strict();

export const SalarySumAggregateInputObjectSchema = Schema;
