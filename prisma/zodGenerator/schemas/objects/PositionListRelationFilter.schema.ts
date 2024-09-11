import { z } from 'zod';
import { PositionWhereInputObjectSchema } from './PositionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PositionListRelationFilter> = z
	.object({
		every: z.lazy(() => PositionWhereInputObjectSchema).optional(),
		some: z.lazy(() => PositionWhereInputObjectSchema).optional(),
		none: z.lazy(() => PositionWhereInputObjectSchema).optional()
	})
	.strict();

export const PositionListRelationFilterObjectSchema = Schema;
