import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyCountOrderByAggregateInputObjectSchema } from './CompanyCountOrderByAggregateInput.schema';
import { CompanyMaxOrderByAggregateInputObjectSchema } from './CompanyMaxOrderByAggregateInput.schema';
import { CompanyMinOrderByAggregateInputObjectSchema } from './CompanyMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		address: z.lazy(() => SortOrderSchema).optional(),
		code: z.lazy(() => SortOrderSchema).optional(),
		logo_uri: z.lazy(() => SortOrderSchema).optional(),
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		_count: z.lazy(() => CompanyCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => CompanyMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => CompanyMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const CompanyOrderByWithAggregationInputObjectSchema = Schema;
