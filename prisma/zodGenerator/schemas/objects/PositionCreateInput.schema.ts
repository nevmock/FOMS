import { z } from 'zod';
import { CompanyCreateNestedOneWithoutPositionsInputObjectSchema } from './CompanyCreateNestedOneWithoutPositionsInput.schema';
import { LevelCreateNestedOneWithoutPositionsInputObjectSchema } from './LevelCreateNestedOneWithoutPositionsInput.schema';
import { OfficerCreateNestedOneWithoutPositionsInputObjectSchema } from './OfficerCreateNestedOneWithoutPositionsInput.schema';
import { EmployeeCreateNestedManyWithoutPositionInputObjectSchema } from './EmployeeCreateNestedManyWithoutPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateInput> = z
	.object({
		id: z.string().optional(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		company: z.lazy(() => CompanyCreateNestedOneWithoutPositionsInputObjectSchema),
		level: z.lazy(() => LevelCreateNestedOneWithoutPositionsInputObjectSchema),
		officer: z.lazy(() => OfficerCreateNestedOneWithoutPositionsInputObjectSchema),
		employees: z.lazy(() => EmployeeCreateNestedManyWithoutPositionInputObjectSchema).optional()
	})
	.strict();

export const PositionCreateInputObjectSchema = Schema;
