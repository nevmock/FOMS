import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryMaxOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		employee_id: z.lazy(() => SortOrderSchema).optional(),
		month_salary: z.lazy(() => SortOrderSchema).optional(),
		position_allowance: z.lazy(() => SortOrderSchema).optional(),
		bjps_allowance: z.lazy(() => SortOrderSchema).optional(),
		tax_allowance: z.lazy(() => SortOrderSchema).optional(),
		other_allowance: z.lazy(() => SortOrderSchema).optional(),
		position_deduction: z.lazy(() => SortOrderSchema).optional(),
		bpjs_deduction: z.lazy(() => SortOrderSchema).optional(),
		tax_deduction: z.lazy(() => SortOrderSchema).optional(),
		other_deduction: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const SalaryMaxOrderByAggregateInputObjectSchema = Schema;
