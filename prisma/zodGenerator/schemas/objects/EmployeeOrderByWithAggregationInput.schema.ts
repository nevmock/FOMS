import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmployeeCountOrderByAggregateInputObjectSchema } from './EmployeeCountOrderByAggregateInput.schema';
import { EmployeeMaxOrderByAggregateInputObjectSchema } from './EmployeeMaxOrderByAggregateInput.schema';
import { EmployeeMinOrderByAggregateInputObjectSchema } from './EmployeeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		company_id: z.lazy(() => SortOrderSchema).optional(),
		position_id: z.lazy(() => SortOrderSchema).optional(),
		nip: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		tmt: z.lazy(() => SortOrderSchema).optional(),
		gender: z.lazy(() => SortOrderSchema).optional(),
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		_count: z.lazy(() => EmployeeCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => EmployeeMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => EmployeeMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const EmployeeOrderByWithAggregationInputObjectSchema = Schema;
