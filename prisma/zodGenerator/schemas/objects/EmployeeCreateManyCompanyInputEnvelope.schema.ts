import { z } from 'zod';
import { EmployeeCreateManyCompanyInputObjectSchema } from './EmployeeCreateManyCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateManyCompanyInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => EmployeeCreateManyCompanyInputObjectSchema),
			z.lazy(() => EmployeeCreateManyCompanyInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const EmployeeCreateManyCompanyInputEnvelopeObjectSchema = Schema;
