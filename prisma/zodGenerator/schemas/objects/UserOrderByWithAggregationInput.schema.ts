import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		password: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		_count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const UserOrderByWithAggregationInputObjectSchema = Schema;
