import { z } from 'zod';
import { EmployeeUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './EmployeeUncheckedCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutPositionsInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		address: z.string(),
		code: z.string(),
		logo_uri: z.string(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		employees: z
			.lazy(() => EmployeeUncheckedCreateNestedManyWithoutCompanyInputObjectSchema)
			.optional()
	})
	.strict();

export const CompanyUncheckedCreateWithoutPositionsInputObjectSchema = Schema;
