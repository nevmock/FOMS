import { z } from 'zod';
import { PositionUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './PositionUncheckedCreateNestedManyWithoutCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutEmployeesInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		address: z.string(),
		code: z.string(),
		logo_uri: z.string(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable(),
		positions: z
			.lazy(() => PositionUncheckedCreateNestedManyWithoutCompanyInputObjectSchema)
			.optional()
	})
	.strict();

export const CompanyUncheckedCreateWithoutEmployeesInputObjectSchema = Schema;
