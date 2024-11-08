import { z } from 'zod';
import { SalaryWhereInputObjectSchema } from './SalaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SalaryListRelationFilter> = z
	.object({
		every: z.lazy(() => SalaryWhereInputObjectSchema).optional(),
		some: z.lazy(() => SalaryWhereInputObjectSchema).optional(),
		none: z.lazy(() => SalaryWhereInputObjectSchema).optional()
	})
	.strict();

export const SalaryListRelationFilterObjectSchema = Schema;
