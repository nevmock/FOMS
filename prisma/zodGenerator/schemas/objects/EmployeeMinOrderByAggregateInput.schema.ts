import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeMinOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		company_id: z.lazy(() => SortOrderSchema).optional(),
		position_id: z.lazy(() => SortOrderSchema).optional(),
		nip: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		tmt: z.lazy(() => SortOrderSchema).optional(),
		gender: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const EmployeeMinOrderByAggregateInputObjectSchema = Schema;
