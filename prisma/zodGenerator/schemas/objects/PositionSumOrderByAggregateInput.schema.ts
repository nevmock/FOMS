import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionSumOrderByAggregateInput> = z
	.object({
		basic_salary: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const PositionSumOrderByAggregateInputObjectSchema = Schema;
