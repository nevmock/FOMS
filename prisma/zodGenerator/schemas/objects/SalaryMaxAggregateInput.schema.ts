import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		employee_id: z.literal(true).optional(),
		month_salary: z.literal(true).optional(),
		position_allowance: z.literal(true).optional(),
		bjps_allowance: z.literal(true).optional(),
		tax_allowance: z.literal(true).optional(),
		other_allowance: z.literal(true).optional(),
		position_deduction: z.literal(true).optional(),
		bpjs_deduction: z.literal(true).optional(),
		tax_deduction: z.literal(true).optional(),
		other_deduction: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional()
	})
	.strict();

export const SalaryMaxAggregateInputObjectSchema = Schema;
