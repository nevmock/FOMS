import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { CompanyCreateNestedOneWithoutEmployeesInputObjectSchema } from './CompanyCreateNestedOneWithoutEmployeesInput.schema';
import { PositionCreateNestedOneWithoutEmployeesInputObjectSchema } from './PositionCreateNestedOneWithoutEmployeesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateWithoutSalariesInput> = z
	.object({
		id: z.string().optional(),
		nip: z.string(),
		name: z.string(),
		tmt: z.coerce.date(),
		gender: z.lazy(() => GenderSchema),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		company: z.lazy(() => CompanyCreateNestedOneWithoutEmployeesInputObjectSchema).optional(),
		position: z.lazy(() => PositionCreateNestedOneWithoutEmployeesInputObjectSchema).optional()
	})
	.strict();

export const EmployeeCreateWithoutSalariesInputObjectSchema = Schema;
