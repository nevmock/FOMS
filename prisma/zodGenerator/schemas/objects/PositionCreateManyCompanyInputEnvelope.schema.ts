import { z } from 'zod';
import { PositionCreateManyCompanyInputObjectSchema } from './PositionCreateManyCompanyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionCreateManyCompanyInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => PositionCreateManyCompanyInputObjectSchema),
			z.lazy(() => PositionCreateManyCompanyInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const PositionCreateManyCompanyInputEnvelopeObjectSchema = Schema;
