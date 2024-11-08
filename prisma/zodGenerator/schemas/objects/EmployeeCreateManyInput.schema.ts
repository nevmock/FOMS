import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateManyInput> = z
	.object({
		id: z.string().optional(),
		company_id: z.string(),
		position_id: z.string(),
		nip: z.string(),
		name: z.string(),
		tmt: z.coerce.date(),
		gender: z.lazy(() => GenderSchema),
		whatsapp_number: z.string(),
		email: z.string(),
		created_at: z.coerce.date().optional().nullable(),
		updated_at: z.coerce.date().optional().nullable()
	})
	.strict();

export const EmployeeCreateManyInputObjectSchema = Schema;
