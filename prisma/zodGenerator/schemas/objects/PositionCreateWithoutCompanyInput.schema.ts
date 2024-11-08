import { z } from 'zod';
import { LevelCreateNestedOneWithoutPositionsInputObjectSchema } from './LevelCreateNestedOneWithoutPositionsInput.schema';
import { OfficerCreateNestedOneWithoutPositionsInputObjectSchema } from './OfficerCreateNestedOneWithoutPositionsInput.schema';
import { EmployeeCreateNestedManyWithoutPositionInputObjectSchema } from './EmployeeCreateNestedManyWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateWithoutCompanyInput> = z
	.object({
		id: z.string().optional(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		level: z.lazy(() => LevelCreateNestedOneWithoutPositionsInputObjectSchema),
		officer: z.lazy(() => OfficerCreateNestedOneWithoutPositionsInputObjectSchema),
		employees: z.lazy(() => EmployeeCreateNestedManyWithoutPositionInputObjectSchema).optional()
	})
	.strict();

export const PositionCreateWithoutCompanyInputObjectSchema = Schema;
