import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmployeeOrderByRelationAggregateInputObjectSchema } from './EmployeeOrderByRelationAggregateInput.schema';
import { PositionOrderByRelationAggregateInputObjectSchema } from './PositionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = z
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
		employees: z.lazy(() => EmployeeOrderByRelationAggregateInputObjectSchema).optional(),
		positions: z.lazy(() => PositionOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict();

export const CompanyOrderByWithRelationInputObjectSchema = Schema;
