import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { CompanyCreateNestedOneWithoutEmployeesInputObjectSchema } from './CompanyCreateNestedOneWithoutEmployeesInput.schema';
import { SalaryCreateNestedManyWithoutEmployeeInputObjectSchema } from './SalaryCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateWithoutPositionInput> = z
	.object({
		id: z.string().optional(),
		nip: z.string(),
		name: z.string(),
		tmt: z.coerce.date(),
		gender: z.lazy(() => GenderSchema),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		company: z.lazy(() => CompanyCreateNestedOneWithoutEmployeesInputObjectSchema).optional(),
		salaries: z.lazy(() => SalaryCreateNestedManyWithoutEmployeeInputObjectSchema).optional()
	})
	.strict();

export const EmployeeCreateWithoutPositionInputObjectSchema = Schema;
