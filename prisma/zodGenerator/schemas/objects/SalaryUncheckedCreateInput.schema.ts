import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		employee_id: z.string(),
		month_salary: z.string(),
		position_allowance: z.number(),
		bjps_allowance: z.number(),
		tax_allowance: z.number(),
		other_allowance: z.string(),
		position_deduction: z.number(),
		bpjs_deduction: z.number(),
		tax_deduction: z.number(),
		other_deduction: z.string(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable()
	})
	.strict();

export const SalaryUncheckedCreateInputObjectSchema = Schema;
