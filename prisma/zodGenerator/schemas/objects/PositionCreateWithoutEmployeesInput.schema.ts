import { z } from 'zod';
import { CompanyCreateNestedOneWithoutPositionsInputObjectSchema } from './CompanyCreateNestedOneWithoutPositionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateWithoutEmployeesInput> = z
	.object({
		id: z.string().optional(),
		level: z.string(),
		officer: z.string(),
		basic_salary: z.number(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		company: z.lazy(() => CompanyCreateNestedOneWithoutPositionsInputObjectSchema)
	})
	.strict();

export const PositionCreateWithoutEmployeesInputObjectSchema = Schema;
