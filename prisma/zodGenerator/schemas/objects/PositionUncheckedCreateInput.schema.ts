import { z } from 'zod';
import { EmployeeUncheckedCreateNestedManyWithoutPositionInputObjectSchema } from './EmployeeUncheckedCreateNestedManyWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		company_id: z.string(),
		level_id: z.string(),
		officer_id: z.string(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		employees: z
			.lazy(() => EmployeeUncheckedCreateNestedManyWithoutPositionInputObjectSchema)
			.optional()
	})
	.strict();

export const PositionUncheckedCreateInputObjectSchema = Schema;
