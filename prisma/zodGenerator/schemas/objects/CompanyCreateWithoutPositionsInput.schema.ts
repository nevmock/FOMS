import { z } from 'zod';
import { EmployeeCreateNestedManyWithoutCompanyInputObjectSchema } from './EmployeeCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyCreateWithoutPositionsInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		address: z.string(),
		code: z.string(),
		logo_uri: z.string(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		employees: z.lazy(() => EmployeeCreateNestedManyWithoutCompanyInputObjectSchema).optional()
	})
	.strict();

export const CompanyCreateWithoutPositionsInputObjectSchema = Schema;
