import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema';
import { PositionOrderByWithRelationInputObjectSchema } from './PositionOrderByWithRelationInput.schema';
import { SalaryOrderByRelationAggregateInputObjectSchema } from './SalaryOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		company_id: z.lazy(() => SortOrderSchema).optional(),
		position_id: z.lazy(() => SortOrderSchema).optional(),
		nip: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		tmt: z.lazy(() => SortOrderSchema).optional(),
		gender: z.lazy(() => SortOrderSchema).optional(),
		whatsapp_number: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional(),
		position: z.lazy(() => PositionOrderByWithRelationInputObjectSchema).optional(),
		salaries: z.lazy(() => SalaryOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict();

export const EmployeeOrderByWithRelationInputObjectSchema = Schema;
