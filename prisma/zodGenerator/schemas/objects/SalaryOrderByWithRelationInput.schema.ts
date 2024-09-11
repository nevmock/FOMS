import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './EmployeeOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryOrderByWithRelationInput> = z
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
		created_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		updated_at: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		employee: z.lazy(() => EmployeeOrderByWithRelationInputObjectSchema).optional()
	})
	.strict();

export const SalaryOrderByWithRelationInputObjectSchema = Schema;
