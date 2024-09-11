import { z } from 'zod';
import { EmployeeCreateNestedManyWithoutPositionInputObjectSchema } from './EmployeeCreateNestedManyWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateWithoutCompanyInput> = z
	.object({
		id: z.string().optional(),
		level: z.string(),
		officer: z.string(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		employees: z.lazy(() => EmployeeCreateNestedManyWithoutPositionInputObjectSchema).optional()
	})
	.strict();

export const PositionCreateWithoutCompanyInputObjectSchema = Schema;
