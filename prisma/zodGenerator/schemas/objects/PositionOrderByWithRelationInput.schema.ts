import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema';
import { LevelOrderByWithRelationInputObjectSchema } from './LevelOrderByWithRelationInput.schema';
import { OfficerOrderByWithRelationInputObjectSchema } from './OfficerOrderByWithRelationInput.schema';
import { EmployeeOrderByRelationAggregateInputObjectSchema } from './EmployeeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		company_id: z.lazy(() => SortOrderSchema).optional(),
		level_id: z.lazy(() => SortOrderSchema).optional(),
		officer_id: z.lazy(() => SortOrderSchema).optional(),
		basic_salary: z.lazy(() => SortOrderSchema).optional(),
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional(),
		level: z.lazy(() => LevelOrderByWithRelationInputObjectSchema).optional(),
		officer: z.lazy(() => OfficerOrderByWithRelationInputObjectSchema).optional(),
		employees: z.lazy(() => EmployeeOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict();

export const PositionOrderByWithRelationInputObjectSchema = Schema;
