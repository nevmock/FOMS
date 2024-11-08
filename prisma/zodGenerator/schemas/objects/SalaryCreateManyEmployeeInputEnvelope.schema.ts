import { z } from 'zod';
import { SalaryCreateManyEmployeeInputObjectSchema } from './SalaryCreateManyEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryCreateManyEmployeeInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => SalaryCreateManyEmployeeInputObjectSchema),
			z.lazy(() => SalaryCreateManyEmployeeInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const SalaryCreateManyEmployeeInputEnvelopeObjectSchema = Schema;
