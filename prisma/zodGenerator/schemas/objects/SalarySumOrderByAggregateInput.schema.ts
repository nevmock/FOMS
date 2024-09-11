import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalarySumOrderByAggregateInput> = z
	.object({
		position_allowance: z.lazy(() => SortOrderSchema).optional(),
		bjps_allowance: z.lazy(() => SortOrderSchema).optional(),
		tax_allowance: z.lazy(() => SortOrderSchema).optional(),
		position_deduction: z.lazy(() => SortOrderSchema).optional(),
		bpjs_deduction: z.lazy(() => SortOrderSchema).optional(),
		tax_deduction: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const SalarySumOrderByAggregateInputObjectSchema = Schema;
